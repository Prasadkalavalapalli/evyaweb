// import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import { FaCrosshairs, FaList, FaDirections, FaSearch } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import MapController from './MapController';
// import FitBounds from './FitBounds';
// import { createStationIcon } from './MapUtils';
// import { pallette } from '../Utils/Pallete';
// import Spinner from '../../helpers/Spinner';
// import StationCards from './StationCard';
// import FilterTabs from './FiltersTab';
// import { fetchStations } from '../../redux/StationsSlice';

// // Fix leaflet marker issue
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// const MapSection = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { 
//     stations: sites = [], 
//     loading: stationsLoading, 
//     error: stationsError 
//   } = useSelector((state) => state.stations || {});

//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [selectedStation, setSelectedStation] = useState(null);
//   const [flyToLocation, setFlyToLocation] = useState(null);
//   const [flyToZoom, setFlyToZoom] = useState(14);
//   const [shouldFly, setShouldFly] = useState(false);
//   const [shouldFitBounds, setShouldFitBounds] = useState(true);
//   const [searchQuery, setSearchQuery] = useState('');
  
//   const mapRef = useRef(null);

//   // Mock station data for demo
//   const mockStations = useMemo(() => [
//   ], []);

//   // Get current location and fetch stations
//   const fetchStationsWithParams = useCallback((location) => {
//     if (!location) return;
//     const requestParams = { 
//       location: { 
//         latitude: location.lat, 
//         longitude: location.lng 
//       } 
//     };
//     dispatch(fetchStations(requestParams));
//     setShouldFitBounds(true);
//   }, [dispatch]);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const location = { 
//             lat: pos.coords.latitude, 
//             lng: pos.coords.longitude 
//           };
//           setCurrentLocation(location);
//           fetchStationsWithParams(location);
//         },
//         (err) => {
//           console.error('Geolocation error:', err);
//           const defaultLocation = { lat: 28.6139, lng: 77.2090 };
//           setCurrentLocation(defaultLocation);
//           fetchStationsWithParams(defaultLocation);
//         },
//         { enableHighAccuracy: true, timeout: 10000 }
//       );
//     }
//   }, [fetchStationsWithParams]);

//   // Handle marker click
//   const handleMarkerClick = useCallback((station) => {
//     setSelectedStation(station);
    
//     const lat = station.coordinates?.latitude || station.latitude || station.lat;
//     const lng = station.coordinates?.longitude || station.longitude || station.lng;
    
//     if (lat && lng) {
//       setFlyToLocation([lat, lng]);
//       setFlyToZoom(16);
//       setShouldFly(true);
//     }
//   }, []);

//   // Center on user location
//   const centerOnUser = useCallback(() => {
//     if (currentLocation) {
//       setFlyToLocation([currentLocation.lat, currentLocation.lng]);
//       setFlyToZoom(14);
//       setShouldFly(true);
//       setSelectedStation(null);
//     }
//   }, [currentLocation]);

//   // Handle map click (clear selection)
//   const handleMapClick = useCallback(() => {
//     setSelectedStation(null);
//   }, []);

//   // Calculate distance between two points
//   const calculateDistance = (lat1, lon1, lat2, lon2) => {
//     const R = 6371; // Earth's radius in km
//     const dLat = (lat2 - lat1) * Math.PI / 180;
//     const dLon = (lon2 - lon1) * Math.PI / 180;
//     const a = 
//       Math.sin(dLat/2) * Math.sin(dLat/2) +
//       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
//       Math.sin(dLon/2) * Math.sin(dLon/2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     return (R * c).toFixed(1) + " KM";
//   };

//   // Filter stations with valid coordinates
//   const displayStations = sites.length > 0 ? sites : mockStations;
  
//   const stationsWithCoordinates = useMemo(() => 
//     displayStations.filter(station => {
//       const lat = station.coordinates?.latitude || station.latitude || station.lat;
//       const lng = station.coordinates?.longitude || station.longitude || station.lng;
//       return lat && lng;
//     }), [displayStations]);

