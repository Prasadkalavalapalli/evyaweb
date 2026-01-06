import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup, useMap, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaCrosshairs, FaList, FaDirections, FaTimes, FaSearch, FaMapMarkerAlt, FaBolt, FaRupeeSign, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { fetchStations } from '../redux/StationsSlice';
import Spinner from '../helpers/Spinner';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../helpers/ErrorMessage';

// Fix leaflet marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

const pallette = {
  primary: "#4AAF57",
  white: "#fff",
  black: "#000",
  grey: "#666",
  error: "#e74c3c",
  l1: "#4CAF50",
  red: "#F44336",
  lightRed: "#FFEBEB",
  lightGreen: "#E6F4EA",
  blue: "#4285F4",
  lightBlue: "#e3f2fd",
  darkBlue: "#1976d2",
  orange: "#ff9800"
};

// Custom icon for stations
const createStationIcon = (site, isSelected = false) => {
  const name = (site.managerName || "").toLowerCase();
  let logo = require("../images/chargermark.png");
  if (name.includes("bpcl")) logo = require("../images/bpcl.png");
  else if (name.includes("hpcl")) logo = require("../images/hpcl.png");
  else if (name.includes("iocl") || name.includes("indian oil")) logo = require("../images/incl.png");
  const isAvailable = site.available > 0;
  const badgeColor = isAvailable ? pallette.l1 : pallette.red;
  const badgeBg = isAvailable ? pallette.lightGreen : pallette.lightRed;

  return L.divIcon({
    html: `
      <div style="position: relative; cursor: pointer; width: 20px; height: 40px;">
        <img 
          src="${logo}" 
          alt="EV Station" 
          style="width: 100%; height: 100%; object-fit: contain; ${isSelected ? 'filter: drop-shadow(0 0 8px rgba(74, 175, 87, 0.8))' : ''}" 
        />
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
          background-color: ${badgeBg};
          transform: translate(30%, -30%);
          z-index: 1000;
        ">
          <span style="
            font-size: 10px;
            font-weight: bold;
            font-family: Arial, sans-serif;
            color: ${badgeColor};
          ">
            ${site.available || 0}/${site.totalPorts || 0}
          </span>
        </div>
        ${isSelected ? `
          <div style="
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border: 3px solid ${pallette.primary};
            border-radius: 50%;
            animation: pulse 2s infinite;
          "></div>
        ` : ''}
      </div>
    `,
    className: "custom-marker",
    iconSize: [40, 60],
    iconAnchor: [20, 60],
  });
};

// Map controller for smooth transitions
const MapController = ({ center, zoom, shouldFly }) => {
  const map = useMap();
  useEffect(() => {
    if (center && shouldFly) {
      map.flyTo(center, zoom, { duration: 1.0 });
    }
  }, [center, zoom, shouldFly, map]);
  return null;
};

