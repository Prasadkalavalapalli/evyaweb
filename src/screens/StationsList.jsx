import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchStations } from '../redux/StationsSlice'; // Import the action

// Color palette
const pallette = {
  primary: "#4AAF57",
  white: "#ffffff",
  black: "#000000",
  grey: "#6c757d",
  error: "#e74c3c"
};

const StationsList = () => {
  const dispatch = useDispatch();
   const navigate = useNavigate();
  
  // Safely access Redux state
  const { stations = [], loading: stationsLoading, error: stationsError } = useSelector(
    (state) => state.stations || {}
  );

  // Fetch stations when component mounts
  // useEffect(() => {
  //   console.log('Dispatching fetchStations...');
  //   dispatch(fetchStations());
  // }, [dispatch]);

  // Debug: Log the data
  useEffect(() => {
    console.log('Stations data:', stations);
    console.log('Loading:', stationsLoading);
    console.log('Error:', stationsError);
  }, [stations, stationsLoading, stationsError]);

  const handleSiteCardPress = (site) => {
   // navigate('/station-details', { state: { station: site.originalData || site } });

    // Navigate to station details page
    console.log("Navigate to station details:", site);
  //  navigate("/stationsdetails", { state: { site } });
  //  window.location.href = `evya://stationdetails?station=${site}`;
  const encodedSite = encodeURIComponent(JSON.stringify(site));

  // Navigate using deep link
  window.location.href = `evya://stationdetails?station=${encodedSite}`;
  // window.location.href = `evya://stationdetails?station=${encodeURIComponent(site)}`;
 
  };

  const handleDirectionsPress = (site, e) => {
    e.stopPropagation(); // Prevent card click event
    if (site && site.coordinates) {
      const { latitude, longitude } = site.coordinates;
      if (latitude && longitude) {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
        window.open(url, '_blank');
      } else {
        alert("Invalid Location: Coordinates not available for this station.");
      }
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRetry = () => {
    // dispatch(fetchStations());
  };

  // Styles
  const styles = {
    container: { 
      minHeight: '100vh', 
      backgroundColor: pallette.white,
      paddingTop: '25px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px 12px 16px',
      borderBottom: '1px solid #f0f0f0',
      marginBottom: '12px'
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: pallette.black,
      margin: 0
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '4px',
      color: pallette.black
    },
    listContent: {
      padding: '0 16px'
    },
    stationCard: {
      backgroundColor: pallette.white,
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      border: '1px solid #f0f0f0',
      transition: 'transform 0.2s, box-shadow 0.2s'
    },
    stationCardHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px'
    },
    stationName: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: pallette.black,
      flex: 1,
      marginRight: '8px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    statusIndicator: {
      padding: '4px 10px',
      borderRadius: '12px',
      minWidth: 'fit-content'
    },
    statusText: {
      fontSize: '12px',
      fontWeight: '600'
    },
    stationAddress: {
      fontSize: '14px',
      color: pallette.grey,
      marginBottom: '8px',
      lineHeight: '1.4',
      minHeight: '40px'
    },
    detailsRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px',
      gap: '10px'
    },
    detailText: {
      fontSize: '12px',
      color: '#000',
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center'
    },
    connectorContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '8px'
    },
    connectorTag: {
      backgroundColor: '#F0F0F0',
      borderRadius: '6px',
      padding: '4px 8px'
    },
    connectorText: {
      fontSize: '12px',
      color: '#333',
      fontWeight: '500'
    },
    footer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    distanceContainer: {
      backgroundColor: pallette.primary,
      padding: '8px 12px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    distanceContainerHover: {
      backgroundColor: '#3a9a4a'
    },
    distance: {
      color: pallette.white,
      fontWeight: 'bold',
      marginLeft: '4px',
      fontSize: '12px'
    },
    icon: {
      width: '16px',
      height: '16px',
      filter: 'brightness(0) invert(1)'
    },
    centered: { 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      padding: '20px',
      textAlign: 'center'
    },
    loadingText: { 
      marginTop: '16px', 
      fontSize: '14px', 
      color: pallette.grey, 
      fontWeight: '500' 
    },
    errorText: { 
      marginTop: '16px', 
      fontSize: '14px', 
      color: pallette.error, 
      textAlign: 'center', 
      fontWeight: '500',
      maxWidth: '300px'
    },
    retryButton: { 
      marginTop: '20px', 
      backgroundColor: pallette.primary, 
      padding: '10px 20px', 
      borderRadius: '8px',
      border: 'none',
      color: pallette.white,
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    retryButtonHover: {
      backgroundColor: '#3a9a4a'
    },
    goBackButton: {
      marginTop: '10px', 
      backgroundColor: pallette.grey, 
      padding: '10px 20px', 
      borderRadius: '8px',
      border: 'none',
      color: pallette.white,
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    markerImage: {
          height: '18px',
      width: '18px',
      objectFit: 'contain',
      marginRight: '6px'
  },
    noResultsContainer: {
      padding: '40px 0',
      textAlign: 'center'
    },
    noResultsText: {
      fontSize: '14px',
      color: pallette.grey,
      fontWeight: '500'
    },
    spinner: {
      width: '40px',
      height: '40px',
      border: `4px solid #f3f3f3`,
      borderTop: `4px solid ${pallette.primary}`,
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }
  };

  // Hover state handlers
  const [hoverStates, setHoverStates] = React.useState({});

  const handleMouseEnter = (index) => {
    setHoverStates(prev => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setHoverStates(prev => ({ ...prev, [index]: false }));
  };

  if (stationsLoading) {
    return (
      <div style={styles.centered}>
        <div style={styles.spinner}></div>
        <div style={styles.loadingText}>
          Loading stations...
        </div>
        
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (stationsError) {
    return (
      <div style={styles.centered}>
        <div style={styles.errorText}>Error loading stations: {stationsError}</div>
        <button 
          style={styles.retryButton}
          onClick={handleRetry}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#3a9a4a'}
          onMouseLeave={(e) => e.target.style.backgroundColor = pallette.primary}
        >
          Retry Loading
        </button>
        <button 
          style={styles.goBackButton}
          onClick={handleGoBack}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#5a6268'}
          onMouseLeave={(e) => e.target.style.backgroundColor = pallette.grey}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Charging Stations</h1>
        <button 
          style={styles.closeButton}
          onClick={handleGoBack}
          title="Close"
        >
          ×
        </button>
      </div>

      <div style={styles.listContent}>
        {stations && stations.length === 0 ? (
          <div style={styles.noResultsContainer}>
            <div style={styles.noResultsText}>No charging stations found</div>
            <button 
              style={styles.retryButton}
              onClick={handleRetry}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#3a9a4a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = pallette.primary}
            >
              Try Again
            </button>
          </div>
        ) : (
          stations.map((item, index) => (
            <div 
              key={item.id?.toString() || `station-${index}`}
              style={{
                ...styles.stationCard,
                ...(hoverStates[index] && styles.stationCardHover)
              }}
              onClick={() => handleSiteCardPress(item)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div style={styles.cardHeader}>
                <div style={styles.stationName}>{item.name || 'Unnamed Station'}</div>
                <div style={{
                  ...styles.statusIndicator,
                  backgroundColor: item.available > 0 ? '#E6F4EA' : '#FFEBEB'
                }}>
                  <span style={{
                    ...styles.statusText,
                    color: item.available > 0 ? '#4CAF50' : '#F44336'
                  }}>
                    {item.available || 0}/{item.totalPorts || 0} {item.available > 0 ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>

              <div style={styles.stationAddress}>{item.address || 'Address not available'}</div>

              <div style={styles.detailsRow}>
                <span style={styles.detailText}>{item.current_type || 'N/A'}</span>
                <span style={styles.detailText}>⚡ {item.power || 'N/A'}</span>
                <span style={styles.detailText}>{item.price || 'N/A'}/kWh</span>
              </div>

              <div style={styles.footer}>
                <div style={styles.connectorContainer}>
                  {(item.connectors || []).slice(0, 3).map((conn, connIndex) => (
                    <div key={connIndex} style={styles.connectorTag}>
                      <span style={styles.connectorText}>{conn}</span>
                    </div>
                  ))}
                  {item.connectors && item.connectors.length > 3 && (
                    <div style={styles.connectorTag}>
                      <span style={styles.connectorText}>+{item.connectors.length - 3}</span>
                    </div>
                  )}
                </div>
                <div 
                  style={{
                    ...styles.distanceContainer,
                    ...(hoverStates[`dir-${index}`] && styles.distanceContainerHover)
                  }}
                  onClick={(e) => handleDirectionsPress(item, e)}
                  onMouseEnter={() => setHoverStates(prev => ({ ...prev, [`dir-${index}`]: true }))}
                  onMouseLeave={() => setHoverStates(prev => ({ ...prev, [`dir-${index}`]: false }))}
                  title="Get Directions"
                >
                   <img 
                  src={require("../images/location.png")} 
                  style={styles.markerImage}
                />
                  <span style={styles.distance}>Navigate</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StationsList;