//   if (!currentLocation) {
//     return (
//       <div style={styles.loadingContainer}>
//         <Spinner size={80} color={pallette.primary} message="Getting your location..." />
//       </div>
//     );
//   }

//   const handleCardClick = (station, index) => {
   
//     // Navigate to station details
//     const encodedSite = encodeURIComponent(JSON.stringify(station));
//     window.location.href = `evya://stationdetails?station=${encodedSite}`;
//   };


//   return (
//     <div style={styles.container}>
//       {/* Filter Tabs */}
//       <div style={styles.filterContainer}>
//         <FilterTabs searchQuery={searchQuery} />
//       </div>

//       {/* Map Container */}
//       <div style={styles.mapContainer}>
//         <MapContainer
//           center={[currentLocation.lat, currentLocation.lng]}
//           zoom={14}
//           style={styles.map}
//           whenCreated={(mapInstance) => { mapRef.current = mapInstance; }}
//           onClick={handleMapClick}
//           zoomControl={false}
//         >
//           <TileLayer
//             attribution='&copy; OpenStreetMap'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {/* Fit bounds for initial load */}
//           {!searchQuery && shouldFitBounds && (
//             <FitBounds 
//               sites={stationsWithCoordinates} 
//               currentLocation={currentLocation} 
//               shouldFit={shouldFitBounds}
//             />
//           )}

//           {/* Map controller for flying to locations */}
//           {flyToLocation && (
//             <MapController center={flyToLocation} zoom={flyToZoom} shouldFly={shouldFly} />
//           )}

//           {/* User Location Marker */}
//           <CircleMarker
//             center={[currentLocation.lat, currentLocation.lng]}
//             radius={8}
//             pathOptions={{ 
//               color: pallette.l1, 
//               fillColor: pallette.l1, 
//               fillOpacity: 0.8, 
//               weight: 2 
//             }}
//           >
//             <Popup>Your Current Location</Popup>
//           </CircleMarker>

//           {/* Station Markers */}
//           {stationsWithCoordinates.map((station, index) => {
//             const lat = station.coordinates?.latitude || station.latitude || station.lat;
//             const lng = station.coordinates?.longitude || station.longitude || station.lng;
            
//             if (!lat || !lng) return null;

//             const isSelected = selectedStation?.id === station.id;
//             const distance = calculateDistance(currentLocation.lat, currentLocation.lng, lat, lng);

//             return (
//               <Marker
//                 key={station.id || `${lat}-${lng}-${index}`}
//                 position={[lat, lng]}
//                 icon={createStationIcon(station, isSelected)}
//                 eventHandlers={{
//                   click: (e) => {
//                     e.originalEvent.stopPropagation();
//                     handleMarkerClick(station);
//                   },
//                 }}
//               >
//                 <Popup>
//                   <div style={styles.popup} onClick={() => handleCardClick(station)}>
//                     <div >
//                       <div style={styles.cardHeader}>
//                         <div style={styles.stationName}>{station.name}</div>
//                         <div style={{
//                           ...styles.statusIndicator,
//                           backgroundColor: station.available > 0 ? '#E6F4EA' : '#FFEBEB'
//                         }}>
//                           <div style={{
//                             ...styles.statusText,
//                             color: station.available > 0 ? '#4CAF50' : '#F44336'
//                           }}>
//                             {station.available || 0}/{station.totalPorts || 0} {station.available > 0 ? 'Available' : 'Unavailable'}
//                           </div>
//                         </div>
//                       </div>

//                       <div style={styles.stationAddress}>{station.address}</div>
                      
                      
//                     </div>
//                   </div>
//                 </Popup>
//               </Marker>
//             );
//           })}
//         </MapContainer>

//         {/* Loading Overlay */}
//         {stationsLoading && (
//           <div style={styles.overlay}>
//             <div style={styles.spinner} />
//             <div style={styles.loadingText}>
//               Loading charging stations...
//             </div>
//           </div>
//         )}

