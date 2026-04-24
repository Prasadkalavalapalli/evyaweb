
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaCrosshairs, FaList, FaDirections, FaSearch, FaBolt, FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import MapController from './MapController';
import FitBounds from './FitBounds';
import { createStationIcon } from './MapUtils';
import { pallette } from '../Utils/Pallete';
import Spinner from '../../helpers/Spinner';
import StationCards from './StationCard';
import FilterTabs from './FiltersTab';
import { fetchStations } from '../../redux/StationsSlice';
import ErrorMessage from '../../helpers/ErrorMessage';
import UserLocationMarker from './createUserLocationIcon ';

// Fix leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Map Move Listener Component
const MapMoveListener = ({ onLocationChange, debounceDelay = 1500 }) => {
  const timeoutRef = useRef(null);
  const lastCenterRef = useRef(null);

  const map = useMapEvents({
    moveend: () => {
      const center = map.getCenter();
      //lavanya
      const zoom = map.getZoom();
      // Prevent duplicate calls for same location
      if (lastCenterRef.current && 
          lastCenterRef.current.lat === center.lat && 
          lastCenterRef.current.lng === center.lng) {
        return;
      }
      
      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Debounce to prevent too many API calls
      timeoutRef.current = setTimeout(() => {
        lastCenterRef.current = center;
        onLocationChange({
          lat: center.lat,
          lng: center.lng,
          zoom: zoom,
        });
      }, debounceDelay);
    },
  });

  // Cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return null;
};

const MapSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { 
    stations: sites = [], 
    loading: stationsLoading, 
    error: stationsError,
    lastUsedParams
  } = useSelector((state) => state.stations || {});
  //lavanya
const [showBlueDot, setShowBlueDot] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  const [flyToLocation, setFlyToLocation] = useState(null);
  const [flyToZoom, setFlyToZoom] = useState(14);
  const [shouldFly, setShouldFly] = useState(false);
  const [shouldFitBounds, setShouldFitBounds] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [cardsVisible, setCardsVisible] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isMapMovedByUser, setIsMapMovedByUser] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isLocating, setIsLocating] = useState(false);
  const[location,setLocation]=useState(false);
  const[rotation,setRotation]=useState(0)
  const mapRef = useRef(null);
  const cardsRef = useRef(null);
  const [userlocation,setUserlocation]=useState(null);
  const markerRefs = useRef({});
  //sukanya
const lastFetchParamsRef = useRef(null);
const [isNavigatingByCard, setIsNavigatingByCard] = useState(false);
const navigationTimeoutRef = useRef(null);

  // Get station coordinates
  const getStationCoordinates = useCallback((station) => {
    return {
      lat: station.coordinates?.latitude || station.latitude || station.lat,
      lng: station.coordinates?.longitude || station.longitude || station.lng
    };
  }, []);
