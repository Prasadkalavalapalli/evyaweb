import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaBolt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const StationCards = ({ 
  stations, 
  currentLocation, 
  selectedStation, 
  activeCardIndex,
  onStationSelect, 
  onNavigate,
  onCardChange 
}) => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 375,
    height: typeof window !== 'undefined' ? window.innerHeight : 667
  });
  const [isVisible, setIsVisible] = useState(true);
  
  const cardsContainerRef = useRef(null);
  const isScrolling = useRef(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Handle click outside of cards
  useEffect(() => {
    const handleClickOutside = (event) => {
      const cardsWrapper = document.querySelector('.station-cards-wrapper');
      const toggleButton = document.querySelector('.cards-toggle-button');
      
      if (cardsWrapper && 
          !cardsWrapper.contains(event.target) && 
          !toggleButton?.contains(event.target) && 
          isVisible) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isVisible]);

  const w = dimensions.width;
  const h = dimensions.height;
  const adjust = (size) => size;

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
    if (!station.available || station.available === 0) return '#F44336';
    if (station.available / station.totalPorts < 0.3) return '#ff9800';
    return '#4CAF50';
  };

  // Handle card scroll
  const handleCardScroll = useCallback((direction) => {
    if (stations.length === 0 || isScrolling.current) return;
    
    isScrolling.current = true;
    let newIndex;
    if (direction === 'next') {
      newIndex = activeCardIndex === stations.length - 1 ? 0 : activeCardIndex + 1;
    } else {
      newIndex = activeCardIndex === 0 ? stations.length - 1 : activeCardIndex - 1;
    }
    
    if (onCardChange) {
      onCardChange(direction);
    } else {
      const station = stations[newIndex];
      onStationSelect(station, newIndex);
    }
    
    setTimeout(() => {
      isScrolling.current = false;
    }, 300);
  }, [stations, activeCardIndex, onStationSelect, onCardChange]);

  // Handle touch events for swiping
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleCardScroll('next');
    } else if (isRightSwipe) {
      handleCardScroll('prev');
    }
    
    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Handle wheel scroll
  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (e.deltaY > 0) {
          handleCardScroll('next');
        } else {
          handleCardScroll('prev');
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [handleCardScroll]);

  // Handle card click
  const handleCardClick = (station, index) => {
    onStationSelect(station, index);
    
    // Navigate to station details
    const encodedSite = encodeURIComponent(JSON.stringify(station));
    window.location.href = `evya://stationdetails?station=${encodedSite}`;
  };

  // Handle navigate button
  const handleNavigate = (station, e) => {
    e.stopPropagation();
    const lat = station.coordinates?.latitude || station.latitude || station.lat;
    const lng = station.coordinates?.longitude || station.longitude || station.lng;
    if (lat && lng) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
      window.open(url, "_blank");
    }
    if (onNavigate) {
      onNavigate(station);
    }
  };

  // Toggle cards visibility
  const toggleCardsVisibility = (e) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  // Placeholder palette and fonts (same as SiteCard)
  const pallette = {
    white: "#fff",
    black: "#000",
    grey: "#666",
    primary: "#4AAF57",
    lightGray: "#f0f0f0",
    darkGray: "#333",
    lightGreen:"rgba(200, 248, 200, 0.53)"
  };

  // Styles
  const styles = {
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
    carouselContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '0 4px',
    },
    cardsContainer: {
      display: 'flex',
      overflow: 'hidden',
      gap: '12px',
      padding: '8px 4px',
      maxWidth: '100%',
      justifyContent: 'center',
    },
    stationCard: {
      width: '94%',
      maxWidth: '500px',
      minWidth: '310px',
      backgroundColor: pallette.white,
      borderRadius: 15,
      padding: '12px',
      margin: `0 auto ${h * 0.01}px auto`,
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      position: 'relative',
      cursor: 'pointer',
      boxSizing: 'border-box',
      flexShrink: 0,
    },
    cardContent: {
      paddingTop: '2px'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    stationName: {
      fontSize: adjust(16),
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
      color: pallette.black,
      flex: 1,
      marginRight: '8px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    statusIndicator: {
      padding: '6px 12px',
      borderRadius: '12px',
      minWidth: 'fit-content'
    },
    statusText: {
      fontSize: adjust(12),
      fontFamily: 'Arial, sans-serif',
      fontWeight: '600'
    },
    stationAddress: {
      fontSize: adjust(12),
      color: pallette.grey,
      margin: '8px 0',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      lineHeight: '1.4'
    },
    detailsRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '12px',
      padding: '5px 0',
      flexWrap: 'wrap',
      gap: '8px'
    },
    detailText: {
      fontSize: adjust(13),
      color: '#000',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold'
    },
    connectorContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      alignItems: 'center',
    },
    connectorTag: {
      backgroundColor: pallette.lightGreen,
      borderRadius: '6px',
      padding: '6px 12px',
    },
    connectorText: {
      fontSize: adjust(12),
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
    },
    distanceContainer: {
      backgroundColor: pallette.primary,
      padding: '8px 12px',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      minWidth: 'fit-content',
      alignSelf: 'flex-end',
      marginLeft: 'auto'
    },
    distance: {
      color: pallette.white,
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
      fontSize: adjust(13)
    },
    icon: {
      height: '18px',
      width: '18px',
      objectFit: 'contain',
      marginRight: '6px'
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
      fontSize: '14px',
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
      fontSize: '14px',
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

  if (!isVisible) {
    return (
      <button 
        className="cards-toggle-button"
        style={styles.toggleButton}
        onClick={toggleCardsVisibility}
      >
         <FaBolt />
      </button>
    );
  }

  return (
    <div className="station-cards-wrapper" style={styles.cardsWrapper}>
      <div style={styles.carouselContainer}>
        {stations.length > 1 && (
          <button 
            style={styles.navArrowLeft}
            onClick={() => handleCardScroll('prev')}
          >
            <FaChevronLeft />
          </button>
        )}

        <div 
          style={styles.cardsContainer}
          ref={cardsContainerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {stations.map((station, index) => {
            const lat = station.coordinates?.latitude || station.latitude || station.lat;
            const lng = station.coordinates?.longitude || station.longitude || station.lng;
            const distance = lat && lng && currentLocation 
              ? calculateDistance(currentLocation.lat, currentLocation.lng, lat, lng) + " KM" 
              : "Navigate";
            
            const isActive = selectedStation?.id === station.id || index === activeCardIndex;
            const availabilityColor = getAvailabilityColor(station);
            const statusBgColor = station.available > 0 ? '#E6F4EA' : '#FFEBEB';
            const statusTextColor = station.available > 0 ? '#4CAF50' : '#F44336';
            
            return (
              <div
                key={station.id || index}
                style={{
                  ...styles.stationCard,
                  border: isActive ? `2px solid ${availabilityColor}` : 'none',
                  transform: isActive ? 'translateY(-4px)' : 'none',
                  display: index === activeCardIndex ? 'block' : 'none',
                }}
                onClick={() => handleCardClick(station, index)}
              >
                <div style={styles.cardContent}>
                  <div style={styles.cardHeader}>
                    <div style={styles.stationName}>
                      {station.name}
                    </div>
                    <div style={{
                      ...styles.statusIndicator,
                      backgroundColor: statusBgColor
                    }}>
                      <div style={{
                        ...styles.statusText,
                        color: statusTextColor
                      }}>
                        {station.available || 0}/{station.totalPorts || 0} {station.available > 0 ? 'Available' : 'Unavailable'}
                      </div>
                    </div>
                  </div>

                  <div style={styles.stationAddress}>
                    {station.address}
                  </div>

                  <div style={styles.detailsRow}>
                    <div style={styles.detailText}>
                      {station.current_type }
                    </div>
                    <div style={styles.detailText}>
                      ⚡ {station.power || station.capacityRange}
                    </div>
                    <div style={styles.detailText}>
                     ₹ {station.price || station.priceRange}/kWh
                    </div>
                  </div>

                  <div style={styles.connectorContainer}>
                    {/* Use connectorTypes from API response */}
                    {station.connectorTypes && station.connectorTypes.slice(0, 2).map((conn, idx) => (
                      <div key={idx} style={styles.connectorTag}>
                        <div style={styles.connectorText}>{conn}</div>
                      </div>
                    ))}
                    {station.connectorTypes && station.connectorTypes.length > 2 && (
                      <div style={styles.connectorTag}>
                        <div style={styles.connectorText}>+{station.connectorTypes.length - 2}</div>
                      </div>
                    )}

                    <div onClick={(e) => handleNavigate(station, e)} style={styles.distanceContainer}>
                      <img 
                        src={require("../../images/location.png")}
                        style={styles.icon}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                        alt="Location"
                      />
                      <div style={styles.distance}>{distance}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {stations.length > 1 && (
          <button 
            style={styles.navArrowRight}
            onClick={() => handleCardScroll('next')}
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default StationCards;