// Fit bounds to show all markers
const FitBounds = ({ sites, currentLocation, shouldFit }) => {
  const map = useMap();
  useEffect(() => {
    if (!map || !shouldFit || sites.length === 0) return;
    
    const bounds = L.latLngBounds([]);
    if (currentLocation) bounds.extend([currentLocation.lat, currentLocation.lng]);
    
    sites.forEach(site => {
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
  const [hoveredStation, setHoveredStation] = useState(null);
  const [flyToLocation, setFlyToLocation] = useState(null);
  const [flyToZoom, setFlyToZoom] = useState(14);
  const [shouldFly, setShouldFly] = useState(false);
  const [shouldFitBounds, setShouldFitBounds] = useState(true);
  const [isTrackingUser, setIsTrackingUser] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
  const mapRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  // Mock station data for demo
  const mockStations = [
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
    },
    {
      id: '2',
      name: 'HPCL EV Charger',
      address: 'Karol Bagh, Delhi',
      coordinates: { latitude: 28.6510, longitude: 77.1905 },
      available: 2,
      totalPorts: 4,
      power: '30kW',
      price: '11',
      current_type: 'AC',
      connectors: ['Type 2', 'GB/T'],
      managerName: 'HPCL'
    },
    {
      id: '3',
      name: 'Indian Oil Charging Hub',
      address: 'Dwarka Sector 14, Delhi',
      coordinates: { latitude: 28.5845, longitude: 77.0588 },
      available: 4,
      totalPorts: 8,
      power: '120kW',
      price: '13',
      current_type: 'DC Fast',
      connectors: ['CCS2', 'CHAdeMO', 'Type 2', 'GB/T'],
      managerName: 'IOCL'
    },
    {
      id: '4',
      name: 'EV Charging Point',
      address: 'Saket, Delhi',
      coordinates: { latitude: 28.5275, longitude: 77.2190 },
      available: 1,
      totalPorts: 2,
      power: '22kW',
      price: '10',
      current_type: 'AC',
      connectors: ['Type 2'],
      managerName: 'Generic'
    }
  ];

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
    return (R * c).toFixed(1);
  };

  // Get availability color
  const getAvailabilityColor = (station) => {
    if (!station.available || station.available === 0) return pallette.red;
    if (station.available / station.totalPorts < 0.3) return pallette.orange;
    return pallette.l1;
  };

  // Handle marker click
  const handleMarkerClick = useCallback((station) => {
    setSelectedStation(station);
    
    const lat = station.coordinates?.latitude || station.latitude || station.lat;
    const lng = station.coordinates?.longitude || station.longitude || station.lng;
    
    if (lat && lng) {
      setFlyToLocation([lat, lng]);
      setFlyToZoom(16);
      setShouldFly(true);
      
      // Find station index and scroll to card
      const displayStations = sites.length > 0 ? sites : mockStations;
      const index = displayStations.findIndex(s => 
        s.id === station.id || 
        (s.coordinates?.latitude === lat && s.coordinates?.longitude === lng)
      );
      if (index !== -1) {
        setActiveCardIndex(index);
        scrollToCard(index);
      }
    }
  }, [sites]);

  // Handle card click
  const handleCardClick = useCallback((station, index) => {
    setSelectedStation(station);
    setActiveCardIndex(index);
    
    const lat = station.coordinates?.latitude || station.latitude || station.lat;
    const lng = station.coordinates?.longitude || station.longitude || station.lng;
    
    if (lat && lng) {
      setFlyToLocation([lat, lng]);
      setFlyToZoom(16);
      setShouldFly(true);
    }
  }, []);

  // Scroll to specific card
  const scrollToCard = useCallback((index) => {
    if (cardsContainerRef.current && !isScrolling.current) {
      isScrolling.current = true;
      const cards = cardsContainerRef.current.children;
      if (cards && cards[index]) {
        const card = cards[index];
        const container = cardsContainerRef.current;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const containerWidth = container.offsetWidth;
        
        // Calculate scroll position to center the card
        const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
        
        setActiveCardIndex(index);
        
        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrolling.current = false;
        }, 300);
      }
    }
  }, []);

  // Handle card scroll via indicators or navigation
  const handleCardScroll = useCallback((direction) => {
    const displayStations = sites.length > 0 ? sites : mockStations;
    if (displayStations.length === 0) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = activeCardIndex === displayStations.length - 1 ? 0 : activeCardIndex + 1;
    } else {
      newIndex = activeCardIndex === 0 ? displayStations.length - 1 : activeCardIndex - 1;
    }
    
    const station = displayStations[newIndex];
    setSelectedStation(station);
    setActiveCardIndex(newIndex);
    
    const lat = station.coordinates?.latitude || station.latitude || station.lat;
    const lng = station.coordinates?.longitude || station.longitude || station.lng;
    
    if (lat && lng) {
      setFlyToLocation([lat, lng]);
      setFlyToZoom(15);
      setShouldFly(true);
    }
    
    scrollToCard(newIndex);
  }, [sites, activeCardIndex, scrollToCard]);

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

  // Navigate to station
  const handleNavigate = useCallback((station) => {
    if (station) {
      const lat = station.coordinates?.latitude || station.latitude || station.lat;
      const lng = station.coordinates?.longitude || station.longitude || station.lng;
      if (lat && lng) {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
        window.open(url, '_blank');
      }
    }
  }, []);

  // Handle search
  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      // Filter stations based on search query
      const filtered = mockStations.filter(station => 
        station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        station.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        station.managerName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (filtered.length > 0) {
        const firstStation = filtered[0];
        const lat = firstStation.coordinates?.latitude || firstStation.latitude || firstStation.lat;
        const lng = firstStation.coordinates?.longitude || firstStation.longitude || firstStation.lng;
        
        if (lat && lng) {
          setFlyToLocation([lat, lng]);
          setFlyToZoom(14);
          setShouldFly(true);
          handleMarkerClick(firstStation);
        }
      }
    }
  };

  // Handle map click (clear selection)
  const handleMapClick = (e) => {
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
      setSelectedStation(null);
    }
  };

  // Handle scroll event to detect which card is in view
  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    scrollTimeout.current = setTimeout(() => {
      if (!cardsContainerRef.current || isScrolling.current) return;
      
      const container = cardsContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const cards = container.children;
      
      // Find the card that's closest to the center
      let closestCardIndex = 0;
      let minDistance = Infinity;
      
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        const cardCenter = cardLeft + (cardWidth / 2);
        const containerCenter = scrollLeft + (containerWidth / 2);
        const distance = Math.abs(cardCenter - containerCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestCardIndex = i;
        }
      }
      
      if (closestCardIndex !== activeCardIndex) {
        const displayStations = sites.length > 0 ? sites : mockStations;
        if (closestCardIndex < displayStations.length) {
          const station = displayStations[closestCardIndex];
          setSelectedStation(station);
          setActiveCardIndex(closestCardIndex);
          
          const lat = station.coordinates?.latitude || station.latitude || station.lat;
          const lng = station.coordinates?.longitude || station.longitude || station.lng;
          
          if (lat && lng) {
            setFlyToLocation([lat, lng]);
            setFlyToZoom(15);
            setShouldFly(true);
          }
        }
      }
    }, 150);
  }, [sites, activeCardIndex]);

  // Initialize scroll event listener
  useEffect(() => {
    const container = cardsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  // Handle wheel scroll on cards container
  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY * 0.5;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const handleSiteCardPress = (site) => {
    const encodedSite = encodeURIComponent(JSON.stringify(site));
    window.location.href = `evya://stationdetails?station=${encodedSite}`;
  };

  // Display stations (use mock data if Redux is empty)
  const displayStations = sites.length > 0 ? sites : mockStations;
  
  // Filter stations with valid coordinates
  const stationsWithCoordinates = displayStations.filter(station => {
    const lat = station.coordinates?.latitude || station.latitude || station.lat;
    const lng = station.coordinates?.longitude || station.longitude || station.lng;
    return lat && lng;
  });

  // Calculate distance for each station
  const stationsWithDistance = useMemo(() => {
    return stationsWithCoordinates.map(station => {
      const lat = station.coordinates?.latitude || station.latitude || station.lat;
      const lng = station.coordinates?.longitude || station.longitude || station.lng;
      const distance = lat && lng && currentLocation 
        ? calculateDistance(currentLocation.lat, currentLocation.lng, lat, lng) 
        : null;
      
      return {
        ...station,
        distance
      };
    });
  }, [stationsWithCoordinates, currentLocation]);

  if (!currentLocation) {
    return (
      <div style={styles.loadingContainer}>
        <Spinner size={80} color={pallette.primary} message="Getting your location..." />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Map Container - Full Screen */}
        <div style={styles.innerContainer}>
      <div style={styles.mapContainer}>
        <MapContainer
          center={[currentLocation.lat, currentLocation.lng]}
          zoom={14}
          style={styles.map}
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
              color: pallette.blue, 
              fillColor: pallette.blue, 
              fillOpacity: 0.8, 
              weight: 2 
            }}
          >
            <Popup>Your Current Location</Popup>
          </CircleMarker>

          {/* Station Markers */}
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
                    handleMarkerClick(station);
                  },
                }}
              >
                <Popup>
                  <div style={{ minWidth: '150px', padding: '8px' }}>
                    <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px' }}>
                      {station.name || 'Charging Station'}
                    </div>
                    <div style={{ fontSize: '12px', color: pallette.grey, marginBottom: '6px' }}>
                      {station.available || 0}/{station.totalPorts || 0} ports available
                    </div>
                    {station.address && (
                      <div style={{ fontSize: '11px', color: pallette.grey }}>
                        {station.address.substring(0, 60)}...
                      </div>
                    )}
                  </div>
                </Popup>
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
        <div style={styles.actionButtons}>
          <button
            style={styles.actionButton}
            onClick={centerOnUser}
            disabled={isTrackingUser}
            title="Center on my location"
          >
            {isTrackingUser ? (
              <div style={styles.smallSpinner} />
            ) : (
              <FaCrosshairs style={styles.actionIcon} />
            )}
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
            <FaDirections style={{
              ...styles.actionIcon,
              opacity: selectedStation ? 1 : 0.5
            }} />
          </button>
        </div>
      </div>
      </div>

      {/* Stations Cards Carousel */}
      {stationsWithCoordinates.length > 0 && (
        <div style={styles.cardsWrapper}>
          {/* <div style={styles.cardsHeader}>
            <div style={{fontSize: '14px', fontWeight: 'bold'}}>
              🔌 Nearby Charging Stations
            </div>
            <div style={{fontSize: '11px', color: pallette.grey}}>
              {stationsWithCoordinates.length} stations 
            </div>
          </div> */}
          
          <div style={styles.carouselContainer}>
            {/* Left Navigation Arrow */}
            {stationsWithCoordinates.length > 1 && (
              <button 
                style={styles.navArrowLeft}
                onClick={() => handleCardScroll('prev')}
              >
                <FaChevronLeft />
              </button>
            )}

            {/* Cards Container */}
            <div 
              style={styles.cardsContainer}
              ref={cardsContainerRef}
              className="cards-container"
            >
              {stationsWithDistance.map((station, index) => {
                const isActive = index === activeCardIndex;
                const isHovered = hoveredStation?.id === station.id;
                const availabilityColor = getAvailabilityColor(station);
                
                return (
                  <div
                    key={station.id || index}
                    style={{
                      ...styles.stationCard,
                      borderColor: isActive ? availabilityColor : 'transparent',
                      transform: isActive ? 'translateY(-4px)' : 'none',
                      boxShadow: isActive 
                        ? `0 8px 32px rgba(33, 150, 243, 0.3)`
                        : isHovered
                        ? '0 8px 24px rgba(0, 0, 0, 0.2)'
                        : '0 4px 16px rgba(0, 0, 0, 0.1)',
                      borderWidth: isActive ? '2px' : '0'
                    }}
                    onClick={() => handleSiteCardPress(station)}
                    onMouseEnter={() => setHoveredStation(station)}
                    onMouseLeave={() => setHoveredStation(null)}
                  >
                    {/* Card Header */}
                    <div style={styles.cardHeader}>
                      <div style={styles.stationName}>
                         {station.name}
                      </div>
                      <div style={{
                        ...styles.statusBadge,
                        backgroundColor: availabilityColor + '20',
                        color: availabilityColor,
                        border: isActive ? `2px solid ${availabilityColor}` : 'none'
                      }}>
                        {station.available || 0}/{station.totalPorts || 0}
                      </div>
                    </div>

                    {/* Address */}
                    <div style={{
                      fontSize: '12px',
                      color: pallette.grey,
                      marginBottom: '2px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: 'flex',
                      alignItems: 'flex-start',
                      minHeight: '32px'
                    }}>
                      <FaMapMarkerAlt style={{ fontSize: '11px', marginRight: '5px',  flexShrink: 0 }} />
                      <span style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}>
                        {station.address}
                      </span>
                    </div>

                    {/* Details */}
                    <div style={styles.detailsRow}>
                      <div style={styles.detailItem}>
                        <div style={styles.detailLabel}>Type</div>
                        <div style={styles.detailValue}>
                          {station.current_type || 'DC/AC'}
                        </div>
                      </div>
                      <div style={styles.detailItem}>
                        <div style={styles.detailLabel}>Power</div>
                        <div style={styles.detailValue}>
                          <FaBolt style={styles.detailIcon} />
                          {station.power || '50kW'}
                        </div>
                      </div>
                      <div style={styles.detailItem}>
                        <div style={styles.detailLabel}>Price</div>
                        <div style={styles.detailValue}>
                          <FaRupeeSign style={styles.detailIcon} />
                          {station.price || '12'}/kWh
                        </div>
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                      gap: '12px',
                      marginTop: '8px',
                    }}>
                      {/* Connectors */}
                      {station.connectors && station.connectors.length > 0 && (
                        <div style={{flex: 1, minWidth: 0}}>
                         
                          <div style={{display: 'flex', gap: '3px', flexWrap: 'wrap'}}>
                            {station.connectors.slice(0, 2).map((connector, idx) => (
                              <div
                                key={idx}
                                style={{
                                  backgroundColor: pallette.lightGreen,
                                  color: pallette.primary,
                                  padding: '1px 6px',
                                  borderRadius: '8px',
                                  fontSize: '14x'
                                }}
                              >
                                {connector}
                              </div>
                            ))}
                            {station.connectors.length > 2 && (
                              <div style={{
                                backgroundColor: '#f5f5f5',
                                color: pallette.grey,
                                padding: '1px 6px',
                                borderRadius: '8px',
                                fontSize: '10px'
                              }}>
                                +{station.connectors.length - 2}
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigate(station);
                        }}
                        style={{
                          backgroundColor: availabilityColor,
                          color: pallette.white,
                          border: 'none',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          transition: 'all 0.2s ease',
                          flexShrink: 0,
                          minWidth: '110px',
                          height: '36px',
                        }}
                      >
                        <FaDirections style={{ fontSize: '11px' }} />
                        Navigate
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Navigation Arrow */}
            {stationsWithCoordinates.length > 1 && (
              <button 
                style={styles.navArrowRight}
                onClick={() => handleCardScroll('next')}
              >
                <FaChevronRight />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '90vh',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    margin: 10,
    borderRadius: 20,
    backgroundColor: pallette.white,
    boxSizing: 'border-box',
    zIndex: 1,
  },
  
  // If the map shows white corners, add this inner wrapper
innerContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 20, // Match container radius
    overflow: 'hidden', // Hide map overflow
    backgroundColor: pallette.white,
  },
  
  // For the map itself
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '95%',
    height: '100%',
    borderRadius: 20, // Round the map corners too
    overflow: 'hidden', // Important: hide map overflow
    backgroundColor: pallette.white,
  },

  
  // Map style
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 20, // Ensure map corners are rounded
  },
  
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: pallette.white,
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
  
  smallSpinner: {
    width: '20px',
    height: '20px',
    border: '2px solid #f3f3f3',
    borderTop: `2px solid ${pallette.primary}`,
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
    transition: 'all 0.2s ease',
  },
  
  actionButtons: {
    position: 'absolute',
    top: '10%',
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
    width: '52px',
    height: '52px',
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
  
  cardsWrapper: {
    position: 'absolute',
    bottom: '16px',
    left: 0,
    right: 0,
    zIndex: 2000,
    padding: '0 12px',
    maxWidth: '100vw',
    overflow: 'hidden',
  },
  
  cardsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    padding: '12px 16px',
    background: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(15px)',
    borderRadius: '10px',
    margin: '0 4px 12px 4px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  
  carouselContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '0 4px',
  },
  
  cardsContainer: {
    display: 'flex',
    overflowX: 'auto',
    gap: '12px',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    padding: '8px 4px',
    scrollSnapType: 'x mandatory',
    maxWidth: '100%',
  },
  
  stationCard: {
      width: '94%',
      maxWidth: '500px',
      backgroundColor: pallette.white,
      borderRadius: 15,
      padding: '12px',
      margin: `0 auto auto`,
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      position: 'relative',
      cursor: 'pointer',
      boxSizing: 'border-box'
    },
  
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10px',
  },
  
  stationName: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: pallette.black,
    flex: 1,
    marginRight: '6px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    lineHeight: '1.3',
  },
  
  statusBadge: {
    padding: '3px 6px',
    borderRadius: '10px',
    fontSize: '11px',
    fontWeight: 'bold',
    minWidth: '50px',
    textAlign: 'center',
  },
  
  stationAddress: {
    fontSize: '12px',
    color: pallette.grey,
    // marginBottom: '12px',
    display: 'flex',
    alignItems: 'flex-start',
    lineHeight: '1.3',
    // minHeight: '32px',
  },
  
  addressIcon: {
    fontSize: '11px',
    marginRight: '5px',
    marginTop: '2px',
    flexShrink: 0
  },
  
  distanceBadge: {
    backgroundColor: pallette.lightBlue,
    color: pallette.darkBlue,
    padding: '3px 6px',
    borderRadius: '6px',
    fontSize: '10px',
    fontWeight: '500',
    marginBottom: '8px',
    display: 'inline-block'
  },
  
  detailsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    gap: '6px'
  },
  
  detailItem: {
    flex: 1,
    textAlign: 'center',
    minWidth: '0',
  },
  
  detailLabel: {
    fontSize: '10px',
    color: pallette.grey,
    marginBottom: '2px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  
  detailValue: {
    fontSize: '12px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  
  detailIcon: {
    fontSize: '10px',
    marginRight: '3px'
  },
  
  connectorsContainer: {
    marginBottom: '12px'
  },
  
  connectorsLabel: {
    fontSize: '11px',
    color: pallette.grey,
    marginBottom: '3px'
  },
  
  connectorsList: {
    display: 'flex',
    gap: '3px',
    flexWrap: 'wrap'
  },
  
  connectorTag: {
    backgroundColor: pallette.lightBlue,
    color: pallette.darkBlue,
    padding: '1px 6px',
    borderRadius: '8px',
    fontSize: '10px'
  },
  
  moreConnectors: {
    backgroundColor: '#f5f5f5',
    color: pallette.grey,
    padding: '1px 6px',
    borderRadius: '8px',
    fontSize: '10px'
  },
  
  navigateButton: {
    width: '100%',
    color: pallette.white,
    border: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontSize: '12px',
    fontWeight: 'bold',
    transition: 'all 0.2s ease'
  },
  
  navArrowLeft: {
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    fontSize: '14px'
  },
  
  navArrowRight: {
    position: 'absolute',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    fontSize: '14px'
  },
  
  scrollIndicators: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '12px',
    gap: '6px'
  },
  
  scrollIndicator: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: pallette.grey,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }
};

// Add global styles
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .cards-container::-webkit-scrollbar {
    display: none;
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @media (max-width: 768px) {
    .stationCard {
      flex: 0 0 260px !important;
      min-height: 200px !important;
      padding: 12px !important;
    }
    
    .cardsWrapper {
      padding: 0 8px !important;
    }
    
    .cardsHeader {
      padding: 10px 14px !important;
      font-size: 13px !important;
    }
    
    .actionButton {
      width: 48px !important;
      height: 48px !important;
    }
    
    .navArrowLeft, .navArrowRight {
      width: 32px !important;
      height: 32px !important;
      font-size: 12px !important;
    }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @media (max-width: 480px) {
    .stationCard {
      flex: 0 0 240px !important;
      min-height: 180px !important;
      padding: 10px !important;
    }
    
    .stationName {
      font-size: 13px !important;
    }
    
    .cardsHeader div:first-child {
      font-size: 13px !important;
    }
    
    .cardsHeader div:last-child {
      font-size: 10px !important;
    }
  }
`, styleSheet.cssRules.length);

export default MapSection;