//lavaay
const getRadiusFromMapBounds = (map) => {
  if (!map) return 10;

  const bounds = map.getBounds();
  const ne = bounds.getNorthEast();
  const sw = bounds.getSouthWest();

  const R = 6371;

  const toRad = (deg) => deg * Math.PI / 180;

  const dLat = toRad(ne.lat - sw.lat);
  const dLon = toRad(ne.lng - sw.lng);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(sw.lat)) *
      Math.cos(toRad(ne.lat)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const diagonalDistance = R * c;

  return Math.ceil(diagonalDistance * 1.3); // 🔥 BUFFER added
};
  // Calculate distance between two points
  const calculateDistance = useCallback((lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (R * c).toFixed(1) + " KM";
  }, []);

  // Fetch stations with params
  //lavanya
  const fetchStationsWithParams = useCallback((location, filters = {}) => {
  if (!location) return;

  const currentParams = {
    lat: location.lat,
    lng: location.lng,
    radius: location.radius || 10,
    status: filters?.status || null,
    connectorType: filters?.connectorType || null,
    chargerType: filters?.chargerType || null,
  };

  // 🔥 Proper comparison
  const isSameRequest = (prev, next) => {
    return (
      Math.abs(prev.lat - next.lat) < 0.0001 &&
      Math.abs(prev.lng - next.lng) < 0.0001 &&
      Math.abs(prev.radius - next.radius) < 1 &&
      prev.status === next.status &&
      prev.connectorType === next.connectorType &&
      prev.chargerType === next.chargerType
    );
  };

  if (
  lastFetchParamsRef.current &&
  isSameRequest(lastFetchParamsRef.current, currentParams) 
 // isWithinBounds(lastFetchParamsRef.current, currentParams)
) {
  return; // 🚫 skip API
}

  lastFetchParamsRef.current = currentParams;

  const requestParams = {
    location: {
      latitude: location.lat,
      longitude: location.lng,
      radius: location.radius || 10,
    },
    filters: filters,
  };

  console.log("🔥 API CALL:", requestParams);

  dispatch(fetchStations(requestParams));
}, [dispatch]);
const getRadiusFromZoom = (zoom) => {
  // Linear formula: higher zoom = smaller radius
  // Zoom 0 => 200 km, Zoom 20 => 1 km
  const maxRadius = 500; // km
  const minRadius = 1;   // km

  const radius = maxRadius * Math.pow(0.75, zoom); 
  return Math.max(radius, minRadius);
};
  // Handle filter changes
  const handleFilterChange = useCallback((newFilters) => {
    if (currentLocation) {
      setIsInitialLoad(false);
      fetchStationsWithParams(currentLocation, newFilters);
    }
  }, [currentLocation, fetchStationsWithParams]);

  // Handle map location change
  //lavany
  const getDynamicRadius = (location) => {
  if (mapRef.current) {
    return getRadiusFromMapBounds(mapRef.current);
  } else if (location.zoom) {
    return getRadiusFromZoom(location.zoom);
  } else {
    return 10; // fallback
  }
};
useEffect(() => {
  if (!location) return;

  const interval = setInterval(() => {
    setRotation((prev) => prev + 30);
  }, 50);

  return () => clearInterval(interval);
}, [location]);
//lavanya & sukanay
// const handleMapLocationChange = useCallback((location) => {
//   if (isNavigatingByCard) {
//     console.log('Skipping API call - navigation in progress');
//     return;
//   }
  
//   setIsMapMovedByUser(true);
//   setIsInitialLoad(false);
//   setShowBlueDot(false);
//   setCurrentLocation(location);
//   setShouldFitBounds(false);

//   // 🌍 Zoomed out → show all
//   if (location.zoom < 7) {
//     const newLocation = {
//       lat: location.lat,
//       lng: location.lng,
//       radius: 2000
//     };

//     setCurrentLocation(newLocation);

//     fetchStationsWithParams(newLocation, lastUsedParams?.filters || {}, true);
//     return;
//   }

//   // lavs added
// const radius = getDynamicRadius(location);
// console.log("Map Location Changed:", location);
//   console.log("Calculated Dynamic Radius:", radius);
//   const newLocation = {
//     lat: location.lat,
//     lng: location.lng,
//     radius
//   };

//   setCurrentLocation(newLocation);  
  
//   const activeFilters = lastUsedParams?.filters || {};

//   fetchStationsWithParams(location, activeFilters, newLocation, lastUsedParams?.filters || {});
// }, [fetchStationsWithParams, lastUsedParams, isNavigatingByCard]);
//sukanya
const handleMapLocationChange = useCallback((location) => {
  if (isNavigatingByCard || selectedStation) {
    console.log('Skipping API call - navigation/selection in progress');
    return;
  } 

  setIsMapMovedByUser(true);
  setIsInitialLoad(false);
  setCurrentLocation(location);
  setShouldFitBounds(false);

  const activeFilters = lastUsedParams?.filters || {};
  fetchStationsWithParams(location, activeFilters);
}, [fetchStationsWithParams, lastUsedParams, isNavigatingByCard, selectedStation]);
// const handleMapLocationChange = useCallback((location) => {
//   setIsMapMovedByUser(true);
//   setIsInitialLoad(false);
//   //lavs added
//   setShowBlueDot(false);

//   // 🌍 Zoomed out → show all
//   if (location.zoom < 7) {
//     const newLocation = {
//       lat: location.lat,
//       lng: location.lng,
//       radius: 2000
//     };

//     setCurrentLocation(newLocation);

//     fetchStationsWithParams(newLocation, lastUsedParams?.filters || {}, true);
//     return;
//   }

//   // lavs added
// const radius = getDynamicRadius(location);
// console.log("Map Location Changed:", location);
//   console.log("Calculated Dynamic Radius:", radius);
//   const newLocation = {
//     lat: location.lat,
//     lng: location.lng,
//     radius
//   };

//   setCurrentLocation(newLocation);

