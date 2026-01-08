import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaArrowLeft, FaBackward,FaList, FaTimes,FaCrosshairs } from 'react-icons/fa';

// Components
import FitBounds from './FitBounds';
import { createStationIcon } from './MapUtils';
import { pallette } from '../Utils/Pallete';
import Spinner from '../../helpers/Spinner';
import FilterTabs from './FiltersTab';
import ErrorMessage from '../../helpers/ErrorMessage';

// Redux actions
import { fetchStations, updateSearch, updateFilters } from '../../redux/StationsSlice';
import SiteCard from '../SiteCard';
import { useNavigate } from 'react-router-dom';


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
 const navigate = useNavigate();

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
    setSelectedStation(null);
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
  };

  // Close site card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
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
      setNoStationsMessage('No charging stations found');
      
      const timer = setTimeout(() => {
        setNoStationsMessage('');
      }, 4000);
      
      return () => clearTimeout(timer);
    } else {
      setNoStationsMessage('');
    }
  }, [stations, stationsLoading, isInitialLoad]);

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
        
        {/* Search Bar - Always side by side */}
        <div style={styles.searchContainer}>
          
          <div style={styles.searchWrapper}>
            
            <div style={styles.searchBox}>
              <FaArrowLeft
  style={styles.backButton} 
  onClick={() => navigate(-1)} 
  title="Go back"
/>
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
              style={{
                ...styles.searchButton,
                ...(stationsLoading ? styles.searchButtonDisabled : {})
              }}
              onClick={handleSearch}
              disabled={stationsLoading}
            >
              {stationsLoading ? (
                <div style={styles.loadingDots}>
                  <span>.</span><span>.</span><span>.</span>
                </div>
              ) : (
                <>
                  {/* <FaSearch style={styles.searchButtonIcon} /> */}
                  <span style={styles.searchButtonText}>Search</span>
                </>
              )}
            </button>
          </div>
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
               url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
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
            <div style={styles.loadingContainer}>
        <Spinner size={80} color={pallette.primary} message=" Loading charging stations..." />
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
        {/* Action Buttons */}
                <div style={styles.actionButtons}>
                  {/* <button
                    style={styles.actionButton}
                    onClick={centerOnUser}
                    title="Center on my location"
                  >
                    <FaCrosshairs style={styles.actionIcon} />
                  </button> */}
                  {/* <button 
                    onClick={() => navigate("/stations")}
                    style={styles.actionButton}
                    title="View list"
                  >
                    <FaList style={styles.actionIcon} />
                  </button> */}
                </div>
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
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: pallette.white,
  },
  // Search container
  searchContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 1000,
  },
  searchWrapper: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    width: '100%',
  },
  searchBox: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '8px 16px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    minWidth: 0,
    position: 'relative',
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    background: 'transparent',
    minWidth: 0,
    paddingRight: '30px',
  },
  clearIcon: {
    position: 'absolute',
    right: '10px',
    fontSize: '14px',
    color: pallette.grey,
    cursor: 'pointer',
    padding: '4px',
  },
  searchButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '10px 20px',
    backgroundColor: pallette.primary,
    color: pallette.white,
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    minWidth: '100px',
  },
  searchButtonDisabled: {
    opacity: 0.7,
    cursor: 'not-allowed',
  },
  searchButtonIcon: {
    fontSize: '14px',
  },
  searchButtonText: {
    display: 'inline-block',
  },
  loadingDots: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2px',
    fontSize: '20px',
    lineHeight: '1',
  },
  actionButtons: {
    position: 'absolute',
    top: '200px',
    right: '20px',
    zIndex: 2000,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  actionButton: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
    width: '42px',
    height: '42px',
    borderRadius: '26px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    transition: 'all 0.2s ease',
  },
  actionIcon: {
    fontSize: '22px',
    color: pallette.primary,
  },
  // Filter container
  filterContainer: {
    position: 'absolute',
    top: '80px',
    left: '20px',
    right: '20px',
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
    bottom: '20px',
    left: '20px',
    right: '20px',
    zIndex: 1000,
  },
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
   
  },
};

// Add responsive styles
const responsiveStyles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Tablet styles (768px and below) */
  @media (max-width: 768px) {
    .search-container {
      top: 15px;
      left: 15px;
      right: 15px;
    }
    
    .search-wrapper {
      gap: 8px;
    }
    
    .search-box {
      padding: 6px 14px;
      border-radius: 10px;
    }
    
    .search-input {
      font-size: 13px;
      padding-right: 28px;
    }
    
    .clear-icon {
      right: 8px;
      font-size: 13px;
      padding: 3px;
    }
    
    .search-button {
      padding: 8px 16px;
      font-size: 13px;
      border-radius: 10px;
      min-width: 90px;
    }
    
    .search-button-icon {
      font-size: 13px;
    }
    
    .filter-container {
      top: 70px;
      left: 15px;
      right: 15px;
    }
    
    .site-card-container {
      bottom: 15px;
      left: 15px;
      right: 15px;
    }
  }

  /* Small tablet styles (600px and below) */
  @media (max-width: 600px) {
    .search-container {
      top: 12px;
      left: 12px;
      right: 12px;
    }
    
    .search-wrapper {
      gap: 6px;
    }
    
    .search-box {
      padding: 5px 12px;
      border-radius: 8px;
    }
    
    .search-input {
      font-size: 12px;
      padding-right: 26px;
    }
    
    .clear-icon {
      right: 6px;
      font-size: 12px;
      padding: 2px;
    }
    
    .search-button {
      padding: 7px 12px;
      font-size: 12px;
      border-radius: 8px;
      min-width: 80px;
    }
    
    .search-button-text {
      display: none;
    }
    
    .search-button-icon {
      font-size: 12px;
      margin: 0;
    }
    
    .filter-container {
      top: 65px;
      left: 12px;
      right: 12px;
    }
  }

  /* Mobile styles (480px and below) */
  @media (max-width: 480px) {
    .search-container {
      top: 10px;
      left: 10px;
      right: 10px;
    }
    
    .search-wrapper {
      gap: 5px;
    }
    
    .search-box {
      padding: 4px 10px;
      border-radius: 6px;
    }
    
    .search-input {
      font-size: 11px;
      padding-right: 24px;
    }
    
    .clear-icon {
      right: 5px;
      font-size: 11px;
    }
    
    .search-button {
      padding: 6px 10px;
      font-size: 11px;
      border-radius: 6px;
      min-width: 60px;
    }
    
    .search-button-icon {
      font-size: 11px;
    }
    
    .filter-container {
      top: 60px;
      left: 10px;
      right: 10px;
    }
    
    .site-card-container {
      bottom: 10px;
      left: 10px;
      right: 10px;
    }
    
    .loading-text,
    .error-text {
      font-size: 14px;
      padding: 0 15px;
    }
    
    .retry-button {
      padding: 10px 20px;
      font-size: 14px;
    }
  }

  /* Very small mobile styles (360px and below) */
  @media (max-width: 360px) {
    .search-container {
      top: 8px;
      left: 8px;
      right: 8px;
    }
    
    .search-box {
      padding: 3px 8px;
    }
    
    .search-input {
      font-size: 10px;
    }
    
    .search-button {
      padding: 5px 8px;
      font-size: 10px;
      min-width: 50px;
    }
    
    .search-button-icon {
      font-size: 10px;
    }
    
    .filter-container {
      top: 55px;
      left: 8px;
      right: 8px;
    }
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerHTML = responsiveStyles;
document.head.appendChild(styleSheet);

export default MapSearch;