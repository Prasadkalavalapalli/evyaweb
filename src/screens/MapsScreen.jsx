// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { GoogleMap, OverlayView, useLoadScript } from '@react-google-maps/api';
// import { FaCrosshairs, FaList, FaDirections } from 'react-icons/fa';
// import { fetchStations } from '../redux/StationsSlice';
// import Spinner from '../helpers/Spinner';
// import SearchComponent from './Search';
// import SiteCard from './SiteCard';
// import { useNavigate } from 'react-router-dom';
// import ErrorMessage from '../helpers/ErrorMessage';
// // import ErrorMessage from '../helpers/ErrorMessage';

// // Dimensions
// const w = window.innerWidth;
// const h = window.innerHeight;
// const adjust = (size) => size;

// // Placeholder palette and fonts
// const pallette = {
//   primary: "#08a82dff",
//   white: "#fff",
//   black: "#000",
//   grey: "#666",
//   error: "#e74c3c",
//   l1: "#4CAF50",
//   red: "#F44336"
// };

// const fonts = {
//   bold: "Arial-BoldMT, Arial, sans-serif",
//   semibold: "Arial-SemiboldMT, Arial, sans-serif",
//   medium: "ArialMT, Arial, sans-serif",
//   regular: "Arial, sans-serif",
// };

// const containerStyle = {
//   width: "100%",
//   height: "100vh",
//   position: "relative",
// };

// const MapsScreen = () => {
//   const navigate=useNavigate();
//   const dispatch = useDispatch();
//   const { stations: sites = [], loading: stationsLoading, error: stationsError } = useSelector(
//     (state) => state.stations || {}
//   );

//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [selectedSite, setSelectedSite] = useState(null);
//   const [isCardVisible, setIsCardVisible] = useState(false);
//   const [shouldZoomToMarkers, setShouldZoomToMarkers] = useState(true);

//   const mapRef = useRef(null);

