import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaCrosshairs, FaList, FaDirections, FaSearch, FaBolt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MapController from './MapController';
import FitBounds from './FitBounds';
import { createStationIcon } from './MapUtils';
import { pallette } from '../Utils/Pallete';
import Spinner from '../../helpers/Spinner';
import StationCards from './StationCard';
import FilterTabs from './FiltersTab';
import { fetchStations } from '../../redux/StationsSlice';

// Fix leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { 
    stations: sites = [], 
    loading: stationsLoading, 
    error: stationsError,
    lastUsedParams
  } = useSelector((state) => state.stations || {});

  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  const [flyToLocation, setFlyToLocation] = useState(null);
  const [flyToZoom, setFlyToZoom] = useState(14);
  const [shouldFly, setShouldFly] = useState(false);
  const [shouldFitBounds, setShouldFitBounds] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [cardsVisible, setCardsVisible] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
  const mapRef = useRef(null);
  const cardsRef = useRef(null);
  const markerRefs = useRef({});

  // Get current location and fetch stations with filters
  const fetchStationsWithParams = useCallback((location, filters = {}) => {
    if (!location) return;
    
    const requestParams = { 
      location: { 
        latitude: location.lat, 
        longitude: location.lng 
      },
      filters: filters
    };
    
    console.log('Fetching stations with params:', requestParams);
    dispatch(fetchStations(requestParams));
    setShouldFitBounds(true);
  }, [dispatch]);

  // Handle filter changes from FilterTabs
  const handleFilterChange = useCallback((newFilters) => {
    console.log('Filter change received:', newFilters);
    if (currentLocation) {
      fetchStationsWithParams(currentLocation, newFilters);
    }
  }, [currentLocation, fetchStationsWithParams]);

  // Initial load with current location and any existing filters
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const location = { 
            lat: pos.coords.latitude, 
            lng: pos.coords.longitude 
          };
          setCurrentLocation(location);
          
          // Use existing filters from Redux store if available
          const existingFilters = lastUsedParams?.filters || {};
          console.log('Initial load with filters:', existingFilters);
          fetchStationsWithParams(location, existingFilters);
        },
        (err) => {
          console.error('Geolocation error:', err);
          const defaultLocation = { lat: 28.6139, lng: 77.2090 };
          setCurrentLocation(defaultLocation);
          
          const existingFilters = lastUsedParams?.filters || {};
          fetchStationsWithParams(defaultLocation, existingFilters);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }
  }, [fetchStationsWithParams]);

  // Handle click outside cards
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardsRef.current && !cardsRef.current.contains(event.target)) {
        setCardsVisible(false);
        setSelectedStation(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Handle marker click
  const handleMarkerClick = useCallback((station, index) => {
    setSelectedStation(station);
    setCardsVisible(true);
    setActiveCardIndex(index);
    
    const lat = station.coordinates?.latitude || station.latitude || station.lat;
    const lng = station.coordinates?.longitude || station.longitude || station.lng;
    
    if (lat && lng) {
      setFlyToLocation([lat, lng]);
      setFlyToZoom(16);
      setShouldFly(true);
    }
  }, []);

  // Handle card selection from StationCards
  const handleCardSelect = useCallback((station, index) => {
    setSelectedStation(station);
    setCardsVisible(true);
    setActiveCardIndex(index);
    
    const lat = station.coordinates?.latitude || station.latitude || station.lat;
    const lng = station.coordinates?.longitude || station.longitude || station.lng;
    
    if (lat && lng) {
      setFlyToLocation([lat, lng]);
      setFlyToZoom(16);
      setShouldFly(true);
    }
  }, []);

  // Center on user location
  const centerOnUser = useCallback(() => {
    if (currentLocation) {
      setFlyToLocation([currentLocation.lat, currentLocation.lng]);
      setFlyToZoom(14);
      setShouldFly(true);
      setSelectedStation(null);
      setCardsVisible(false);
    }
  }, [currentLocation]);

  // Handle map click (clear selection)
  const handleMapClick = useCallback(() => {
    setSelectedStation(null);
    setCardsVisible(false);
  }, []);

  // Calculate distance between two points
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (R * c).toFixed(1) + " KM";
  };

  // Filter stations with valid coordinates
  const displayStations = sites;
  
  const stationsWithCoordinates = useMemo(() => 
    displayStations.filter(station => {
      const lat = station.coordinates?.latitude || station.latitude || station.lat;
      const lng = station.coordinates?.longitude || station.longitude || station.lng;
      return lat && lng;
    }), [displayStations]);

  // Toggle cards visibility
  const toggleCardsVisibility = useCallback(() => {
    setCardsVisible(!cardsVisible);
  }, [cardsVisible]);

  // Handle card navigation
  const handleCardNavigation = useCallback((direction) => {
    if (stationsWithCoordinates.length === 0) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = activeCardIndex === stationsWithCoordinates.length - 1 ? 0 : activeCardIndex + 1;
    } else {
      newIndex = activeCardIndex === 0 ? stationsWithCoordinates.length - 1 : activeCardIndex - 1;
    }
    
    const station = stationsWithCoordinates[newIndex];
    setSelectedStation(station);
    setActiveCardIndex(newIndex);
    
    const lat = station.coordinates?.latitude || station.latitude || station.lat;
    const lng = station.coordinates?.longitude || station.longitude || station.lng;
    
    if (lat && lng) {
      setFlyToLocation([lat, lng]);
      setFlyToZoom(16);
      setShouldFly(true);
    }
  }, [stationsWithCoordinates, activeCardIndex]);

  // Check if we have active filters
  const hasActiveFilters = useMemo(() => {
    return lastUsedParams?.filters && (
      lastUsedParams.filters.chargerType || 
      lastUsedParams.filters.connectorType || 
      lastUsedParams.filters.status
    );
  }, [lastUsedParams]);

  // Handle clearing filters
  const handleClearFilters = useCallback(() => {
    if (currentLocation) {
      console.log('Clearing all filters');
      // Fetch stations without filters
      fetchStationsWithParams(currentLocation, {});
    }
  }, [currentLocation, fetchStationsWithParams]);

  if (!currentLocation) {
    return (
      <div style={styles.loadingContainer}>
        <Spinner size={80} color={pallette.primary} message="Getting your location..." />
      </div>
    );
  }

  const handleCardClick = (station) => {
    // Navigate to station details
    const encodedSite = encodeURIComponent(JSON.stringify(station));
    window.location.href = `evya://stationdetails?station=${encodedSite}`;
  };

  return (
    <div style={styles.container}>
      {/* Filter Tabs */}
      <div style={styles.filterContainer}>
        <FilterTabs 
          searchQuery={searchQuery} 
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Map Container */}
      <div style={styles.mapContainer}>
        <MapContainer
          center={[currentLocation.lat, currentLocation.lng]}
          zoom={14}
          style={styles.map}
          whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
          onClick={handleMapClick}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Fit bounds for initial load */}
          {!searchQuery && shouldFitBounds && (
            <FitBounds 
              sites={stationsWithCoordinates} 
              currentLocation={currentLocation} 
              shouldFit={shouldFitBounds}
            />
          )}

          {/* Map controller for flying to locations */}
          {flyToLocation && (
            <MapController center={flyToLocation} zoom={flyToZoom} shouldFly={shouldFly} />
          )}

          {/* User Location Marker */}
          <CircleMarker
            center={[currentLocation.lat, currentLocation.lng]}
            radius={8}
            pathOptions={{ 
              color: pallette.l1, 
              fillColor: pallette.l1, 
              fillOpacity: 0.8, 
              weight: 2 
            }}
          >
            <Popup>Your Current Location</Popup>
          </CircleMarker>

          {/* Station Markers - NO POPUP */}
          {stationsWithCoordinates.map((station, index) => {
            const lat = station.coordinates?.latitude || station.latitude || station.lat;
            const lng = station.coordinates?.longitude || station.longitude || station.lng;
            
            if (!lat || !lng) return null;

            const isSelected = selectedStation?.id === station.id;

            return (
              <Marker
                key={station.id || `${lat}-${lng}-${index}`}
                position={[lat, lng]}
                icon={createStationIcon(station, isSelected)}
                eventHandlers={{
                  click: (e) => {
                    e.originalEvent.stopPropagation();
                    handleMarkerClick(station, index);
                  },
                }}
                ref={(ref) => {
                  if (ref) {
                    markerRefs.current[station.id] = ref;
                  }
                }}
              >
                {/* No Popup - removed intentionally */}
              </Marker>
            );
          })}
        </MapContainer>

        {/* Loading Overlay */}
        {stationsLoading && (
          <div style={styles.loadingContainer}>
        <Spinner size={80} color={pallette.primary} message=" Loading charging stations..." />
      </div>
         
          
        )}

        {/* Error Overlay */}
        {stationsError && (
          <div style={styles.overlay}>
            <div style={styles.errorText}>
              {stationsError}
            </div>
            <button 
              onClick={() => currentLocation && fetchStationsWithParams(currentLocation, lastUsedParams?.filters || {})}
              style={styles.retryButton}
            >
              Retry
            </button>
          </div>
        )}

        {/* No Stations Message with filter info */}
        {!stationsLoading && !stationsError && stationsWithCoordinates.length === 0 && (
          <div style={styles.overlay}>
            <div style={{
              ...styles.noStationsText,
              marginBottom: hasActiveFilters ? '16px' : '0'
            }}>
              {hasActiveFilters 
                ? "No charging stations found with the selected filters"
                : "No charging stations found in your area"
              }
            </div>
            {hasActiveFilters && (
              <button 
                onClick={handleClearFilters}
                style={styles.clearFiltersButton}
              >
                Clear Filters
              </button>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div style={styles.actionButtons}>
          <button
            style={styles.actionButton}
            onClick={centerOnUser}
            title="Center on my location"
          >
            <FaCrosshairs style={styles.actionIcon} />
          </button>
          <button 
            onClick={() => navigate("/stations")}
            style={styles.actionButton}
            title="View list"
          >
            <FaList style={styles.actionIcon} />
          </button>
          <button
            style={styles.actionButton}
            onClick={() => navigate("/route")}
            title="Get directions"
          >
            <FaDirections style={styles.actionIcon} />
          </button>
          <button
            style={styles.actionButton}
            onClick={() => navigate("/mapsearch")}
            title="Get searched data"
          >
            <FaSearch style={styles.actionIcon} />
          </button>
        </div>

        {/* Toggle Cards Button */}
        {!cardsVisible && stationsWithCoordinates.length > 0 && (
          <button 
            style={styles.toggleCardsButton}
            onClick={toggleCardsVisibility}
            title="Show stations"
          >
            <FaBolt style={styles.toggleIcon} />
          </button>
        )}

        {/* Navigation Arrows (when cards are visible) */}
        {cardsVisible && selectedStation && stationsWithCoordinates.length > 1 && (
          <>
            
          </>
        )}

        {/* Stations Cards */}
        {cardsVisible && stationsWithCoordinates.length > 0 && (
          <div ref={cardsRef}>
            <StationCards
              stations={stationsWithCoordinates}
              currentLocation={currentLocation}
              selectedStation={selectedStation}
              activeCardIndex={activeCardIndex}
              onStationSelect={handleCardSelect}
              onNavigate={(station) => {
                const lat = station.coordinates?.latitude || station.latitude || station.lat;
                const lng = station.coordinates?.longitude || station.longitude || station.lng;
                if (lat && lng) {
                  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
                  window.open(url, '_blank');
                }
              }}
              onCardChange={handleCardNavigation}
            />
          </div>
        )}
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
    borderRadius: 20,
    backgroundColor: pallette.white,
    boxSizing: 'border-box',
    zIndex: 1,
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: pallette.white,
  },
  filterContainer: {
    position: 'absolute',
    top: 20,
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
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: pallette.white,
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
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
    animation: 'spin 1s linear infinite'
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
    textAlign: 'center',
    padding: '0 20px',
    fontSize: '15px',
    fontWeight: '500',
  },
  noStationsText: {
    color: pallette.primary,
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
  },
  clearFiltersButton: {
    padding: '12px 24px',
    backgroundColor: pallette.primary,
    color: pallette.white,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold',
    marginTop: '16px',
  },
  actionButtons: {
    position: 'absolute',
    top: '100px',
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
  toggleCardsButton: {
    position: 'absolute',
    bottom: '120px',
    right: '20px',
    background: pallette.primary,
    color: pallette.white,
    width: '50px',
    height: '50px',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    zIndex: 2000,
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
  },
  toggleIcon: {
    fontSize: '24px',
    color: pallette.white,
  },
  navArrowLeft: {
    position: 'absolute',
    left: '20px',
    bottom: '150px',
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2000,
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    fontSize: '14px',
  },
  navArrowRight: {
    position: 'absolute',
    right: '20px',
    bottom: '150px',
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2000,
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    fontSize: '14px',
  },
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
   
  },
};

// Add CSS animation
if (typeof document !== 'undefined') {
  const styleSheet = document.styleSheets[0];
  if (styleSheet) {
    styleSheet.insertRule(`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `, styleSheet.cssRules.length);
  }
}

export default MapSection;