//   fetchStationsWithParams(newLocation, lastUsedParams?.filters || {});
// }, [fetchStationsWithParams, lastUsedParams]);

  // Center on user location
  const centerOnUser = useCallback(() => {
    if (!navigator.geolocation) {
      // Fallback for browsers without geolocation
      if (currentLocation) {
        setFlyToLocation([currentLocation.lat, currentLocation.lng]);
        setFlyToZoom(14);
        setShouldFly(true);
        setSelectedStation(null);
        setCardsVisible(false);
        setIsMapMovedByUser(false);
      setShowBlueDot(true);}
      return;
    }

    setLocation(true);
    
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        //lavanay
       const freshLocation = { 
  lat: pos.coords.latitude, 
  lng: pos.coords.longitude,
  radius: getDynamicRadius({ lat: pos.coords.latitude, lng: pos.coords.longitude, zoom: mapRef.current?.getZoom() })// lavs ✅ ADD
};
        
        // Update state with fresh location
        setCurrentLocation(freshLocation);
        //prasad
        setUserlocation(freshLocation);
        // Fly to the fresh location
        setFlyToLocation([freshLocation.lat, freshLocation.lng]);
        setFlyToZoom(14);
        setShouldFly(true);
        setSelectedStation(null);
        setCardsVisible(false);
        setIsMapMovedByUser(false);
        setLocation(false);
        
        // Re-fetch stations for the new location
        const existingFilters = lastUsedParams?.filters || {};
        fetchStationsWithParams(freshLocation, existingFilters);
      },
      (err) => {
        setLocation(false);
        
        // Fallback to existing location
        if (currentLocation) {
          setFlyToLocation([currentLocation.lat, currentLocation.lng]);
          setFlyToZoom(14);
          setShouldFly(true);
          setSelectedStation(null);
          setCardsVisible(false);
          setIsMapMovedByUser(false);
        }
      },
      { 
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  }, [currentLocation, lastUsedParams, fetchStationsWithParams]);

  // Initial load
  useEffect(() => {
    const initLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const location = { 
              lat: pos.coords.latitude, 
              lng: pos.coords.longitude 
            };
            setCurrentLocation(location);
            //prasad
            setUserlocation(location);
            setIsMapMovedByUser(false);
            //lavanya
            setShowBlueDot(true);
            const existingFilters = lastUsedParams?.filters || {};
            fetchStationsWithParams(location, existingFilters);
            
            // Set initial load complete after a delay
            setTimeout(() => setIsInitialLoad(false), 500);
          },
          (err) => {
            // Get user's approximate location from IP or use safe fallback
            const getApproximateLocation = () => {
              // You might want to implement IP-based geolocation here
              // For now, using a safe approach
              return new Promise((resolve) => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                    (pos) => resolve({
                      lat: pos.coords.latitude,
                      lng: pos.coords.longitude
                    }),
                    () => resolve(null),
                    { timeout: 5000 }
                  );
                } else {
                  resolve(null);
                }
              });
            };

            getApproximateLocation().then(location => {
              if (location) {
                setCurrentLocation(location);
                setUserlocation(location);
                setIsMapMovedByUser(false);

                const existingFilters = lastUsedParams?.filters || {};
                fetchStationsWithParams(location, existingFilters);
              } else {
                // Use a central location for the country/region
                // This should ideally come from app config or user preferences
                const centralLocation = { 
                  lat: 20.5937,  // Approximate center of India
                  lng: 78.9629 
                };
                setCurrentLocation(centralLocation);
                
                setIsMapMovedByUser(false);
                
                const existingFilters = lastUsedParams?.filters || {};
                fetchStationsWithParams(centralLocation, existingFilters);
              }
              
              setTimeout(() => setIsInitialLoad(false), 500);
            });
          },
          { 
            enableHighAccuracy: true, 
            timeout: 10000,
            maximumAge: 60000 
          }
        );
      } else {
        // Browser doesn't support geolocation
        const centralLocation = { 
          lat: 20.5937,
          lng: 78.9629 
        };
        setCurrentLocation(centralLocation);
        fetchStationsWithParams(centralLocation, {});
        setTimeout(() => setIsInitialLoad(false), 500);
      }
    };

    // Only run on initial mount
    initLocation();
  }, []);



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
//sukanay
useEffect(() => {
  return () => {
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }
  };
}, []);
  // Handle marker click
  //sukan
 const handleMarkerClick = useCallback((station, index) => {
  setIsNavigatingByCard(true);
  
  if (navigationTimeoutRef.current) {
    clearTimeout(navigationTimeoutRef.current);
  }
  
  navigationTimeoutRef.current = setTimeout(() => {
    setIsNavigatingByCard(false);
  }, 2000);
  
  setSelectedStation(station);
  setCardsVisible(true);
  setActiveCardIndex(index);
  
  const coords = getStationCoordinates(station);
  if (coords.lat && coords.lng) {
    setFlyToLocation([coords.lat, coords.lng]);
    setFlyToZoom(16);
    setShouldFly(true);
  }
}, [getStationCoordinates]);
const handleCardSelect = useCallback((station, index) => {
  setIsNavigatingByCard(true);
  
  if (navigationTimeoutRef.current) {
    clearTimeout(navigationTimeoutRef.current);
  }
  
  navigationTimeoutRef.current = setTimeout(() => {
    setIsNavigatingByCard(false);
  }, 2000);
  
  setSelectedStation(station);
  setCardsVisible(true);
  setActiveCardIndex(index);
  
  const coords = getStationCoordinates(station);
  if (coords.lat && coords.lng) {
    setFlyToLocation([coords.lat, coords.lng]);
    setFlyToZoom(16);
    setShouldFly(true);
  }
}, [getStationCoordinates]);

  // Handle card selection
  //sukanay


  // Handle map click
  const handleMapClick = useCallback(() => {
    setSelectedStation(null);
    setCardsVisible(false);
  }, []);

  // Filter stations with valid coordinates
  const stationsWithCoordinates = useMemo(() => 
    sites.filter(station => {
      const coords = getStationCoordinates(station);
      return coords.lat && coords.lng;
    }), [sites, getStationCoordinates]);

  // Toggle cards visibility
  const toggleCardsVisibility = useCallback(() => {
    setCardsVisible(!cardsVisible);
  }, [cardsVisible]);

  // Handle card navigation
  //sukanya