//         {/* Error Overlay */}
//         {stationsError && (
//           <div style={styles.overlay}>
//             <div style={styles.errorText}>
//               {stationsError}
//             </div>
//             <button 
//               onClick={() => currentLocation && fetchStationsWithParams(currentLocation)}
//               style={styles.retryButton}
//             >
//               Retry
//             </button>
//           </div>
//         )}

//         {/* No Stations Message */}
//         {!stationsLoading && !stationsError && stationsWithCoordinates.length === 0 && (
//           <div style={styles.overlay}>
//             <div style={styles.noStationsText}>
//               No charging stations found in your area
//             </div>
//           </div>
//         )}

//         {/* Action Buttons */}
//         <div style={styles.actionButtons}>
//           <button
//             style={styles.actionButton}
//             onClick={centerOnUser}
//             title="Center on my location"
//           >
//             <FaCrosshairs style={styles.actionIcon} />
//           </button>
//           <button 
//             onClick={() => navigate("/stations")}
//             style={styles.actionButton}
//             title="View list"
//           >
//             <FaList style={styles.actionIcon} />
//           </button>
//           <button
//             style={styles.actionButton}
//             onClick={() => navigate("/route")}
//             title="Get directions"
//           >
//             <FaDirections style={styles.actionIcon} />
//           </button>
//           <button
//             style={styles.actionButton}
//             onClick={() => navigate("/mapsearch")}
//             title="Get searched data"
//           >
//             <FaSearch style={styles.actionIcon} />
//           </button>
//         </div>

//         {/* Stations Cards */}
//         {stationsWithCoordinates.length > 0 && (
//           <StationCards
//             stations={stationsWithCoordinates}
//             currentLocation={currentLocation}
//             selectedStation={selectedStation}
//             onStationSelect={handleMarkerClick}
//             onNavigate={(station) => {
//               const lat = station.coordinates?.latitude || station.latitude || station.lat;
//               const lng = station.coordinates?.longitude || station.longitude || station.lng;
//               if (lat && lng) {
//                 const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
//                 window.open(url, '_blank');
//               }
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '95vw',
//     height: '95vh',
//     overflow: 'hidden',
//     fontFamily: 'Arial, sans-serif',
//     borderRadius: 20,
//     backgroundColor: pallette.white,
//     boxSizing: 'border-box',
//     zIndex: 1,
    
//   },
//   innerContainer: {
//     width: '100%',
//     height: '90%',
//     borderRadius: 20,
//     overflow: 'hidden',
//     backgroundColor: pallette.white,
//   },
//   filterContainer: {
//     position: 'absolute',
//     top: 20,
//     left: 20,
//     right: 20,
//     zIndex: 1000,
//   },
//   mapContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     borderRadius: 20,
//     overflow: 'hidden',
//     backgroundColor: pallette.white,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 20,
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'rgba(255, 255, 255, 0.95)',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 3000,
//     backdropFilter: 'blur(8px)',
//   },
//   spinner: {
//     width: '50px',
//     height: '50px',
//     border: '4px solid #f3f3f3',
//     borderTop: `4px solid ${pallette.primary}`,
//     borderRadius: '50%',
//     animation: 'spin 1s linear infinite'
//   },
//   loadingText: {
//     marginTop: '16px',
//     color: pallette.primary,
//     fontSize: '16px',
//     fontWeight: '500',
//   },
//   errorText: {
//     color: pallette.error,
//     marginBottom: '16px',
//     textAlign: 'center',
//     padding: '0 20px',
//     fontSize: '15px',
//     fontWeight: '500',
//   },
//   noStationsText: {
//     color: pallette.primary,
//     padding: '0 20px',
//     textAlign: 'center',
//     fontSize: '16px',
//     fontWeight: '500',
//   },
//   retryButton: {
//     padding: '12px 24px',
//     backgroundColor: pallette.primary,
//     color: pallette.white,
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     fontSize: '15px',
//     fontWeight: 'bold',
//   },
//   actionButtons: {
//     position: 'absolute',
//     top: '100px',
//     right: '20px',
//     zIndex: 2000,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px'
//   },
//   actionButton: {
//     background: 'rgba(255, 255, 255, 0.95)',
//     backdropFilter: 'blur(10px)',
//     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
//     width: '42px',
//     height: '42px',
//     borderRadius: '26px',
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '20px',
//     transition: 'all 0.2s ease',
//   },
//   actionIcon: {
//     fontSize: '22px',
//     color: pallette.primary,
//   },
//   popup: {
//     minWidth: '250px',
    