//   // Load Google Maps
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyCBkBMkpv_sE4TLE3ERGQBvL5A1kjdJCkg",
//     libraries: ['places']
//   });

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const location = {
//             lat: pos.coords.latitude,
//             lng: pos.coords.longitude
//           };
//           setCurrentLocation(location);
//           dispatch(fetchStations({ location }));
//         },
//         (err) => console.error(err),
//         { enableHighAccuracy: true }
//       );
//     }
//   }, [dispatch]);

//   // Zoom to fit all markers when sites are loaded (only once)
//   useEffect(() => {
//     if (sites.length > 0 && mapRef.current && shouldZoomToMarkers) {
//       zoomToFitMarkers();
//       setShouldZoomToMarkers(false);
//     }
//   }, [sites, shouldZoomToMarkers]);

//   const zoomToFitMarkers = () => {
//     if (!mapRef.current || sites.length === 0) return;
    
//     const bounds = new window.google.maps.LatLngBounds();
    
//     // Add user location to bounds
//     if (currentLocation) {
//       bounds.extend(currentLocation);
//     }
    
//     // Add all site locations to bounds
//     sites.forEach(site => {
//       if (site.coordinates && site.coordinates.latitude && site.coordinates.longitude) {
//         bounds.extend({
//           lat: site.coordinates.latitude,
//           lng: site.coordinates.longitude
//         });
//       }
//     });
    
//     // Only fit bounds if we have valid locations
//     if (!bounds.isEmpty()) {
//       mapRef.current.fitBounds(bounds);
//       mapRef.current.panToBounds(bounds, {
//         top: 50, right: 50, bottom: 50, left: 50
//       });
//     }
//   };

//   const handleSelectSiteFromSearch = (site) => {
//     if (!site) return;
//     setSelectedSite(site);
//     setIsCardVisible(true);

//     if (mapRef.current && site.coordinates) {
//       mapRef.current.panTo({ 
//         lat: site.coordinates.latitude, 
//         lng: site.coordinates.longitude 
//       });
//       mapRef.current.setZoom(16);
//     }
//   };

//   const handleNavigateToSite = (site) => {
//     const target = site || selectedSite;
//     if (target && target.coordinates) {
//       const url = `https://www.google.com/maps/dir/?api=1&destination=${target.coordinates.latitude},${target.coordinates.longitude}`;
//       window.open(url, "_blank");
//     }
//   };

//   const focusOnUserLocation = () => {
//     if (currentLocation && mapRef.current) {
//       mapRef.current.panTo(currentLocation);
//       mapRef.current.setZoom(14);
//     }
//   };

//   const handleMarkerPress = (site) => {
//     setSelectedSite(site);
//     setIsCardVisible(true);
    
//     if (mapRef.current && site.coordinates) {
//       mapRef.current.panTo({ 
//         lat: site.coordinates.latitude, 
//         lng: site.coordinates.longitude 
//       });
//       mapRef.current.setZoom(16);
//     }
//   };

//   const handleMapClick = () => {
//     setSelectedSite(null);
//     setIsCardVisible(false);
//   };

//   const onMapLoad = useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   if (loadError) {
//     return (
//       <div style={styles.centered}>
//         <div style={styles.errorIcon}>⚠️</div>
//         <div style={styles.errorText}>Error loading maps</div>
//       </div>
//     );
//   }

//   if (!isLoaded || !currentLocation) {
//     return (
//       <div style={styles.loadingContainer}>
//         <Spinner size={80} color="#4CAF50" message="Getting your location..." />
//       </div>
//     );
//   }

//   return (
//     <div style={containerStyle}>
//       {/* Search Component */}
//       <SearchComponent onSelectSite={handleSelectSiteFromSearch} />

//       <ErrorMessage
//   message={
//     !stationsLoading && !stationsError && sites.length === 0
//       ? "No Chargers Found check the applied filters"
//       : ""
//   }
// />

//       {/* Google Map */}
//     <GoogleMap
//   mapContainerStyle={{ width: "100%", height: "100%" }}
//   center={currentLocation}
//   zoom={14}
//   onLoad={onMapLoad}
//   // ✅ only trigger handleMapClick when no card is open
//   onClick={() => {
    
//       handleMapClick();
   
//   }}
//   options={{
//     disableDefaultUI: true,
//     zoomControl: false,
//     fullscreenControl: false,
//     mapTypeControl: false,
//     streetViewControl: false,
//   }}
// >
//   {/* User Location Marker */}
//   <OverlayView
//     position={currentLocation}
//     mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//     getPixelPositionOffset={(width, height) => ({
//       x: -(width / 2),
//       y: -(height / 2),
//     })}
//   >
//     <div style={styles.userLocationMarker}>
//       <div style={styles.userLocationOuterCircle}>
//         <div style={styles.userLocationInnerCircle}></div>
//       </div>
//     </div>
//   </OverlayView>

//   {/* Stations Markers */}
//   {Array.isArray(sites) &&
//     sites.map(
//       (site) =>
//         site.coordinates &&
//         site.coordinates.latitude &&
//         site.coordinates.longitude && (
//           <OverlayView
//             key={site.id}
//             position={{
//               lat: site.coordinates.latitude,
//               lng: site.coordinates.longitude,
//             }}
//             mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//             getPixelPositionOffset={(width, height) => ({
//               x: -(width / 2),
//               y: -(height / 2),
//             })}
//           >
//             <div
//               style={styles.markerContainer}
//               // ✅ stop event bubbling so map onClick won’t fire
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleMarkerPress(site);
//               }}
//               title={site.name}
//             >
//               <img
//                 src={require("../images/chargermark.png")}
//                 alt="EV Station"
//                 style={styles.markerImage}
//               />
//               <div
//                 style={{
//                   ...styles.availabilityBadge,
//                   backgroundColor:
//                     site.available > 0 ? "#E6F4EA" : "#FFEBEB",
//                 }}
//               >
//                 <span
//                   style={{
//                     ...styles.availabilityText,
//                     color: site.available > 0 ? "#4CAF50" : "#F44336",
//                   }}
//                 >
//                   {site.available}/{site.totalPorts || 0}
//                 </span>
//               </div>
//             </div>
//           </OverlayView>
//         )
//     )}
// </GoogleMap>


//       {/* Action Buttons */}
//       <div style={styles.actionButtons}>
//         <button
//           onClick={focusOnUserLocation}
//           style={styles.actionButton}
//           title="My Location"
//         >
//           <FaCrosshairs style={styles.actionIcon} />
//         </button>
//         <button
//           onClick={()=>navigate("/stations")}
//           style={styles.actionButton}
//           title="Zoom to All Chargers"
//         >
//           <FaList style={styles.actionIcon} />
//         </button>
//         <button
//            onClick={()=>navigate("/route")}
//           style={styles.actionButton}
//           title="Directions"
//         >
//           <FaDirections style={styles.actionIcon} />
//         </button>
//       </div>

//       {/* Selected Site Card */}
//       {selectedSite && isCardVisible && (
//         <div style={styles.selectedStationCard}>
//           <SiteCard
//             site={selectedSite}
//             onNavigatePress={() => handleNavigateToSite(selectedSite)}
//             showDistance={true}
//             distance="12.6 km"
//             onClose={() => setIsCardVisible(false)}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   loadingContainer: {
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   centered: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     flexDirection: 'column'
//   },
//   errorIcon: {
//     fontSize: '48px',
//     marginBottom: '16px'
//   },
//   errorText: {
//     fontSize: '16px',
//     color: pallette.error
//   },
//   actionButtons: {
//     position: "absolute",
//     bottom: h * 0.18,
//     right: w * 0.04,
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     zIndex: 1000,
//   },
//   actionButton: {
//     width: w * 0.1,
//     height: w * 0.1,
//     borderRadius: w * 0.05,
//     backgroundColor: pallette.white,
//     boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
//     cursor: "pointer",
//     border: 'none',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: h * 0.01,
//   },
//   actionIcon: {
//     fontSize: '24px',
//     color: pallette.primary
//   },
//   selectedStationCard: {
//     position: 'absolute',
//     bottom: h * 0.03,
//     left: w * 0.04,
//     right: w * 0.04,
//     zIndex: 999,
//     boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
//   },
//   markerContainer: {
//     position: 'relative',
//     cursor: 'pointer',
//     transform: 'translate(-50%, -100%)',
//     width: '40px',
//     height: '50px'
//   },
//   markerImage: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'contain'
//   },
//   availabilityBadge: {
//     position: 'absolute',
//     top: '10px',
//     right: '30px',
//     borderRadius: '35%',
//     width: '25px',
//     height: '15px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     border: '2px solid white',
//     transform: 'translate(30%, -30%)'
//   },
//   availabilityText: {
//     fontSize: '10px',
//     fontWeight: 'bold',
//     fontFamily: 'Arial-SemiboldMT, Arial, sans-serif'
//   },
//   userLocationMarker: {
//     position: 'relative',
//     transform: 'translate(-50%, -50%)'
//   },
//   userLocationOuterCircle: {
//     width: '20px',
//     height: '20px',
//     borderRadius: '50%',
//     backgroundColor: 'rgba(66, 133, 244, 0.2)',
//     border: '2px solid #4285F4',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   userLocationInnerCircle: {
//     width: '10px',
//     height: '10px',
//     borderRadius: '50%',
//     backgroundColor: '#4285F4'
//   }
// };

// export default MapsScreen;

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, useMap, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaCrosshairs, FaList, FaDirections } from 'react-icons/fa';
import { fetchStations } from '../redux/StationsSlice';
import Spinner from '../helpers/Spinner';
import SearchComponent from './Search';
import SiteCard from './SiteCard';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../helpers/ErrorMessage';
import Apis from '../axios/Apis';

