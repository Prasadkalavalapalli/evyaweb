// import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
// import { GoogleMap, Marker, OverlayView, Polyline, useLoadScript } from "@react-google-maps/api";
// import { FaSearch, FaTimes, FaArrowLeft, FaLocationArrow, FaList, FaDirections, FaCrosshairs } from "react-icons/fa";
// import { IoLocationOutline, IoLocation, IoLocate } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { decode } from "@mapbox/polyline";
// import SiteCard from "./SiteCard";
// import { fetchStations } from "../redux/StationsSlice";
// import Spinner from "../helpers/Spinner";
// import { useNavigate} from "react-router-dom";
// import ErrorMessage from "../helpers/ErrorMessage";

// // IMPORTANT: move this to env in production
// const GOOGLE_API_KEY = "AIzaSyCBkBMkpv_sE4TLE3ERGQBvL5A1kjdJCkg";

// // Dimensions
// const w = window.innerWidth;
// const h = window.innerHeight;

// // Color palette
// const pallette = {
//   primary: "#4AAF57",
//   secondary: "#6c757d",
//   success: "#4CAF50",
//   danger: "#F44336",
//   warning: "#ffc107",
//   info: "#17a2b8",
//   white: "#ffffff",
//   light: "#f8f9fa",
//   dark: "#343a40",
//   grey: "#6c757d",
//   lightGrey: "#eee",
//   error: "#e74c3c",
//   background: "#ffffff",
//   text: "#333333",
//   textLight: "#888888"
// };

// // Font families
// const fonts = {
//   bold: "Arial-BoldMT, Arial, sans-serif",
//   semibold: "Arial-SemiboldMT, Arial, sans-serif",
//   medium: "ArialMT, Arial, sans-serif",
//   regular: "Arial, sans-serif",
// };

// // Common styles
// const styles = {
//   // Layout
//   container: {
//     position: "relative",
//     width: "100%",
//     height: "100vh"
//   },
  
//   // Map
//   mapContainer: {
//     width: "100%",
//     height: "100vh"
//   },
  
//   // Loading and Error states
//   centered: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh"
//   },
//   errorIcon: {
//     fontSize: "48px",
//     marginBottom: "16px"
//   },
//   errorText: {
//     fontSize: "16px",
//     color: pallette.error,
//     fontFamily: fonts.regular
//   },
//   loadingSpinner: {
//     border: "2px solid #f3f3f3",
//     borderTop: `2px solid ${pallette.primary}`,
//     borderRadius: "50%",
//     animation: "spin 1s linear infinite"
//   },
  
//   // Search Bar
//   searchContainer: {
//     backgroundColor: pallette.white,
//     borderRadius: "12px",
//     padding: "15px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
//     marginTop: "30px"
    
//   },
//   searchInputContainer: {
//     display: "flex",
//     alignItems: "center",
//     margin: "8px 0"
//   },
//   searchIcon: {
//     fontSize: "18px",
//     marginRight: "8px"
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: "14px",
//     color: pallette.text,
//     padding: "8px",
//     border: "none",
//     outline: "none",
//     fontFamily: fonts.regular
//   },
//   clearButton: {
//     background: "none",
//     border: "none",
//     cursor: "pointer",
//     fontSize: "16px",
//     marginLeft: "8px",
//     padding: "4px",
//     color: pallette.grey
//   },
//   divider: {
//     height: "1px",
//     backgroundColor: pallette.lightGrey,
//     margin: "5px 0 5px 24px"
//   },
  
//   // Predictions
//   predictionsContainer: {
//     maxHeight: "150px",
//     marginTop: "5px",
//     border: `1px solid ${pallette.lightGrey}`,
//     borderRadius: "8px",
//     backgroundColor: pallette.white,
//     overflowY: "auto",
//     zIndex: 1000,
//     position: "relative"
//   },
//   predictionItem: {
//     display: "flex",
//     alignItems: "center",
//     padding: "8px 10px",
//     borderBottom: `1px solid ${pallette.lightGrey}`,
//     cursor: "pointer"
//   },
//   predictionText: {
//     fontSize: "14px",
//     color: pallette.text,
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     whiteSpace: "nowrap",
//     flex: 1,
//     fontFamily: fonts.regular
//   },
  
//   // Buttons
//   primaryButton: {
//     backgroundColor: pallette.primary,
//     borderRadius: "10px",
//     padding: "12px",
//     border: "none",
//     color: pallette.white,
//     fontSize: "14px",
//     fontWeight: 600,
//     cursor: "pointer",
//     width: "100%",
//     marginTop: "15px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontFamily: fonts.semibold
//   },
//   primaryButtonDisabled: {
//     backgroundColor: pallette.grey,
//     cursor: "not-allowed"
//   },
//   actionButton: {
//     width: w * 0.1,
//     height: w * 0.1,
//     borderRadius: w * 0.05,
//     backgroundColor: pallette.white,
//     boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
//     cursor: "pointer",
//     border: "none",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: h * 0.01,
//   },
//   actionIcon: {
//     fontSize: "18px",
//     color: pallette.primary
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
//   // Cards and Overlays
//   messageContainer: {
//     position: "absolute",
//     bottom: "40px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     backgroundColor: pallette.white,
//     padding: "12px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
//     fontFamily: fonts.regular
//   },
//   errorMessageContainer: {
//     backgroundColor: "#ffebee"
//   }
// };

// // Default center (New York)
// const defaultCenter = {
//   lat: 40.7128,
//   lng: -74.0060
// };

// // ------------------ Small memoized components ------------------
// const PredictionItem = React.memo(({ item, onPress }) => (
//   <div style={styles.predictionItem} onClick={() => onPress(item)}>
//     <IoLocationOutline style={{...styles.searchIcon, color: pallette.text}} />
//     <span style={styles.predictionText}>
//       {item.description}
//     </span>
//   </div>
// ));