//   },
//   cardContent: {
//     padding: '12px',
//   },
//   cardHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '8px',
//     flexDirection: 'row',
//     flexWrap: 'wrap'
//   },
//   stationName: {
//     fontSize: '14px',
//     fontFamily: 'Arial, sans-serif',
//     fontWeight: 'bold',
//     color: pallette.black,
//     flex: 1,
//     marginRight: '8px',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     whiteSpace: 'nowrap'
//   },
//   statusIndicator: {
//     padding: '4px 8px',
//     borderRadius: '12px',
//     minWidth: 'fit-content'
//   },
//   statusText: {
//     fontSize: '11px',
//     fontFamily: 'Arial, sans-serif',
//     fontWeight: '600'
//   },
//   stationAddress: {
//     fontSize: '12px',
//     color: pallette.grey,
//     margin: '8px 0',
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//     display: '-webkit-box',
//     WebkitLineClamp: 2,
//     WebkitBoxOrient: 'vertical',
//     lineHeight: '1.4'
//   },
//   distanceContainer: {
//     backgroundColor: pallette.primary,
//     padding: '6px 12px',
//     borderRadius: '8px',
//     marginTop: '8px',
//     display: 'inline-block',
//   },
//   distance: {
//     color: pallette.white,
//     fontFamily: 'Arial, sans-serif',
//     fontWeight: 'bold',
//     fontSize: '12px'
//   },
//   loadingContainer: {
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//     backgroundColor: pallette.white,
//   },
// };

// // Add CSS animation
// const styleSheet = document.styleSheets[0];
// if (styleSheet) {
//   styleSheet.insertRule(`
//     @keyframes spin {
//       0% { transform: rotate(0deg); }
//       100% { transform: rotate(360deg); }
//     }
//   `, styleSheet.cssRules.length);
// }

// export default MapSection;