// Fix leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const w = window.innerWidth;
const h = window.innerHeight;

const pallette = {
  primary: "#4AAF57",
  white: "#fff",
  black: "#000",
  grey: "#666",
  error: "#e74c3c",
  l1: "#4CAF50",
  red: "#F44336"
};

const containerStyle = {
  width: "100%",
  height: "100vh",
  position: "relative",
};

// Custom icon for stations
const createStationIcon = (site) => {
  const name = (site.managerName || "").toLowerCase();
  let logo = require("../images/chargermark.png");
  if (name.includes("bpcl")) logo = require("../images/bpcl.png");
  else if (name.includes("hpcl")) logo = require("../images/hpcl.png");
  else if (name.includes("iocl") || name.includes("indian oil")) logo = require("../images/incl.png");

  return L.divIcon({
    html: `
      <div style="position: relative; cursor: pointer;">
        <img src="${logo}" alt="EV Station" style="width: 20px; height: 60px; object-fit: contain;" />
        <div style="
          position: absolute;
          top: 10px;
          right: 30px;
          border-radius: 35%;
          width: 25px;
          height: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          background-color: ${site.available > 0 ? "#E6F4EA" : "#FFEBEB"};
          transform: translate(30%, -30%);
        ">
          <span style="
            font-size: 10px;
            font-weight: bold;
            font-family: Arial;
            color: ${site.available > 0 ? "#4CAF50" : "#F44336"};
          ">
            ${site.available || 0}/${site.totalPorts || 0}
          </span>
        </div>
      </div>
    `,
    className: "custom-marker",
    iconSize: [40, 50],
    iconAnchor: [20, 50],
  });
};

