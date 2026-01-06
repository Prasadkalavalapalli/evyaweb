import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaSearch, FaTimes } from 'react-icons/fa';

// Components
import FitBounds from './FitBounds';
import { createStationIcon } from './MapUtils';
import { pallette } from '../Utils/Pallete';
import Spinner from '../../helpers/Spinner';
import FilterTabs from './FiltersTab';
import ErrorMessage from '../../helpers/ErrorMessage'; // Import the ErrorMessage component

// Redux actions
import { fetchStations, updateSearch, updateFilters } from '../../redux/StationsSlice';
import SiteCard from '../SiteCard';

// Fix leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;  
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

const MapSearch = () => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  
  // Redux state
  const { 
    stations = [], 
    loading: stationsLoading, 
    error: stationsError,
    search: reduxSearch
  } = useSelector((state) => state.stations);
  
  // Get applied filters from Redux
  const appliedFilters = useSelector((state) => state.stations.lastUsedParams?.filters || {});
  
  // Local state
  const [selectedStation, setSelectedStation] = useState(null);
  const [localSearchQuery, setLocalSearchQuery] = useState(reduxSearch || '');
  const [noStationsMessage, setNoStationsMessage] = useState('');
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Sync local search with Redux
  useEffect(() => {
    if (reduxSearch !== undefined) {
      setLocalSearchQuery(reduxSearch);
    }
  }, [reduxSearch]);

  // Fetch stations with search and filters
  const fetchStationsWithParams = useCallback((search = '', filters = {}) => {
    dispatch(fetchStations({  
      search,
      filters 
    }));
    setIsInitialLoad(false);
  }, [dispatch]);

  // Handle filter changes
  const handleFilterChange = useCallback((newFilters) => {
    dispatch(updateFilters(newFilters));
    fetchStationsWithParams(localSearchQuery, newFilters);
  }, [localSearchQuery, fetchStationsWithParams, dispatch]);

  // Handle search button click
  const handleSearch = useCallback(() => {
    // Update search in Redux
    dispatch(updateSearch(localSearchQuery));
    
    // Clear selected station when searching
    setSelectedStation(null);
    
    // Fetch with search and filters
    fetchStationsWithParams(localSearchQuery, appliedFilters);
  }, [localSearchQuery, appliedFilters, fetchStationsWithParams, dispatch]);

  // Clear search
  const clearSearch = useCallback(() => {
    setLocalSearchQuery('');
    dispatch(updateSearch(''));
    setSelectedStation(null); // Clear selected station
    fetchStationsWithParams('', appliedFilters);
  }, [dispatch, fetchStationsWithParams, appliedFilters]);

  // Handle Enter key press in search
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Filter stations with valid coordinates
  const stationsWithCoordinates = useMemo(() => 
    stations.filter(station => {
      const lat = station.latitude;
      const lng = station.longitude;
      
      const latNum = parseFloat(lat);
      const lngNum = parseFloat(lng);
      
      return !isNaN(latNum) && !isNaN(lngNum) && 
             latNum >= -90 && latNum <= 90 && 
             lngNum >= -180 && lngNum <= 180;
    }), [stations]);

  // Handle marker click
  const handleMarkerClick = useCallback((station) => {
    setSelectedStation(station);
  }, []);

  // Handle map click to deselect station
  const handleMapClick = () => {
    setSelectedStation(null);
  };

  // Handle navigation to site
  const handleNavigateToSite = (site) => {
    console.log('Navigate to:', site);
    // Add navigation logic here
  };

  // Close site card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If site card is open and user clicks outside of it, close it
      if (selectedStation && !event.target.closest('.site-card-container, .leaflet-marker-icon')) {
        setSelectedStation(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [selectedStation]);

  // Show no stations message when search returns empty
  useEffect(() => {
    if (!stationsLoading && !isInitialLoad && stations.length === 0) {
      let message = 'No charging stations found';
      
      // if (localSearchQuery) {
      //   message += ` for "${localSearchQuery}"`;
      // }
      
      // if (Object.values(appliedFilters).some(filter => filter !== null)) {
      //   if (localSearchQuery) {
      //     message += ' with current filters';
      //   } else {
      //     message += ' with current filters';
      //   }
      // }
      
      setNoStationsMessage(message);
      
      // Auto-clear message after 4 seconds
      const timer = setTimeout(() => {
        setNoStationsMessage('');
      }, 4000);
      
      return () => clearTimeout(timer);
    } else {
      setNoStationsMessage('');
    }
  }, [stations, stationsLoading, localSearchQuery, appliedFilters, isInitialLoad]);

  // Initial load
  useEffect(() => {
    if (isInitialLoad) {
      fetchStationsWithParams(localSearchQuery, appliedFilters);
    }
  }, []);

  if (stationsLoading && stations.length === 0 && isInitialLoad) {
    return (
      <div style={styles.loadingContainer}>
        <Spinner size={80} color={pallette.primary} message="Loading stations..." />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        
        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <div style={styles.searchBox}>
            <FaSearch style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search charging stations..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              style={styles.searchInput}
            />
            {localSearchQuery && (
              <FaTimes 
                style={styles.clearIcon} 
                onClick={clearSearch}
                title="Clear search"
              />
            )}
          </div>
          <button 
            style={styles.searchButton}
            onClick={handleSearch}
            onMouseEnter={(e) => e.target.style.backgroundColor = pallette.primaryDark}
            onMouseLeave={(e) => e.target.style.backgroundColor = pallette.primary}
            disabled={stationsLoading}
          >
            {stationsLoading ? 'Searching...' : 'Search'}
          </button>
        </div>

        {/* Filter Tabs */}
        <div style={styles.filterContainer}>
          <FilterTabs onFilterChange={handleFilterChange} />
        </div>

        {/* Map Container */}
        <div style={styles.mapContainer}>
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={styles.map}
            whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
            onClick={handleMapClick}
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Fit bounds for stations */}
            {stationsWithCoordinates.length > 0 && (
              <FitBounds 
                sites={stationsWithCoordinates} 
                shouldFit={true}
              />
            )}

            {/* Station Markers */}
            {stationsWithCoordinates.map((station) => {
              const lat = parseFloat(station.latitude);
              const lng = parseFloat(station.longitude);
              const isSelected = selectedStation?.siteId === station.siteId;

              return (
                <Marker
                  key={station.siteId || station.id}
                  position={[lat, lng]}
                  icon={createStationIcon(station, isSelected)}
                  eventHandlers={{
                    click: (e) => {
                      e.originalEvent.stopPropagation();
                      handleMarkerClick(station);
                    },
                  }}
                />
              );
            })}
          </MapContainer>

          {/* Loading Overlay for initial load */}
          {stationsLoading && stations.length === 0 && (
            <div style={styles.overlay}>
              <div style={styles.spinner} />
              <div style={styles.loadingText}>
                Loading charging stations...
              </div>
            </div>
          )}

          {/* Error Message */}
          {stationsError && (
            <div style={styles.overlay}>
              <div style={styles.errorText}>
                {stationsError}
              </div>
              <button 
                onClick={() => fetchStationsWithParams(localSearchQuery, appliedFilters)}
                style={styles.retryButton}
              >
                Retry
              </button>
            </div>
          )}
        </div>

        {/* Site Card when marker is clicked */}
        {selectedStation && (
          <div className="site-card-container" style={styles.siteCardContainer}>
            <SiteCard
              site={selectedStation}
              onNavigatePress={() => handleNavigateToSite(selectedStation)}
              showDistance={true}
              distance="navigate"
              onClose={() => setSelectedStation(null)}
            />
          </div>
        )}

        {/* No Stations Found Message */}
        <ErrorMessage message={noStationsMessage} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: pallette.white,
    boxSizing: 'border-box',
    zIndex: 1,
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: pallette.white,
  },
  searchContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 1001,
    display: 'flex',
    gap: 10,
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: 12,
    padding: '8px 16px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
  },
  searchIcon: {
    fontSize: 18,
    color: pallette.grey,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: 14,
    background: 'transparent',
  },
  clearIcon: {
    fontSize: 16,
    color: pallette.grey,
    cursor: 'pointer',
    padding: 4,
  },
  searchButton: {
    padding: '10px 20px',
    backgroundColor: pallette.primary,
    color: pallette.white,
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 'bold',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s, opacity 0.3s',
    opacity: 1,
  },
  filterContainer: {
    position: 'absolute',
    top: 80,
    left: 20,
    right: 20,
    zIndex: 1000,
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: pallette.white,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(255, 255, 255, 0.95)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 3000,
    backdropFilter: 'blur(8px)',
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '4px solid #f3f3f3',
    borderTop: `4px solid ${pallette.primary}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  loadingText: {
    marginTop: '16px',
    color: pallette.primary,
    fontSize: '16px',
    fontWeight: '500',
  },
  errorText: {
    color: pallette.error,
    marginBottom: '16px',
    padding: '0 20px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '500',
  },
  noStationsText: {
    color: pallette.primary,
    marginBottom: '16px',
    padding: '0 20px',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '500',
  },
  retryButton: {
    padding: '12px 24px',
    backgroundColor: pallette.primary,
    color: pallette.white,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
  },
  siteCardContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 1000,
  },
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: pallette.white,
  },
};

// Add CSS animation
const styleSheet = document.styleSheets[0];
if (styleSheet) {
  try {
    styleSheet.insertRule(`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `, styleSheet.cssRules.length);
  } catch (e) {
    // Rule already exists
  }
}

export default MapSearch;