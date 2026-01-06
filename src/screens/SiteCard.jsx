import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SiteCard = ({ 
  site, 
  onNavigatePress, 
  showDistance = true,
  onDetailsPress,
  distance = "Navigate",
  onClose
}) => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 375,
    height: typeof window !== 'undefined' ? window.innerHeight : 667
  });

  const navigate=useNavigate();
  console.log(site);
  
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

  const w = dimensions.width;
  const h = dimensions.height;
  const adjust = (size) => size;

  // Placeholder palette and fonts
  const pallette = {
    white: "#fff",
    black: "#000",
    grey: "#666",
    primary: "#4AAF57",
    lightGray: "#f0f0f0",
    darkGray: "#333"
  };

  const styles = {
    stationCard: {
      width: '94%',
      maxWidth: '500px',
      backgroundColor: pallette.white,
      borderRadius: 15,
      padding: '12px',
      margin: `0 auto ${h * 0.02}px auto`,
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      position: 'relative',
      cursor: 'pointer',
      boxSizing: 'border-box'
    },
    cardContent: {
      paddingTop: '8px'
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
      fontSize: adjust(14),
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
      gap: '6px',
      marginBottom: '12px'
    },
    connectorTag: {
      backgroundColor: '#F0F0F0',
      borderRadius: '6px',
      padding: '6px 12px',
    },
    connectorText: {
      fontSize: adjust(12),
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'right',
       flexDirection: 'row',
      flexWrap: 'wrap',
      gap: '10px'
    },
   distanceContainer: {
  backgroundColor: pallette.primary,
  padding: '8px 12px',
  borderRadius: 10,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  minWidth: 'fit-content',
  alignSelf: 'flex-end', // This aligns the container itself to the right
  marginLeft: 'auto' // This pushes it to the right
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
    }
  };

  if (!site) return null;

  const handleNavigateToSite = (e) => {
    e.stopPropagation();
    if (!site || !site.coordinates) return;
    const { latitude, longitude } = site.coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, "_blank");

    if (onNavigatePress) {
      onNavigatePress(site);
    }
  };

  const handleCardPress = () => {
    // Navigate to station details page
    console.log("Navigate to station details:", site);
  //  navigate("/stationsdetails", { state: { site } });
  //  window.location.href = `evya://stationdetails?station=${site}`;
  //window.location.href = `evya://stationdetails?station=${encodeURIComponent(site)}`;
  const encodedSite = encodeURIComponent(JSON.stringify(site));
  window.location.href = `evya://stationdetails?station=${encodedSite}`;
  };

  return (
    <div style={styles.stationCard} onClick={handleCardPress}>
      <div style={styles.cardContent}>
        <div style={styles.cardHeader}>
          <div style={styles.stationName}>{site.siteName}</div>
          <div style={{
            ...styles.statusIndicator,
            backgroundColor: site.avaiPorts > 0 ? '#E6F4EA' : '#FFEBEB'
          }}>
            <div style={{
              ...styles.statusText,
              color: site.avaiPorts > 0 ? '#4CAF50' : '#F44336'
            }}>
              {site.avaiPorts}/{site.noOfPorts} {site.avaiPorts > 0 ? 'Available' : 'Unavailable'}
            </div>
          </div>
        </div>

        <div style={styles.stationAddress}>{site.address}</div>

        <div style={styles.detailsRow}>
           <div style={styles.detailText}>{site.current_type}</div>
          <div style={styles.detailText}>⚡ {site.capacityRange}</div>
          <div style={styles.detailText}>₹ {site.priceRange}/kWh</div>
        </div>

        <div style={styles.connectorContainer}>
          {site.connectorTypes && site.connectorTypes.slice(0, 2).map((conn, index) => (
            <div key={index} style={styles.connectorTag}>
              <div style={styles.connectorText}>{conn}</div>
            </div>
          ))}
          {site.connectorTypes && site.connectorTypes.length > 3 && (
            <div style={styles.connectorTag}>
              <div style={styles.connectorText}>+{site.connectorTypes.length - 3}</div>
            </div>
          )}

{/* <div style={styles.footer}> */}
          {showDistance && (
            <div onClick={handleNavigateToSite} style={styles.distanceContainer}>
                <img 
                  src={require("../images/location.png")} 
                style={styles.icon}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div style={styles.distance}>{distance}</div>
            </div>
          )}
          {/* </div> */}
        </div>

        
      </div>
    </div>
  );
};

export default SiteCard;