const MapController = ({ center, zoom, shouldFly }) => {
  const map = useMap();
  useEffect(() => {
    if (center && shouldFly) {
      map.flyTo(center, zoom, { duration: 1.0 });
    }
  }, [center, zoom, shouldFly, map]);
  return null;
};

const FitBounds = ({ sites, currentLocation, shouldFit }) => {
  const map = useMap();
  useEffect(() => {
    if (!map || !shouldFit || sites.length === 0) return;
    
    const bounds = L.latLngBounds([]);
    if (currentLocation) bounds.extend([currentLocation.lat, currentLocation.lng]);
    
    sites.forEach(site => {
      // Check different possible coordinate structures
      const lat = site.coordinates?.latitude || site.latitude || site.lat;
      const lng = site.coordinates?.longitude || site.longitude || site.lng;
      if (lat && lng) {
        bounds.extend([lat, lng]);
      }
    });
    
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, sites, currentLocation, shouldFit]);
  return null;
};

const MapsScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { stations: sites = [], loading: stationsLoading, error: stationsError } = useSelector(
    (state) => state.stations || {}
  );

  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [flyToLocation, setFlyToLocation] = useState(null);
  const [flyToZoom, setFlyToZoom] = useState(14);
  const [shouldFly, setShouldFly] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [shouldFitBounds, setShouldFitBounds] = useState(false);
  const mapRef = useRef(null);

  // Debug: Log stations data
  useEffect(() => {
    console.log('🔍 Current stations from Redux:', sites);
    console.log('🔍 Search results:', searchResults);
    console.log('🔍 Show search results:', showSearchResults);
  }, [sites, searchResults, showSearchResults]);

  const fetchStationsWithParams = useCallback((location) => {
    if (!location) return;
    const requestParams = { 
      location: { 
        latitude: location.lat, 
        longitude: location.lng 
      } 
    };
    console.log('📍 Fetching stations with params:', requestParams);
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
          console.log('📍 Current location set:', location);
          setCurrentLocation(location);
          fetchStationsWithParams(location);
        },
        (err) => console.error('Geolocation error:', err),
        { enableHighAccuracy: true, timeout: 10000 }
      );
    }
  }, [fetchStationsWithParams]);

  const handleSearchWithParams = async (searchText) => {
    console.log('🔍 Search called with:', searchText);
    
    if (!searchText || !searchText.trim()) {
      console.log('🔄 Resetting to current location stations');
      setShowSearchResults(false);
      setSearchResults([]);
      if (currentLocation) {
        fetchStationsWithParams(currentLocation);
      }
      return;
    }

    setIsSearching(true);
    try {
      console.log('🔍 Making API search call...');
      const results = await Apis.getStations(searchText);
      console.log('✅ Search results received:', results);
      
      // Ensure results is an array
      const stationsArray = Array.isArray(results) ? results : [];
      setSearchResults(stationsArray);
      setShowSearchResults(true);
      
      if (stationsArray.length > 0) {
        // Find first station with valid coordinates
        const firstStation = stationsArray.find(station => {
          const lat = station.coordinates?.latitude || station.latitude || station.lat;
          const lng = station.coordinates?.longitude || station.longitude || station.lng;
          return lat && lng;
        });
        
        if (firstStation) {
          const lat = firstStation.coordinates?.latitude || firstStation.latitude || firstStation.lat;
          const lng = firstStation.coordinates?.longitude || firstStation.longitude || firstStation.lng;
          console.log('📍 Flying to first result:', { lat, lng });
          setFlyToLocation([lat, lng]);
          setFlyToZoom(14);
          setShouldFly(true);
        }
      }
    } catch (err) {
      console.error('❌ Search error:', err);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
      setTimeout(() => setShouldFly(false), 1000);
    }
  };

  // Improved map click handler
  const handleMapClick = (e) => {
    console.log('📍 Map clicked, target:', e.originalEvent.target);
    
    // Check if click is on map background (not on markers, popups, or controls)
    const target = e.originalEvent.target;
    const isMapBackground = 
      target.classList.contains('leaflet-container') ||
      target.classList.contains('leaflet-map-pane') ||
      target.classList.contains('leaflet-tile-pane') ||
      target.classList.contains('leaflet-overlay-pane') ||
      (target.classList.contains('leaflet-marker-icon') === false && 
       target.closest('.leaflet-popup') === null &&
       target.closest('.leaflet-control') === null &&
       target.closest('.custom-marker') === null);

    if (isMapBackground) {
      console.log('📍 Closing SiteCard - clicked on map background');
      setSelectedSite(null);
      setIsCardVisible(false);
    }
  };

  const handleMarkerPress = (site) => {
    console.log('📍 Marker pressed:', site);
    setSelectedSite(site);
    setIsCardVisible(true);
    
    // Get coordinates from different possible structures
    const lat = site.coordinates?.latitude || site.latitude || site.lat;
    const lng = site.coordinates?.longitude || site.longitude || site.lng;
    
    if (lat && lng) {
      setFlyToLocation([lat, lng]);
      setFlyToZoom(16);
      setShouldFly(true);
      setTimeout(() => setShouldFly(false), 1000);
    }
  };

  const resetToCurrentLocation = () => {
    console.log('🔄 Resetting to current location');
    setShowSearchResults(false);
    setSearchResults([]);
    setSelectedSite(null);
    setIsCardVisible(false);
    if (currentLocation) {
      fetchStationsWithParams(currentLocation);
      setFlyToLocation([currentLocation.lat, currentLocation.lng]);
      setFlyToZoom(14);
      setShouldFly(true);
      setTimeout(() => setShouldFly(false), 1000);
    }
  };

  const focusOnUserLocation = () => {
    if (currentLocation) {
      setFlyToLocation([currentLocation.lat, currentLocation.lng]);
      setFlyToZoom(14);
      setShouldFly(true);
      setTimeout(() => setShouldFly(false), 1000);
    }
  };

  const handleNavigateToSite = (site) => {
    if (site) {
      const lat = site.coordinates?.latitude || site.latitude || site.lat;
      const lng = site.coordinates?.longitude || site.longitude || site.lng;
      if (lat && lng) {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        window.open(url, "_blank");
      }
    }
  };

  // Get stations to display
  const displayStations = showSearchResults ? searchResults : sites;
  
  // Filter stations with valid coordinates
  const stationsWithCoordinates = displayStations.filter(station => {
    const lat = station.coordinates?.latitude || station.latitude || station.lat;
    const lng = station.coordinates?.longitude || station.longitude || station.lng;
    return lat && lng;
  });

  console.log('📍 Stations to display:', displayStations.length);
  console.log('📍 Stations with coordinates:', stationsWithCoordinates.length);
  console.log('📍 First station with coordinates:', stationsWithCoordinates[0]);

  if (!currentLocation) {
    return (
      <div style={styles.loadingContainer}>
        <Spinner size={80} color="#4CAF50" message="Getting your location..." />
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {/* Backdrop for closing SiteCard when clicking outside */}
      {isCardVisible && (
        <div 
          style={styles.backdrop}
          onClick={() => {
            console.log('📍 Backdrop clicked - closing SiteCard');
            setIsCardVisible(false);
            setSelectedSite(null);
          }}
        />
      )}

      <SearchComponent
        onSelectSite={(site) => handleMarkerPress(site)}
        onSearchWithParams={handleSearchWithParams}
        onReset={resetToCurrentLocation}
      />

      <ErrorMessage
        message={
          isSearching
            ? "Searching..."
            : !stationsLoading && stationsWithCoordinates.length === 0
              ? showSearchResults
                ? "No Chargers Found for your search"
                : "No Chargers Found near your location"
              : ""
        }
      />

      <MapContainer
        center={[currentLocation.lat, currentLocation.lng]}
        zoom={14}
        style={{ width: "100%", height: "100%" }}
        whenCreated={(mapInstance) => {
          mapRef.current = mapInstance;
        }}
        onClick={handleMapClick}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Fit bounds only for initial load with current location stations */}
        {!showSearchResults && (
          <FitBounds 
            sites={sites} 
            currentLocation={currentLocation} 
            shouldFit={shouldFitBounds}
          />
        )}

        {flyToLocation && (
          <MapController center={flyToLocation} zoom={flyToZoom} shouldFly={shouldFly} />
        )}

        {/* User Location Marker */}
        <CircleMarker
          center={[currentLocation.lat, currentLocation.lng]}
          radius={10}
          pathOptions={{ color: '#4285F4', fillColor: '#4285F4', fillOpacity: 0.8, weight: 2 }}
        />

        {/* Station Markers */}
        {stationsWithCoordinates.map((site) => {
          // Get coordinates from different possible structures
          const lat = site.coordinates?.latitude || site.latitude || site.lat;
          const lng = site.coordinates?.longitude || site.longitude || site.lng;
          
          if (!lat || !lng) return null;

          return (
            <Marker
              key={site.id || site.stationId || `${lat}-${lng}`}
              position={[lat, lng]}
              icon={createStationIcon(site)}
              eventHandlers={{
                click: (e) => {
                  e.originalEvent.stopPropagation();
                  handleMarkerPress(site);
                },
              }}
            >
              <Popup>
                <div style={{ textAlign: 'center', minWidth: '120px' }}>
                  <strong>{site.name || site.stationName || 'Unknown Station'}</strong>
                  <div style={{ marginTop: '5px' }}>
                    {site.available || 0}/{site.totalPorts || 0} available
                  </div>
                  {showSearchResults && (
                    <div style={{ marginTop: '5px', fontSize: '12px', color: '#666' }}>
                      (Search Result)
                    </div>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      <div style={styles.actionButtons}>
        <button onClick={focusOnUserLocation} style={styles.actionButton} title="My Location">
          <FaCrosshairs style={styles.actionIcon} />
        </button>
        <button onClick={() => navigate("/stations")} style={styles.actionButton} title="All Chargers">
          <FaList style={styles.actionIcon} />
        </button>
        <button onClick={() => navigate("/route")} style={styles.actionButton} title="Directions">
          <FaDirections style={styles.actionIcon} />
        </button>
        {showSearchResults && (
          <button
            onClick={resetToCurrentLocation}
            style={{ ...styles.actionButton, backgroundColor: pallette.primary }}
            title="Back to Current Location"
          >
            <span style={{ color: pallette.white, fontSize: '12px' }}>Reset</span>
          </button>
        )}
      </div>

      {selectedSite && isCardVisible && (
        <div style={styles.selectedStationCard}>
          <SiteCard
            site={selectedSite}
            onNavigatePress={() => handleNavigateToSite(selectedSite)}
            showDistance={true}
            distance="12.6 km"
            onClose={() => {
              setIsCardVisible(false);
              setSelectedSite(null);
            }}
          />
        </div>
      )}
    </div>
  );
};

const styles = {
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 998,
  },
  actionButtons: {
    position: "absolute",
    bottom: h * 0.18,
    right: w * 0.04,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1000,
  },
  actionButton: {
    width: w * 0.1,
    height: w * 0.1,
    borderRadius: w * 0.05,
    backgroundColor: pallette.white,
    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
    cursor: "pointer",
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: h * 0.01,
  },
  actionIcon: {
    fontSize: '24px',
    color: pallette.primary
  },
  selectedStationCard: {
    position: 'absolute',
    bottom: h * 0.03,
    left: w * 0.04,
    right: w * 0.04,
    zIndex: 999,
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
};

export default MapsScreen;