const handleCardNavigation = useCallback((direction) => {
  console.log('Navigation triggered:', direction, 'Current index:', activeCardIndex);
  if (stationsWithCoordinates.length === 0) return;
  
  // Set flag to prevent API calls from map movements
  setIsNavigatingByCard(true);
  
  // Clear any existing timeout
  if (navigationTimeoutRef.current) {
    clearTimeout(navigationTimeoutRef.current);
  }
  
  // Reset flag after navigation is complete (after map movement settles)
  navigationTimeoutRef.current = setTimeout(() => {
    setIsNavigatingByCard(false);
  }, 2000);
  
  let newIndex;
  if (direction === 'next') {
    newIndex = activeCardIndex === stationsWithCoordinates.length - 1 ? 0 : activeCardIndex + 1;
  } else {
    newIndex = activeCardIndex === 0 ? stationsWithCoordinates.length - 1 : activeCardIndex - 1;
  }
  
  console.log('New index:', newIndex);
  const station = stationsWithCoordinates[newIndex];
  setSelectedStation(station);
  setActiveCardIndex(newIndex);
  
  const coords = getStationCoordinates(station);
  if (coords.lat && coords.lng) {
    setFlyToLocation([coords.lat, coords.lng]);
    setFlyToZoom(16);
    setShouldFly(true);
  }
}, [stationsWithCoordinates, activeCardIndex, getStationCoordinates]);
useEffect(() => {
  if (!selectedStation || stationsWithCoordinates.length === 0) return;
  const index = stationsWithCoordinates.findIndex(
    s => s.id === selectedStation.id
  );
  if (index !== -1 && index !== activeCardIndex) {
    setActiveCardIndex(index);
  }
}, [stationsWithCoordinates, selectedStation]);
  // Check active filters
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
      fetchStationsWithParams(currentLocation, {});
    }
  }, [currentLocation, fetchStationsWithParams]);

  // Handle card click
  const handleCardClick = useCallback((station) => {
    const encodedSite = encodeURIComponent(JSON.stringify(station));
    window.location.href = `evya://stationdetails?station=${encodedSite}`;
  }, []);

  // Handle navigation
  const handleNavigate = useCallback((station) => {
    const coords = getStationCoordinates(station);
    if (coords.lat && coords.lng) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}&travelmode=driving`;
      window.open(url, '_blank');
    }
  }, [getStationCoordinates]);

  if (!currentLocation) {
    return (
      <div style={styles.fullScreenCenter}>
        <Spinner size={80} color={pallette.primary} message="Getting your location..." />
      </div>
    );
  }

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
          preferCanvas={true}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />

          <MapMoveListener onLocationChange={handleMapLocationChange} />

          {/* Fit bounds for initial load only */}
          {isInitialLoad && shouldFitBounds && stationsWithCoordinates.length > 0 && (
            <FitBounds 
              sites={stationsWithCoordinates} 
              currentLocation={currentLocation} 
              shouldFit={shouldFitBounds}
            />
          )}

          {/* Map controller for flying to locations */}
          {flyToLocation && shouldFly && (
            <MapController 
              center={flyToLocation} 
              zoom={flyToZoom} 
              shouldFly={shouldFly} 
            />
          )}

          {/* User Location Marker */}
          {/* lavamay */}

         {currentLocation && (
            
          // <CircleMarker
          //   center={[currentLocation.lat, currentLocation.lng]}
          //   radius={8}
          //   pathOptions={{ 
          //     color: pallette.l1, 
          //     fillColor: pallette.l1, 
          //     fillOpacity: 0.8, 
          //     weight: 2 
          //   }}
          // >
          //   <Popup>Your Current Location</Popup>
          // </CircleMarker>
        <UserLocationMarker position={userlocation} />
          )}

          {/* Station Markers */}
          {stationsWithCoordinates.map((station, index) => {
            const coords = getStationCoordinates(station);
            if (!coords.lat || !coords.lng) return null;

            const isSelected = selectedStation?.id === station.id;

            return (
              <Marker
                key={`${station.id || 'station'}-${index}-${coords.lat}-${coords.lng}`}
                position={[coords.lat, coords.lng]}
                icon={createStationIcon(station, isSelected)}
                eventHandlers={{
                  click: (e) => {
                    e.originalEvent.stopPropagation();
                    handleMarkerClick(station, index);
                  },
                }}
                ref={(ref) => {
                  if (ref && station.id) {
                    markerRefs.current[station.id] = ref;
                  }
                }}
              />
            );
          })}
        </MapContainer>

        {/* Loading Overlay */}
        {stationsLoading && isInitialLoad && (
          <div>
            <Spinner size={80} color={pallette.primary} message="Loading charging stations..." />
          </div>
        )}

        {/* Locating Overlay */}
       {/* Locating Overlay */}
        {isLocating && (
          <div style={styles.overlay}>
            <Spinner size={80} color={pallette.primary} message="Getting your current location..." />
          </div>
        )}

        {/* Error Message */}
        {stationsError && (
          <div style={styles.errorOverlay}>
            <ErrorMessage message={stationsError} />
            <button 
              onClick={() => currentLocation && fetchStationsWithParams(currentLocation, lastUsedParams?.filters || {})}
              style={styles.retryButton}
            >
              Retry
            </button>
          </div>
        )}

        {/* No Stations Found */}
        {!stationsLoading && !stationsError && stationsWithCoordinates.length === 0 && (
          <div >
            <ErrorMessage 
              message={hasActiveFilters 
                ? "No charging stations found with the selected filters" 
                : "No charging stations found in your area"
              } 
            />
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
            onClick={() => navigate("/mapsearch")}
            title="Search"
          >
            <FaSearch style={styles.actionIcon} />
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
            title="Directions"
          >
            <FaDirections style={styles.actionIcon} />
          </button>
          
          <button
            style={styles.actionButton}
            onClick={centerOnUser}
            title="Center on my location"
          >
             {!location ? (
  <FaCrosshairs style={styles.actionIcon} />
) : (
  <FaSpinner
    style={{
      ...styles.actionIcon,
      transform: `rotate(${rotation}deg)`
    }}
  />
)}
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

        {/* Stations Cards */}
        {cardsVisible && stationsWithCoordinates.length > 0 && (
          <div ref={cardsRef}>
            <StationCards
              stations={stationsWithCoordinates}
              currentLocation={currentLocation}
              selectedStation={selectedStation}
              activeCardIndex={activeCardIndex}
              onStationSelect={handleCardSelect}
              onNavigate={handleNavigate}
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
    backgroundColor: pallette.white,
    zIndex: 1,
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
  errorOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 3000,
    backdropFilter: 'blur(8px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
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
    marginTop: '16px',
    minWidth: '100px',
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
    minWidth: '140px',
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
  fullScreenCenter: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: pallette.white,
  },
};

export default MapSection;