import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaCrosshairs, FaList, FaDirections,FaSearch,FaBolt} from 'react-icons/fa';
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
    error: stationsError 
  } = useSelector((state) => state.stations || {});

  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [flyToLocation, setFlyToLocation] = useState(null);
  const [flyToZoom, setFlyToZoom] = useState(14);
  const [shouldFly, setShouldFly] = useState(false);
  const [shouldFitBounds, setShouldFitBounds] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCards, setShowCards] = useState(true);
  const [popupOpen, setPopupOpen] = useState(null);
  
  const mapRef = useRef(null);
  const cardsRef = useRef(null);

  // Add CSS styles
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .minimal-popup .leaflet-popup-content-wrapper {
        padding: 0;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        border: 1px solid rgba(0,0,0,0.1);
      }
      
      .minimal-popup .leaflet-popup-content {
        margin: 0;
        padding: 8px;
        line-height: 1.4;
      }
      
      .minimal-popup .leaflet-popup-tip {
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid rgba(0,0,0,0.1);
      }
    `;
    
    document.head.appendChild(styleTag);
    
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  // Handle click outside to hide cards
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If cards are not showing, do nothing
      if (!showCards) return;
      
      // Check if click is inside action buttons (they should not hide cards)
      const actionButtons = document.querySelector('.action-buttons');
      if (actionButtons && actionButtons.contains(event.target)) {
        return;
      }
      
      // Check if click is on a marker (handled separately)
      const markerElement = event.target.closest('.leaflet-marker-icon');
      if (markerElement) {
        return;
      }
      
      // Check if click is inside the cards container
      if (cardsRef.current && cardsRef.current.contains(event.target)) {
        return;
      }
      
      // If click is outside cards, hide them
      setShowCards(false);
      setSelectedStation(null);
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      // Clean up event listeners
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showCards]);

  // Mock station data for demo
  const mockStations = useMemo(() => [
    {
      id: '1',
      name: 'BPCL Charging Station',
      address: 'Connaught Place, New Delhi',
      coordinates: { latitude: 28.6315, longitude: 77.2167 },
      available: 3,
      totalPorts: 6,
      power: '50kW',
      price: '12',
      current_type: 'DC Fast',
      connectors: ['CCS2', 'CHAdeMO', 'Type 2'],
      managerName: 'BPCL'
    }
  ], []);

  // Get current location and fetch stations
  const fetchStationsWithParams = useCallback((location) => {
    if (!location) return;
    const requestParams = { 
      location: { 
        latitude: location.lat, 
        longitude: location.lng 
      } 
    };
    dispatch(fetchStations(requestParams));
    setShouldFitBounds(true);
  }, [dispatch]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const location = { 
            lat: pos.coords.latitude, 
            lng: pos.coords.longitude 
          };
          setCurrentLocation(location);
          fetchStationsWithParams(location);
        },
        (err) => {
          console.error('Geolocation error:', err);
          const defaultLocation = { lat: 28.6139, lng: 77.2090 };
          setCurrentLocation(defaultLocation);
          fetchStationsWithParams(defaultLocation);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }
  }, [fetchStationsWithParams]);

  // Filter stations with valid coordinates
  const displayStations = sites.length > 0 ? sites : mockStations;
  
  const stationsWithCoordinates = useMemo(() => 
    displayStations.filter(station => {
      const lat = station.coordinates?.latitude || station.latitude || station.lat;
      const lng = station.coordinates?.longitude || station.longitude || station.lng;
      return lat && lng;
    }), [displayStations]);

  // Handle marker click - show station card instead of popup
  const handleMarkerClick = useCallback((station) => {
    setSelectedStation(station);
    setShowCards(true);
    
    // Find and set the active card index
    const stationIndex = stationsWithCoordinates.findIndex(s => s.id === station.id);
    if (stationIndex !== -1) {
      setActiveCardIndex(stationIndex);
    }
    
    const lat = station.coordinates?.latitude || station.latitude || station.lat;
    const lng = station.coordinates?.longitude || station.longitude || station.lng;
    
    if (lat && lng) {
      setFlyToLocation([lat, lng]);
      setFlyToZoom(16);
      setShouldFly(true);
    }
  }, [stationsWithCoordinates]);

  // Center on user location
  const centerOnUser = useCallback(() => {
    if (currentLocation) {
      setFlyToLocation([currentLocation.lat, currentLocation.lng]);
      setFlyToZoom(14);
      setShouldFly(true);
      setSelectedStation(null);
      setActiveCardIndex(0);
    }
  }, [currentLocation]);

  // Handle map click (clear selection) - Only for map clicks, not marker clicks
  const handleMapClick = useCallback(() => {
    // We handle this in the useEffect above to detect clicks outside cards
  }, []);

  // Handle popup close
  const handlePopupClose = useCallback(() => {
    setPopupOpen(null);
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

  // Handle card click from popup
  const handleCardClick = (station) => {
    const encodedSite = encodeURIComponent(JSON.stringify(station));
    window.location.href = `evya://stationdetails?station=${encodedSite}`;
  };

  // Toggle cards visibility
  const toggleCardsVisibility = useCallback(() => {
    setShowCards(prev => {
      // If cards are being shown, also clear any selected station
      if (!prev) {
        setSelectedStation(null);
      }
      return !prev;
    });
  }, []);

  if (!currentLocation) {
    return (
      <div style={styles.loadingContainer}>
        <Spinner size={80} color={pallette.primary} message="Getting your location..." />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Filter Tabs */}
      <div style={styles.filterContainer}>
        <FilterTabs searchQuery={searchQuery} />
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

          {/* Station Markers with minimal popup */}
          {stationsWithCoordinates.map((station, index) => {
            const lat = station.coordinates?.latitude || station.latitude || station.lat;
            const lng = station.coordinates?.longitude || station.longitude || station.lng;
            
            if (!lat || !lng) return null;

            const isSelected = selectedStation?.id === station.id;
            const distance = calculateDistance(currentLocation.lat, currentLocation.lng, lat, lng);

            return (
              <Marker
                key={station.id || `${lat}-${lng}-${index}`}
                position={[lat, lng]}
                icon={createStationIcon(station, isSelected)}
                eventHandlers={{
                  click: (e) => {
                    e.originalEvent.stopPropagation();
                    handleMarkerClick(station);
                  },
                }}
              >
                {/* Minimal popup that just shows basic info */}
                {/* <Popup
                  closeOnClick={true}
                  autoClose={true}
                  closeButton={false}
                  className="minimal-popup"
                >
                  <div style={styles.minimalPopupContent}>
                    <div style={styles.minimalPopupName}>{station.siteName}</div>
                    <div style={styles.minimalPopupAvailability}>
                      {station.avaiPorts || 0}/{station.noOfPorts || 0} Available
                    </div>
                  </div>
                </Popup> */}
              </Marker>
            );
          })}
        </MapContainer>

        {/* Loading Overlay */}
        {stationsLoading && (
          <div style={styles.overlay}>
            <div style={styles.spinner} />
            <div style={styles.loadingText}>
              Loading charging stations...
            </div>
          </div>
        )}

        {/* Error Overlay */}
        {stationsError && (
          <div style={styles.overlay}>
            <div style={styles.errorText}>
              {stationsError}
            </div>
            <button 
              onClick={() => currentLocation && fetchStationsWithParams(currentLocation)}
              style={styles.retryButton}
            >
              Retry
            </button>
          </div>
        )}

        {/* No Stations Message */}
        {!stationsLoading && !stationsError && stationsWithCoordinates.length === 0 && (
          <div style={styles.overlay}>
            <div style={styles.noStationsText}>
              No charging stations found in your area
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="action-buttons" style={styles.actionButtons}>
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
          {/* Toggle Cards Button */}
          <button
            style={styles.toggleButton}
            onClick={toggleCardsVisibility}
            title={showCards ? "Hide station cards" : "Show station cards"}
          >
            <FaBolt  />
          </button>
        </div>

        {/* Stations Cards - Only show when showCards is true */}
        {showCards && stationsWithCoordinates.length > 0 && (
          <div ref={cardsRef}>
            <StationCards
              stations={stationsWithCoordinates}
              currentLocation={currentLocation}
              selectedStation={selectedStation}
              activeCardIndex={activeCardIndex}
              setActiveCardIndex={setActiveCardIndex}
              onStationSelect={handleMarkerClick}
              onNavigate={(station) => {
                const lat = station.coordinates?.latitude || station.latitude || station.lat;
                const lng = station.coordinates?.longitude || station.longitude || station.lng;
                if (lat && lng) {
                  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
                  window.open(url, '_blank');
                }
              }}
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
    width: '95vw',
    height: '95vh',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    margin: 10,
    borderRadius: 20,
    backgroundColor: pallette.white,
    boxSizing: 'border-box',
    zIndex: 1,
  },
  innerContainer: {
    width: '100%',
    height: '90%',
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
  minimalPopupContent: {
    padding: '4px',
    minWidth: '120px',
  },
  minimalPopupName: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: pallette.black,
    marginBottom: '2px',
  },
  minimalPopupAvailability: {
    fontSize: '10px',
    color: '#4CAF50',
    fontWeight: '500',
  },
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: pallette.white,
  },
       toggleButton: {
      position: 'fixed',
      bottom: '200px',
      right: '20px',
      backgroundColor: pallette.primary,
      color: pallette.white,
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 2001,
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      fontSize: '24px',
      border: 'none',
      transition: 'transform 0.3s ease',
    },
};

export default MapSection;