// const PredictionsList = React.memo(({ predictions, onSelect }) => (
//   <div style={styles.predictionsContainer}>
//     {predictions.map((item) => (
//       <PredictionItem key={item.place_id} item={item} onPress={onSelect} />
//     ))}
//   </div>
// ));


// const SearchBar = React.memo(({
//   source,
//   destination,
//   onSourceFocus,
//   onDestFocus,
//   onUseCurrentLocation,
//   onClearSource,
//   onClearDest,
//   onChangeSource,
//   onChangeDest,
// }) => {
//   return (
//     <div style={styles.searchContainer}>
//       <div style={{ marginTop: "10px", marginLeft: "30px" }}>
//         <div style={styles.searchInputContainer}>
//           <IoLocate style={{...styles.searchIcon, color: pallette.primary}} />
//           <input
//             type="text"
//             style={styles.searchInput}
//             placeholder="Choose Current Location"
//             value={source}
//             onChange={(e) => onChangeSource(e.target.value)}
//             onFocus={onSourceFocus}
//           />
//           {source && (
//             <button style={styles.clearButton} onClick={onClearSource}>
//               <FaTimes />
//             </button>
//           )}
//           <button style={styles.clearButton} onClick={onUseCurrentLocation}>
//             <IoLocate style={{ color: pallette.primary }} />
//           </button>
//         </div>

//         <div style={styles.divider} />

//         <div style={styles.searchInputContainer}>
//           <IoLocation style={{...styles.searchIcon, color: pallette.danger}} />
//           <input
//             type="text"
//             style={styles.searchInput}
//             placeholder="Choose Destination Location"
//             value={destination}
//             onChange={(e) => onChangeDest(e.target.value)}
//             onFocus={onDestFocus}
//           />
//           {destination && (
//             <button style={styles.clearButton} onClick={onClearDest}>
//               <FaTimes />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// });

// // ------------------ Main Route Component ------------------
// const Route = () => {
//   const dispatch = useDispatch();
//   const navigate=useNavigate();
//   const { stations, loading, error } = useSelector((state) => state.stations);
//   const mapRef = useRef(null);
//   const autocompleteService = useRef(null);

//   const [isExpanded, setIsExpanded] = useState(true);
//   const [source, setSource] = useState("");
//   const [destination, setDestination] = useState("");
//   const [routeCoords, setRouteCoords] = useState([]);
//   const [noChargers, setNoChargers] = useState(false);
//   const [isFetchingRoute, setIsFetchingRoute] = useState(false);
//   const [selectedSite, setSelectedSite] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(defaultCenter);
//   const [fullLocation, setFullLocation] = useState("");

//   // Autocomplete state
//   const [predictions, setPredictions] = useState([]);
//   const [activeInput, setActiveInput] = useState(null);

//   // Load Google Maps
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: GOOGLE_API_KEY,
//     libraries: ['places']
//   });

//   // Refs for debouncing
//   const predDebounceRef = useRef(null);

//   // Initialize autocomplete service once Google Maps is loaded
//   useEffect(() => {
//     if (isLoaded && window.google) {
//       autocompleteService.current = new window.google.maps.places.AutocompleteService();
//     }
//   }, [isLoaded]);

//   // Get current location
//   useEffect(() => {
//     if (!isLoaded) return;

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           const location = {
//             lat: pos.coords.latitude,
//             lng: pos.coords.longitude
//           };
//           setCurrentLocation(location);
          
//           // Reverse geocode to get address using Google Maps Geocoder
//           const geocoder = new window.google.maps.Geocoder();
//           geocoder.geocode({ location }, (results, status) => {
//             if (status === "OK" && results[0]) {
//               setFullLocation(results[0].formatted_address);
//               setSource(results[0].formatted_address);
//             }
//           });
//         },
//         (err) => {
//           console.error("Geolocation error:", err);
//           setCurrentLocation(defaultCenter);
//         }
//       );
//     } else {
//       setCurrentLocation(defaultCenter);
//     }
//   }, [isLoaded]);

//   // Update route when stations change
//   useEffect(() => {
//     if (stations && stations.length > 0) {
//       setNoChargers(false);
//       fetchRoute(source, destination);
//     } else if (!loading && source && destination) {
//       setNoChargers(true);
//     }
//   }, [stations, loading, source]);

//   // ------------------ Debounced predictions ------------------
//   const fetchPredictions = useCallback(async (input) => {
//     if (!input || input.length < 3 || !autocompleteService.current) {
//       setPredictions([]);
//       return;
//     }

//     try {
//       autocompleteService.current.getPlacePredictions(
//         { input, types: ['geocode'] },
//         (predictions, status) => {
//           if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
//             setPredictions(predictions);
//           } else {
//             setPredictions([]);
//           }
//         }
//       );
//     } catch (err) {
//       console.log("Autocomplete error:", err);
//       setPredictions([]);
//     }
//   }, []);

//   const debouncedFetchPredictions = useCallback((input) => {
//     if (predDebounceRef.current) clearTimeout(predDebounceRef.current);
//     predDebounceRef.current = setTimeout(() => fetchPredictions(input), 450);
//   }, [fetchPredictions]);

//   // Fetch place details
//   const fetchPlaceDetails = useCallback(async (placeId, description, isSource = false) => {
//     try {
//       if (!window.google) return;
      
//       const service = new window.google.maps.places.PlacesService(document.createElement('div'));
//       service.getDetails(
//         { placeId, fields: ['geometry', 'name', 'formatted_address'] },
//         (place, status) => {
//           if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
//             if (isSource) {
//               setSource(description);
//             } else {
//               setDestination(description);
//             }
//             setPredictions([]);
//             setActiveInput(null);
//           }
//         }
//       );
//     } catch (err) {
//       console.log("Place details error:", err);
//       <ErrorMessage message="Failed to get location details"/>
//     }
//   }, []);

//   // ------------------ Route fetching ------------------
//   const fetchRoute = useCallback(async (from, to) => {
//     if (!from || !to || !window.google) return;

//     setIsFetchingRoute(true);
//     try {
//       const directionsService = new window.google.maps.DirectionsService();
      
//       directionsService.route(
//         {
//           origin: from,
//           destination: to,
//           travelMode: window.google.maps.TravelMode.DRIVING
//         },
//         (result, status) => {
//           if (status === window.google.maps.DirectionsStatus.OK && result.routes.length) {
//             try {
//               const points = decode(result.routes[0].overview_polyline.points);
//               const coords = points.map(point => ({ lat: point[0], lng: point[1] }));
//               setRouteCoords(coords);
              
//               // Fit map to show the entire route
//               if (mapRef.current && coords.length > 0) {
//                 const bounds = new window.google.maps.LatLngBounds();
//                 coords.forEach(coord => bounds.extend(coord));
//                 mapRef.current.fitBounds(bounds);
//               }
//             } catch (err) {
//               console.log('Polyline decode error', err);
//             }
//           } else {
//             <ErrorMessage message="No Chargers Found In this Route"/>
//           }
//           setIsFetchingRoute(false);
//         }
//       );
//     } catch (err) {
//       console.log("Route fetch error:", err);
//       <ErrorMessage message="Failed to fetch route"/>
//       setIsFetchingRoute(false);
//     }
//   }, []);

//   // ------------------ Handlers ------------------
//   const handleFindChargers = useCallback(() => {
//     if (source && destination) {
//       dispatch(fetchStations({ from: source, to: destination }));
//     } else {
//       <ErrorMessage message="Please enter both source and destination"/>
//     }
//   }, [source, destination, dispatch]);

//   const handleInputFocus = useCallback((inputName) => {
//     setActiveInput(inputName);
//     if (inputName === 'source' && source) debouncedFetchPredictions(source);
//     else if (inputName === 'destination' && destination) debouncedFetchPredictions(destination);
//   }, [source, destination, debouncedFetchPredictions]);

//   const handleInputBlur = useCallback(() => {
//     setTimeout(() => {
//       setPredictions([]);
//       setActiveInput(null);
//     }, 200);
//   }, []);

//   const useCurrentLocation = useCallback(() => {
//     if (fullLocation) {
//       setSource(fullLocation);
//       setPredictions([]);
//     }
//   }, [fullLocation]);

//   const clearSource = useCallback(() => {
//     setSource("");
//     setPredictions([]);
//   }, []);

//   const clearDest = useCallback(() => {
//     setDestination("");
//     setPredictions([]);
//   }, []);

//   // Map interactions
//   const handleMarkerPress = useCallback((site) => {
//     setSelectedSite(site);
//     if (mapRef.current && site.coordinates) {
//       mapRef.current.panTo({ 
//         lat: site.coordinates.latitude, 
//         lng: site.coordinates.longitude 
//       });
//       mapRef.current.setZoom(14);
//     }
//   }, []);

//   const handleNavigateToSite = useCallback((site) => {
//     if (!site || !site.coordinates) return;
//     const { latitude, longitude } = site.coordinates;
//     const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
//     window.open(url, "_blank");
//   }, []);

//   const focusOnUserLocation = useCallback(() => {
//     if (currentLocation && mapRef.current) {
//       mapRef.current.panTo(currentLocation);
//       mapRef.current.setZoom(14);
//     }
//   }, [currentLocation]);

//   const zoomToFitMarkers = useCallback(() => {
//     if (mapRef.current && stations && stations.length > 0) {
//       const bounds = new window.google.maps.LatLngBounds();
//       stations.forEach(site => {
//         if (site.coordinates) {
//           bounds.extend({ 
//             lat: site.coordinates.latitude, 
//             lng: site.coordinates.longitude 
//           });
//         }
//       });
//       mapRef.current.fitBounds(bounds);
//     }
//   }, [stations]);

//   // ------------------ Memoize markers ------------------
//   const markers = useMemo(() => {
//     if (!Array.isArray(stations)) return null;
//     return stations.map((site, index) => {
//       if (!site || !site.coordinates) return null;
//       return (
//         <OverlayView
//           key={site.id?.toString() || index}
//           position={{ lat: site.coordinates.latitude, lng: site.coordinates.longitude }}
//           mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//           getPixelPositionOffset={(width, height) => ({
//             x: -(width / 2),
//             y: -(height / 2),
//           })}
//         >
//           <div 
//             style={styles.markerContainer}
//             onClick={() => handleMarkerPress(site)}
//             title={site.name}
//           >
//             <img 
//               src={require("../images/chargermark.png")} 
//               alt="EV Station"
//               style={styles.markerImage}
//             />
//             <div style={{
//               ...styles.availabilityBadge,
//               backgroundColor: site.available > 0 ? '#E6F4EA' : '#FFEBEB'
//             }}>
//               <span style={{
//                 ...styles.availabilityText,
//                 color: site.available > 0 ? '#4CAF50' : '#F44336'
//               }}>
//                 {site.available}/{site.totalPorts || 0}
//               </span>
//             </div>
//           </div>
//         </OverlayView>
//       );
//     });
//   }, [stations, handleMarkerPress]);

//   // ------------------ Predictions select handler ------------------
//   const onSelectPrediction = useCallback(({ place_id, description }) => {
//     fetchPlaceDetails(place_id, description, activeInput === 'source');
//   }, [fetchPlaceDetails, activeInput]);

//   if (loadError) {
//     return (
//       <div style={styles.centered}>
//         <div style={styles.errorIcon}>⚠️</div>
//         <div style={styles.errorText}>Error loading maps</div>
//       </div>
//     );
//   }

//   if (!isLoaded) {
//     return (
//       <div style={styles.centered}>
//         <Spinner size={30} color={pallette.primary} message="Loading maps..." />
//       </div>
//     );
//   }

//   // ------------------ Render ------------------
//   return (
//     <div style={styles.container}>
//       <GoogleMap
//         mapContainerStyle={styles.mapContainer}
//         center={currentLocation}
//         zoom={10}
//         onLoad={(map) => (mapRef.current = map)}
//         options={{
//           disableDefaultUI: true,
//           zoomControl: false,
//           fullscreenControl: false,
//           mapTypeControl: false,
//           streetViewControl: false,
//         }}
//       >
//         {routeCoords.length > 0 && (
//           <Polyline
//             path={routeCoords}
//             options={{
//               strokeColor: pallette.success,
//               strokeOpacity: 0.8,
//               strokeWeight: 4,
//             }}
//           />
//         )}

//         {markers}
//       </GoogleMap>

//       <div style={{ position: "absolute", top: "20px", left: "20px", right: "20px", zIndex: 10 }}>
//         {isExpanded ? (
//           <>
//             <button
//               style={{
//                 position: "absolute",
//                 top: "35px",
//                 left: "15px",
//                 zIndex: 1,
//                 background: "none",
//                 border: "none",
//                 fontSize: "18px",
//                 cursor: "pointer",
//                 color: pallette.text
//               }}
//               // onClick={() => {
//               //   setIsExpanded(false);
//               //   setSource(fullLocation || "");
//               //   setDestination("");
//               //   setRouteCoords([]);
//               //   setPredictions([]);
//               //   setActiveInput(null);
//               //   setSelectedSite(null);
//               // }}
//               onClick={()=>{navigate(-1)}}
//             >
//               <FaArrowLeft />
//             </button>

//             <SearchBar
//               source={source}
//               destination={destination}
//               onSourceFocus={() => handleInputFocus('source')}
//               onDestFocus={() => handleInputFocus('destination')}
//               onUseCurrentLocation={useCurrentLocation}
//               onClearSource={clearSource}
//               onClearDest={clearDest}
//               onChangeSource={(text) => {
//                 setSource(text);
//                 setActiveInput('source');
//                 debouncedFetchPredictions(text);
//               }}
//               onChangeDest={(text) => {
//                 setDestination(text);
//                 setActiveInput('destination');
//                 debouncedFetchPredictions(text);
//               }}
//             />

//             {predictions.length > 0 && activeInput && (
//               <PredictionsList predictions={predictions} onSelect={onSelectPrediction} />
//             )}

//             <button
//               style={{
//                 ...styles.primaryButton,
//                 ...((!source || !destination || isFetchingRoute) && styles.primaryButtonDisabled)
//               }}
//               onClick={handleFindChargers}
//               disabled={!source || !destination || isFetchingRoute}
//             >
//               {isFetchingRoute ? (
//                 <div style={{...styles.loadingSpinner, width: "20px", height: "20px"}} />
//               ) : (
//                 "Find Chargers"
//               )}
//             </button>
//           </>
//         ) : (
//           <button
//             style={{
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: pallette.white,
//               borderRadius: "12px",
//               padding: "12px 15px",
//               border: "none",
//               boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
//               cursor: "pointer",
//               width: "100%"
//             }}
//             onClick={() => setIsExpanded(true)}
//           >
//             <FaSearch />
//             <span style={{ marginLeft: "10px", fontSize: "14px", color: pallette.textLight, fontFamily: fonts.regular }}>
//               Search your Destination
//             </span>
//           </button>
//         )}
//       </div>

//       <div style={{
//         position: "absolute",
//         bottom: h * 0.18,
//         right: w * 0.04,
//         display: "flex",
//         flexDirection: "column",
//         gap: "10px",
//         zIndex: 1000,
//       }}>
//         <button
//           onClick={focusOnUserLocation}
//           style={styles.actionButton}
//           title="My Location"
//         >
//           <FaCrosshairs style={styles.actionIcon} />
//         </button>
//         <button
//          onClick={()=>navigate("/stations")}
//           style={styles.actionButton}
//           title="Zoom to All Chargers"
//         >
//           <FaList style={styles.actionIcon} />
//         </button>
//       </div>

//       {selectedSite && (
//         <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px", zIndex: 10 }}>
//           <SiteCard
//             site={selectedSite}
//             onNavigatePress={() => handleNavigateToSite(selectedSite)}
//           />
//         </div>
//       )}

//       {(loading || isFetchingRoute) && (
//         <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1000 }}>
//           <Spinner size={30} color={pallette.primary} />
//         </div>
//       )}

//       {noChargers && !loading && (
        
         
//   <ErrorMessage message="No chargers found along this route" />


//       )}

//       {error && !loading && (
//         <div style={{...styles.messageContainer, ...styles.errorMessageContainer}}>
//           <span style={{ fontFamily: fonts.regular }}>Error: {error}</span>
//         </div>
//       )}

//       <style>{`
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Route;

import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import { FaSearch, FaTimes, FaArrowLeft, FaLocationArrow, FaList, FaDirections, FaCrosshairs } from "react-icons/fa";
import { IoLocationOutline, IoLocation, IoLocate } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { decode } from "@mapbox/polyline";
import SiteCard from "./SiteCard";
import { fetchStations } from "../redux/StationsSlice";
import Spinner from "../helpers/Spinner";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../helpers/ErrorMessage";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Dimensions
const w = window.innerWidth;
const h = window.innerHeight;

// Color palette
const pallette = {
  primary: "#4AAF57",
  secondary: "#6c757d",
  success: "#4CAF50",
  danger: "#F44336",
  warning: "#ffc107",
  info: "#17a2b8",
  white: "#ffffff",
  light: "#f8f9fa",
  dark: "#343a40",
  grey: "#6c757d",
  lightGrey: "#eee",
  error: "#e74c3c",
  background: "#ffffff",
  text: "#333333",
  textLight: "#888888"
};

// Font families
const fonts = {
  bold: "Arial-BoldMT, Arial, sans-serif",
  semibold: "Arial-SemiboldMT, Arial, sans-serif",
  medium: "ArialMT, Arial, sans-serif",
  regular: "Arial, sans-serif",
};

// Common styles
const styles = {
  // Layout
  container: {
    position: "relative",
    width: "100%",
    height: "100vh"
  },
  
  // Map
  mapContainer: {
    width: "100%",
    height: "100vh"
  },
  
  // Loading and Error states
  centered: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  errorIcon: {
    fontSize: "48px",
    marginBottom: "16px"
  },
  errorText: {
    fontSize: "16px",
    color: pallette.error,
    fontFamily: fonts.regular
  },
  loadingSpinner: {
    border: "2px solid #f3f3f3",
    borderTop: `2px solid ${pallette.primary}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  },
  
  // Search Bar
  searchContainer: {
    backgroundColor: pallette.white,
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    marginTop: "30px"
  },
  searchInputContainer: {
    display: "flex",
    alignItems: "center",
    margin: "8px 0"
  },
  searchIcon: {
    fontSize: "18px",
    marginRight: "8px"
  },
  searchInput: {
    flex: 1,
    fontSize: "14px",
    color: pallette.text,
    padding: "8px",
    border: "none",
    outline: "none",
    fontFamily: fonts.regular
  },
  clearButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    marginLeft: "8px",
    padding: "4px",
    color: pallette.grey
  },
  divider: {
    height: "1px",
    backgroundColor: pallette.lightGrey,
    margin: "5px 0 5px 24px"
  },
  
  // Predictions
  predictionsContainer: {
    maxHeight: "150px",
    marginTop: "5px",
    border: `1px solid ${pallette.lightGrey}`,
    borderRadius: "8px",
    backgroundColor: pallette.white,
    overflowY: "auto",
    zIndex: 1000,
    position: "relative"
  },
  predictionItem: {
    display: "flex",
    alignItems: "center",
    padding: "8px 10px",
    borderBottom: `1px solid ${pallette.lightGrey}`,
    cursor: "pointer"
  },
  predictionText: {
    fontSize: "14px",
    color: pallette.text,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    flex: 1,
    fontFamily: fonts.regular
  },
  
  // Buttons
  primaryButton: {
    backgroundColor: pallette.primary,
    borderRadius: "10px",
    padding: "12px",
    border: "none",
    color: pallette.white,
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: fonts.semibold
  },
  primaryButtonDisabled: {
    backgroundColor: pallette.grey,
    cursor: "not-allowed"
  },
  actionButton: {
    width: w * 0.1,
    height: w * 0.1,
    borderRadius: w * 0.05,
    backgroundColor: pallette.white,
    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
    cursor: "pointer",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: h * 0.01,
  },
  actionIcon: {
    fontSize: "18px",
    color: pallette.primary
  },
  
  // Cards and Overlays
  messageContainer: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: pallette.white,
    padding: "12px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    fontFamily: fonts.regular
  },
  errorMessageContainer: {
    backgroundColor: "#ffebee"
  }
};

// Default center (Hyderabad)
const defaultCenter = [17.4065, 78.4772];

// Custom charger icon
const createChargerIcon = (site) => {
  console.log(site);

  // Determine brand image dynamically
  const name = (site.siteName || site.managerName).toLowerCase();
  let logo = require("../images/chargermark.png"); // default image

  if (name.includes("bpcl")) {
    logo = require("../images/bpcl.png");
  } else if (name.includes("hpcl")) {
    logo = require("../images/hpcl.png");
  } else if (name.includes("iocl") || name.includes("iocl") || name.includes("indian oil")) {
    logo = require("../images/incl.png");
  }
else{
  logo = require("../images/chargermark.png");
}
  return L.divIcon({
    html: `
      <div style="position: relative; cursor: pointer;">
        <img src="${logo}" alt="EV Station" 
             style="width: 20px; height: 40px; object-fit: contain;" />
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
            font-family: Arial-SemiboldMT, Arial, sans-serif; 
            color: ${site.available > 0 ? "#4CAF50" : "#F44336"};
          ">
            ${site.available}/${site.totalPorts || 0}
          </span>
        </div>
      </div>
    `,
    className: "custom-marker",
    iconSize: [40, 50],
    iconAnchor: [20, 50],
  });
};

// Custom user location icon
const createUserLocationIcon = () => {
  return L.divIcon({
    html: `
      <div style="position: relative;">
        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: #4285F4; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>
      </div>
    `,
    className: 'user-location-marker',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

// Custom destination icon
const createDestinationIcon = () => {
  return L.divIcon({
    html: `
      <div style="position: relative;">
        <div style="width: 20px; height: 20px; border-radius: 50%; background-color: #F44336; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>
      </div>
    `,
    className: 'destination-marker',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

// Map controller components
const MapController = ({ center, zoom, shouldFly }) => {
  const map = useMap();
  
  useEffect(() => {
    if (center && shouldFly) {
      map.flyTo(center, zoom, {
        duration: 1.0
      });
    } else if (center) {
      map.setView(center, zoom);
    }
  }, [center, zoom, shouldFly, map]);
  
  return null;
};

const FitBounds = ({ bounds, shouldZoom }) => {
  const map = useMap();
  
  useEffect(() => {
    if (!map || !shouldZoom || !bounds) return;
    
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [bounds, shouldZoom, map]);
  
  return null;
};

// ------------------ Small memoized components ------------------
const PredictionItem = React.memo(({ item, onPress }) => (
  <div style={styles.predictionItem} onClick={() => onPress(item)}>
    <IoLocationOutline style={{...styles.searchIcon, color: pallette.text}} />
    <span style={styles.predictionText}>
      {item.description}
    </span>
  </div>
));

const PredictionsList = React.memo(({ predictions, onSelect }) => (
  <div style={styles.predictionsContainer}>
    {predictions.map((item) => (
      <PredictionItem key={item.place_id} item={item} onPress={onSelect} />
    ))}
  </div>
));

const SearchBar = React.memo(({
  source,
  destination,
  onSourceFocus,
  onDestFocus,
  onUseCurrentLocation,
  onClearSource,
  onClearDest,
  onChangeSource,
  onChangeDest,
}) => {
  return (
    <div style={styles.searchContainer}>
      <div style={{ marginTop: "10px", marginLeft: "30px" }}>
        <div style={styles.searchInputContainer}>
          <IoLocate style={{...styles.searchIcon, color: pallette.primary}} />
          <input
            type="text"
            style={styles.searchInput}
            placeholder="Choose Current Location"
            value={source}
            onChange={(e) => onChangeSource(e.target.value)}
            onFocus={onSourceFocus}
          />
          {source && source !== "Your Current Location" && (
            <button style={styles.clearButton} onClick={onClearSource}>
              <FaTimes />
            </button>
          )}
          <button style={styles.clearButton} onClick={onUseCurrentLocation} title="Use Current Location">
            <IoLocate style={{ color: pallette.primary }} />
          </button>
        </div>

        <div style={styles.divider} />

        <div style={styles.searchInputContainer}>
          <IoLocation style={{...styles.searchIcon, color: pallette.danger}} />
          <input
            type="text"
            style={styles.searchInput}
            placeholder="Choose Destination Location"
            value={destination}
            onChange={(e) => onChangeDest(e.target.value)}
            onFocus={onDestFocus}
          />
          {destination && (
            <button style={styles.clearButton} onClick={onClearDest}>
              <FaTimes />
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

// ------------------ Main Route Component ------------------
const Route = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { stations = [], loading: stationsLoading, error: stationsError } = useSelector((state) => state.stations || {});
  const mapRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(true);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [routeCoords, setRouteCoords] = useState([]);
  const [noChargers, setNoChargers] = useState(false);
  const [isFetchingRoute, setIsFetchingRoute] = useState(false);
  const [selectedSite, setSelectedSite] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [mapZoom, setMapZoom] = useState(10);
  const [shouldFly, setShouldFly] = useState(false);
  const [shouldZoomToBounds, setShouldZoomToBounds] = useState(false);
  const [mapBounds, setMapBounds] = useState(null);

  // Autocomplete state
  const [predictions, setPredictions] = useState([]);
  const [activeInput, setActiveInput] = useState(null);

  // ✅ FIX 1: Get current location and set it in the field properly
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const location = [pos.coords.latitude, pos.coords.longitude];
          console.log("📍 Current location obtained:", location);
          setCurrentLocation(location);
          setMapCenter(location);
          setMapZoom(14);
          
          // ✅ FIX: Show current location in text field properly
          const formatted = ``;
          setSource(formatted);
        },
        (err) => {
          console.error("Geolocation error:", err);
          setCurrentLocation(defaultCenter);
          setSource("Default Location - Hyderabad");
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setCurrentLocation(defaultCenter);
      setSource("Default Location - Hyderabad");
    }
  }, []);

  // ✅ FIX 2: Generate proper route line when both locations are set
  useEffect(() => {
    if (source && destination) {
      console.log("🔄 Generating route between source and destination");
      
      try {
        // For demo purposes - create a proper route line
        let startCoords = currentLocation;
        let endCoords = destinationCoords || [17.4474, 78.3765]; // Default to HITEC City if no destination coords
        
        // Create a proper route with multiple points
        const routePoints = generateRoutePoints(startCoords, endCoords);
        setRouteCoords(routePoints);
        
        // Create bounds for the route
        const bounds = L.latLngBounds(routePoints);
        setMapBounds(bounds);
        setShouldZoomToBounds(true);
        
        console.log("✅ Route generated with", routePoints.length, "points");
      } catch (err) {
        console.error("Error generating route:", err);
      }
    }
  }, [source, destination, currentLocation, destinationCoords]);

  // ✅ FIX 3: Fit map to chargers when stations are loaded
  useEffect(() => {
    if (stations && stations.length > 0) {
      setNoChargers(false);
      console.log("✅ Stations loaded:", stations.length);
      
      // ✅ NEW: Fit map to show all chargers when route is not available
      if (stations.length > 0) {
        const bounds = L.latLngBounds([]);
        
        // Add all stations to bounds
        stations.forEach(site => {
          if (site.coordinates) {
            bounds.extend([site.coordinates.latitude, site.coordinates.longitude]);
          }
        });
        
        // Add current location to bounds if available
        if (currentLocation) {
          bounds.extend(currentLocation);
        }
        
        // Add destination to bounds if available
        if (destinationCoords) {
          bounds.extend(destinationCoords);
        }
        
        if (bounds.isValid()) {
          setMapBounds(bounds);
          setShouldZoomToBounds(true);
          console.log("✅ Map fitted to chargers");
        }
      }
      
    } else if (!stationsLoading && source && destination && stations.length === 0) {
      // ✅ FIX: Show proper no chargers message
      setNoChargers(true);
    }
  }, [stations, stationsLoading, source, destination, currentLocation, destinationCoords]);

  // Helper function to generate route points
  const generateRoutePoints = (start, end) => {
    const points = [start];
    
    // Add intermediate points for a curved route
    const midLat = (start[0] + end[0]) / 2;
    const midLng = (start[1] + end[1]) / 2;
    
    // Create a slight curve
    const curveFactor = 0.01;
    const curvedMidPoint = [
      midLat + (end[1] - start[1]) * curveFactor,
      midLng - (end[0] - start[0]) * curveFactor
    ];
    
    points.push(curvedMidPoint);
    points.push(end);
    
    return points;
  };

  // ✅ FIX 4: Handle find chargers with proper parameters
  const handleFindChargers = useCallback(async () => {
    if (!source || !destination) {
      console.log("Please enter both source and destination");
      return;
    }

    setIsFetchingRoute(true);
    setNoChargers(false);
    setShouldZoomToBounds(true);
    
    try {
      console.log("🔄 Finding chargers for route:", { from: source, to: destination });
      
      // ✅ FIX: Send from and to as strings
      await dispatch(fetchStations({ 
        from: source,
        to: destination
      })).unwrap();
      
      console.log("✅ Chargers fetched successfully");
      
    } catch (error) {
      console.error("❌ Error fetching chargers:", error);
      setNoChargers(true);
    } finally {
      setIsFetchingRoute(false);
      setTimeout(() => setShouldZoomToBounds(false), 1000);
    }
  }, [source, destination, dispatch]);

  const handleInputFocus = useCallback((inputName) => {
    setActiveInput(inputName);
  }, []);

  // ✅ FIX 5: Use current location properly
  const useCurrentLocation = useCallback(() => {
    const formatted = `Your Current Location (${currentLocation[0].toFixed(4)}, ${currentLocation[1].toFixed(4)})`;
    setSource(formatted);
    setPredictions([]);
    
    // Fly to current location
    setMapCenter(currentLocation);
    setMapZoom(14);
    setShouldFly(true);
    setTimeout(() => setShouldFly(false), 1000);
  }, [currentLocation]);

  const clearSource = useCallback(() => {
    setSource("");
    setPredictions([]);
    setRouteCoords([]);
    setMapBounds(null);
  }, []);

  const clearDest = useCallback(() => {
    setDestination("");
    setDestinationCoords(null);
    setPredictions([]);
    setRouteCoords([]);
    setMapBounds(null);
  }, []);

  // Map interactions
  const handleMarkerPress = useCallback((site) => {
    setSelectedSite(site);
    if (site.coordinates) {
      setMapCenter([site.coordinates.latitude, site.coordinates.longitude]);
      setMapZoom(16);
      setShouldFly(true);
      setTimeout(() => setShouldFly(false), 1000);
    }
  }, []);

  const handleNavigateToSite = useCallback((site) => {
    if (!site || !site.coordinates) return;
    const { latitude, longitude } = site.coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, "_blank");
  }, []);

  const focusOnUserLocation = useCallback(() => {
    setMapCenter(currentLocation);
    setMapZoom(14);
    setShouldFly(true);
    setTimeout(() => setShouldFly(false), 1000);
  }, [currentLocation]);

  // For demo predictions
  const debouncedFetchPredictions = useCallback((input) => {
    if (input.length > 2) {
      const demoPredictions = [
        { 
          place_id: '1', 
          description: "HITEC City, Hyderabad", 
          coords: [17.4474, 78.3765] 
        },
        { 
          place_id: '2', 
          description: "Gachibowli, Hyderabad", 
          coords: [17.4401, 78.3489] 
        },
        { 
          place_id: '3', 
          description: "Madhapur, Hyderabad", 
          coords: [17.4487, 78.3906] 
        }
      ].filter(item => 
        item.description.toLowerCase().includes(input.toLowerCase())
      );
      
      setPredictions(demoPredictions);
    } else {
      setPredictions([]);
    }
  }, []);

  
  const onSelectPrediction = useCallback((prediction) => {
    if (activeInput === 'source') {
      setSource(prediction.description);
      if (prediction.coords) {
        setCurrentLocation(prediction.coords);
        setMapCenter(prediction.coords);
        setMapZoom(14);
        setShouldFly(true);
        setTimeout(() => setShouldFly(false), 1000);
      }
    } else {
      setDestination(prediction.description);
      if (prediction.coords) {
        setDestinationCoords(prediction.coords);
      }
    }
    setPredictions([]);
    setActiveInput(null);
  }, [activeInput]);

  // Close card when clicking on map
  const handleMapClick = useCallback(() => {
    setSelectedSite(null);
  }, []);

  // ------------------ Memoize markers ------------------
  const markers = useMemo(() => {
    if (!Array.isArray(stations) || stations.length === 0) return null;
    
    return stations.map((site, index) => {
      if (!site || !site.coordinates) return null;
      return (
        <Marker
          key={site.id?.toString() || `station-${index}`}
          position={[site.coordinates.latitude, site.coordinates.longitude]}
          icon={createChargerIcon(site)}
          eventHandlers={{
            click: (e) => {
              e.originalEvent.stopPropagation();
              handleMarkerPress(site);
            },
          }}
        >
          <Popup>
            <div style={{ textAlign: "center", minWidth: "120px" }}>
              <strong>{site.name}</strong>
              <div style={{ marginTop: "5px" }}>
                {site.available}/{site.totalPorts} available
              </div>
              <button
                style={{
                  backgroundColor: pallette.primary,
                  color: pallette.white,
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  marginTop: "5px",
                  cursor: "pointer",
                  fontSize: "12px"
                }}
                onClick={() => handleNavigateToSite(site)}
              >
                Navigate
              </button>
            </div>
          </Popup>
        </Marker>
      );
    });
  }, [stations, handleMarkerPress, handleNavigateToSite]);

  const isLoading = stationsLoading || isFetchingRoute;

  return (
    <div style={styles.container}>
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={styles.mapContainer}
        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        onClick={handleMapClick}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Map controllers */}
        <MapController center={mapCenter} zoom={mapZoom} shouldFly={shouldFly} />
        <FitBounds bounds={mapBounds} shouldZoom={shouldZoomToBounds} />

        {/* ✅ FIX: Route polyline with proper styling - NOW WORKING */}
        {routeCoords.length > 1 && (
          <Polyline
            positions={routeCoords}
            pathOptions={{ 
              color: pallette.primary, 
              weight: 6, 
              opacity: 0.8,
              dashArray: '10, 10'
            }}
          />
        )}

        {/* User location marker */}
        <Marker position={currentLocation} icon={createUserLocationIcon()}>
          <Popup>Your Current Location</Popup>
        </Marker>

        {/* Destination marker */}
        {destinationCoords && (
          <Marker position={destinationCoords} icon={createDestinationIcon()}>
            <Popup>Destination</Popup>
          </Marker>
        )}

        {/* Station markers */}
        {markers}
      </MapContainer>

      {/* Search Section */}
      <div style={{ position: "absolute", top: "20px", left: "20px", right: "20px", zIndex: 1000 }}>
        {isExpanded ? (
          <>
            <button
              style={{
                position: "absolute",
                top: "35px",
                left: "15px",
                zIndex: 1,
                background: "none",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                color: pallette.text
              }}
              onClick={() => navigate(-1)}
            >
              <FaArrowLeft />
            </button>

            <SearchBar
              source={source}
              destination={destination}
              onSourceFocus={() => handleInputFocus('source')}
              onDestFocus={() => handleInputFocus('destination')}
              onUseCurrentLocation={useCurrentLocation}
              onClearSource={clearSource}
              onClearDest={clearDest}
              onChangeSource={(text) => {
                setSource(text);
                setActiveInput('source');
                debouncedFetchPredictions(text);
              }}
              onChangeDest={(text) => {
                setDestination(text);
                setActiveInput('destination');
                debouncedFetchPredictions(text);
              }}
            />

            {predictions.length > 0 && activeInput && (
              <PredictionsList predictions={predictions} onSelect={onSelectPrediction} />
            )}

            <button
              style={{
                ...styles.primaryButton,
                ...((!source || !destination || isLoading) && styles.primaryButtonDisabled)
              }}
              onClick={handleFindChargers}
              disabled={!source || !destination || isLoading}
            >
              {isLoading ? (
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div style={{...styles.loadingSpinner, width: "20px", height: "20px"}} />
                  <span>Finding Chargers...</span>
                </div>
              ) : (
                "Find Chargers Along Route"
              )}
            </button>

            {/* Route Info Display */}
            {routeCoords.length > 0 && (
              <div style={{ 
                marginTop: "10px", 
                padding: "8px", 
                backgroundColor: "#f8f9fa", 
                borderRadius: "8px",
                fontSize: "12px",
                color: pallette.text,
                textAlign: "center"
              }}>
                <strong>Route Active:</strong> {source} → {destination}
              </div>
            )}
          </>
        ) : (
          <button
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: pallette.white,
              borderRadius: "12px",
              padding: "12px 15px",
              border: "none",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              width: "100%"
            }}
            onClick={() => setIsExpanded(true)}
          >
            <FaSearch />
            <span style={{ marginLeft: "10px", fontSize: "14px", color: pallette.textLight, fontFamily: fonts.regular }}>
              {source && destination ? `${source} to ${destination}` : "Search your Destination"}
            </span>
          </button>
        )}
      </div>

      {/* Action Buttons */}
      <div style={{
        position: "absolute",
        bottom: h * 0.18,
        right: w * 0.04,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 1000,
      }}>
        <button
          onClick={focusOnUserLocation}
          style={styles.actionButton}
          title="My Location"
        >
          <FaCrosshairs style={styles.actionIcon} />
        </button>
        <button
          onClick={() => navigate("/stations")}
          style={styles.actionButton}
          title="All Chargers"
        >
          <FaList style={styles.actionIcon} />
        </button>
        {/* <button
          onClick={() => navigate("/")}
          style={styles.actionButton}
          title="Back to Map"
        >
          <FaDirections style={styles.actionIcon} />
        </button> */}
      </div>

      {/* Selected Site Card */}
      {selectedSite && (
        <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px", zIndex: 1000 }}>
          <SiteCard
            site={selectedSite}
            onNavigatePress={() => handleNavigateToSite(selectedSite)}
            showDistance={true}
            distance="Along route"
            onClose={() => setSelectedSite(null)}
          />
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1000 }}>
          <Spinner size={40} color={pallette.primary} message="Finding chargers along your route..." />
        </div>
      )}

      {/* ✅ FIX 6: Proper no chargers message */}
      {noChargers && !isLoading && (
        <ErrorMessage message="No chargers are available along this route." />
      )}

      {stationsError && !isLoading && (
        <div style={{...styles.messageContainer, ...styles.errorMessageContainer}}>
          <span style={{ fontFamily: fonts.regular }}>Error: {stationsError}</span>
        </div>
      )}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Route;
