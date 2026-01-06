import React, { useState, useEffect,useMemo} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  FaHeart, 
  FaShareAlt, 
  FaWifi, 
  FaShoppingCart, 
  FaCoffee, 
  FaTools, 
  FaToilet, 
  FaMapMarkerAlt, 
  FaArrowLeft,
  FaPhone
} from "react-icons/fa";

// 🎨 Centralized Colors and Fonts
const theme = {
  colors: {
    primary: "#0a9c31ff",
    secondary: "#4CAF50",
    accent: "#0bc840ff",
    textGray: "#666",
    textBlack: "#000",
    background: "#f0f0f0",
    white: "#fff",
    black: "#000",
    success: "#4CAF50",
    warning: "#FF9800",
    error: "#f44336",
    disabled: "#ccc",
    border: "#E0E0E0"
  },
  fonts: {
    bold: "600",
    regular: "400"
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px"
  },
  borderRadius: {
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "20px"
  }
};

// 🔝 TopTabs Component
const TopTabs = ({ tabs, activeTab, onTabChange }) => {
  const styles = {
    tabsContainer: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: theme.colors.background,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.xs,
      margin: theme.spacing.md
    },
    tab: {
      flex: 1,
      padding: `${theme.spacing.sm} ${theme.spacing.md}`,
      textAlign: "center",
      borderRadius: theme.borderRadius.sm,
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontWeight: theme.fonts.bold,
      fontSize: "14px"
    },
    activeTab: {
      backgroundColor: theme.colors.white,
      color: theme.colors.primary,
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    },
    inactiveTab: {
      backgroundColor: "transparent",
      color: theme.colors.textGray
    }
  };

  return (
    <div style={styles.tabsContainer}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          style={{
            ...styles.tab,
            ...(activeTab === index ? styles.activeTab : styles.inactiveTab)
          }}
          onClick={() => onTabChange(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

// ⚡ ConnectorCard Component
const ConnectorCard = ({ slot, connectorType, price, status, currentType, capacity, selected, onPress }) => {
  const getStatusInfo = () => {
    switch (status) {
      case "Available":
        return { 
          bgColor: "#E6F4EA", 
          textColor: theme.colors.success, 
          text: "Available", 
          headerBg: "#E6F4EA" 
        };
      case "In Use":
        return { 
          bgColor: "#FFF6E6", 
          textColor: theme.colors.warning, 
          text: "In Use", 
          headerBg: "#FFF6E6" 
        };
      case "Inoperative":
      case "Unavailable":
        return { 
          bgColor: "#F5F5F5", 
          textColor: theme.colors.textGray, 
          text: "Inactive", 
          headerBg: "#F5F5F5" 
        };
      default:
        return { 
          bgColor: "#F5F5F5", 
          textColor: theme.colors.textGray, 
          text: status, 
          headerBg: "#F5F5F5" 
        };
    }
  };

  const statusInfo = getStatusInfo();
  const isSelected = selected?.slot === slot;

  const styles = {
    connectorCard: {
      backgroundColor: theme.colors.white,
      borderRadius: theme.borderRadius.lg,
      margin: "6px 0",
      border: `1.5px solid ${isSelected ? theme.colors.success : theme.colors.border}`,
      overflow: "hidden",
      cursor: (status === "Available" || status === "In Use") ? "pointer" : "not-allowed",
      opacity: (status === "Inoperative" || status === "Unavailable") ? 0.7 : 1
    },
    headerContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: `${theme.spacing.sm} ${theme.spacing.sm}`,
      backgroundColor: isSelected ? theme.colors.success : statusInfo.headerBg
    },
    slotText: {
      fontSize: "14px",
      fontWeight: theme.fonts.bold,
      color: isSelected ? theme.colors.white : theme.colors.black
    },
    statusText: {
      fontSize: "14px",
      fontWeight: theme.fonts.bold,
      color: isSelected ? theme.colors.white : statusInfo.textColor
    },
    detailsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      borderTop: `1px solid ${theme.colors.border}`,
      padding: `${theme.spacing.sm} ${theme.spacing.xs}`
    },
    detailColumn: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    detailLabel: {
      fontSize: "12px",
      color: theme.colors.textGray,
      marginBottom: theme.spacing.xs
    },
    detailValue: {
      fontSize: "14px",
      fontWeight: theme.fonts.bold,
      color: theme.colors.black
    },
    separator: {
      width: "3px",
      height: "100%",
      backgroundColor:"#9b9f9cff",
    },
    connectorIcon: {
      width: "23px",
      height: "23px",
      marginRight: theme.spacing.sm
    }
  };

  return (
    <div
      style={styles.connectorCard}
      onClick={() => (status === "Available" || status === "In Use") && onPress()}
    >
      <div style={styles.headerContainer}>
        <span style={styles.slotText}>
          {slot}{isSelected ? " • Selected" : ""}
        </span>
        <span style={styles.statusText}>
          {statusInfo.text}
        </span>
      </div>
      
      <div style={styles.detailsContainer}>
        <div style={styles.detailColumn}>
          <img 
            src={require("../images/css2.png")}
            alt="connector" 
            style={styles.connectorIcon} 
          />
          <span style={styles.detailValue}>{connectorType}</span>
        </div>
        <div style={styles.separator} />
        <div style={styles.detailColumn}>
          <span style={styles.detailLabel}>Price</span>
          <span style={styles.detailValue}>{price}</span>
        </div>
        <div style={styles.separator} />
        <div style={styles.detailColumn}>
          <span style={styles.detailLabel}>Level</span>
          <span style={styles.detailValue}>{currentType || "AC/DC"}</span>
        </div>
        <div style={styles.separator} />
        <div style={styles.detailColumn}>
          <span style={styles.detailLabel}>Power</span>
          <span style={styles.detailValue}>{capacity || "Varies"}</span>
        </div>
      </div>
    </div>
  );
};

// Charger Tab Component
const ChargerTab = ({ name, isActive, onPress }) => {
  const styles = {
    chargerTab: {
      padding: `${theme.spacing.sm} ${theme.spacing.md}`,
      borderRadius: theme.borderRadius.xl,
      backgroundColor: theme.colors.background,
      marginRight: theme.spacing.sm,
      cursor: "pointer",
      whiteSpace: "nowrap",
      minWidth: "fit-content",
      border: "none"
    },
    chargerTabActive: {
      backgroundColor: theme.colors.primary
    },
    chargerTabText: {
      color: theme.colors.textGray,
      fontWeight: theme.fonts.bold
    },
    chargerTabTextActive: {
      color: theme.colors.white
    }
  };

  return (
    <div
      style={{
        ...styles.chargerTab,
        ...(isActive && styles.chargerTabActive)
      }}
      onClick={onPress}
    >
      <span style={{
        ...styles.chargerTabText,
        ...(isActive && styles.chargerTabTextActive)
      }}>
        {name}
      </span>
    </div>
  );
};

// Amenities Component
const AmenitiesSection = () => {
  const amenities = [
    { name: "Restrooms", icon: <FaToilet /> },
    { name: "Lounge", icon: <FaCoffee /> },
    { name: "Wi-Fi", icon: <FaWifi /> },
    { name: "Shopping", icon: <FaShoppingCart /> },
    { name: "Cafe", icon: <FaCoffee /> },
    { name: "Mechanic", icon: <FaTools /> },
  ];

  const styles = {
    amenitiesSection: {
      marginBottom: theme.spacing.lg
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: theme.fonts.bold,
      marginBottom: theme.spacing.md,
      color: theme.colors.black
    },
    amenitiesGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between"
    },
    amenityItem: {
      width: "30%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: theme.spacing.md
    },
    amenityText: {
      marginTop: theme.spacing.sm,
      fontSize: "14px",
      textAlign: "center",
      color: theme.colors.textBlack
    }
  };

  return (
    <div style={styles.amenitiesSection}>
      <div style={styles.sectionTitle}>Amenities</div>
      <div style={styles.amenitiesGrid}>
        {amenities.map((amenity, index) => (
          <div key={index} style={styles.amenityItem}>
            <div style={{ color: theme.colors.primary, fontSize: "24px" }}>
              {amenity.icon}
            </div>
            <span style={styles.amenityText}>{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Details Component
const ContactSection = ({ station }) => {
  const styles = {
    contactSection: {
      marginBottom: theme.spacing.lg
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: theme.fonts.bold,
      marginBottom: theme.spacing.md,
      color: theme.colors.black
    },
    contactItem: {
      display: "flex",
      flexDirection: "row",
      marginBottom: theme.spacing.md
    },
    contactText: {
      marginLeft: theme.spacing.sm,
      flex: 1
    },
    contactLabel: {
      fontSize: "16px",
      fontWeight: theme.fonts.bold,
      marginBottom: theme.spacing.xs,
      color: theme.colors.black
    },
    contactValue: {
      fontSize: "14px",
      color: theme.colors.textGray
    }
  };

  return (
    <div style={styles.contactSection}>
      <div style={styles.sectionTitle}>Contact Details</div>
      
      <div style={styles.contactItem}>
        <FaMapMarkerAlt style={{ color: theme.colors.primary, fontSize: "20px", marginTop: "2px" }} />
        <div style={styles.contactText}>
          <div style={styles.contactLabel}>Location</div>
          <div style={styles.contactValue}>
            {station?.locations?.[0]?.address || "Address not available"}
          </div>
        </div>
      </div>
      
      <div style={styles.contactItem}>
        <FaPhone style={{ color: theme.colors.primary, fontSize: "20px", marginTop: "2px" }} />
        <div style={styles.contactText}>
          <div style={styles.contactLabel}>Contact Details</div>
          <div style={styles.contactValue}>{station?.managerPhone || "Not available"}</div>
          <div style={styles.contactValue}>{station?.managerEmail || "Not available"}</div>
        </div>
      </div>
    </div>
  );
};

// 🚗 Main EV Charging Screen Component
const StationDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { site } = location.state || {};

  const [activeTab, setActiveTab] = useState(0);
  const [selectedCharger, setSelectedCharger] = useState(null);
  const [selectedConnector, setSelectedConnector] = useState(null);

  // Transform API data to match expected structure - CORRECTED based on your JSON
 const transformedStation = useMemo(() => site ? {
  id: site.id || site.siteId,
  name: site.name || site.siteName,
  address: site.address || (site.locations?.[0]?.address),
  image: "../images/station.png",
  coordinates: site.coordinates || {
    latitude: site.locations?.[0]?.latitude,
    longitude: site.locations?.[0]?.longitude,
  },
  available: site.available,
  totalPorts: site.totalPorts,
  power: site.power,
  current_type: site.current_type,
  price: site.price,
  chargers: site.originalData?.stations?.map((stationItem, index) => ({
    name: stationItem.stationName || `Charger ${index + 1}`,
    stationId: stationItem.stationId,
    connectors: stationItem.ports?.map((port, portIndex) => ({
      slot: `Slot ${portIndex + 1}`,
      connectorType: port.connectorType,
      price: `₹${port.billingAmount}/${port["billing units"] || "kW"}`,
      status: port.statusNotifications?.[0]?.status || "Unknown",
      currentType: port.powerType,
      capacity: `${port["power capacity"]}kW`,
      portId: port.portId,
    })) || []
  })) || [],
  managerName: site.managerName,
  managerEmail: site.managerEmail,
  managerPhone: site.managerPhone
} : null, [site]);
  useEffect(() => {
    if (transformedStation?.chargers?.length > 0) {
      setSelectedCharger(transformedStation.chargers[0]);
    }
  }, [transformedStation]);

  // Main Styles
  const styles = {
    container: {
      backgroundColor: theme.colors.white,
      minHeight: "100vh",
      paddingBottom: "120px"
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: theme.spacing.md,
      paddingTop: theme.spacing.lg,
      borderBottom: `1px solid ${theme.colors.border}`
    },
    backButton: {
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: theme.spacing.sm,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: theme.borderRadius.sm
    },
    backIcon: {
      fontSize: "18px",
      color: theme.colors.black
    },
    headerTitle: {
      fontSize: "18px",
      fontWeight: theme.fonts.bold,
      marginLeft: theme.spacing.sm,
      color: theme.colors.black
    },
    errorMessage: {
      textAlign: "center",
      padding: theme.spacing.xl,
      color: theme.colors.textGray,
      fontSize: "16px"
    },
    stationImageContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing.md
    },
    stationImage: {
      width: "100%",
      maxWidth: "400px",
      height: "200px",
      objectFit: "contain",
      borderRadius: theme.borderRadius.md
    },
    stationInfo: {
      padding: `0 ${theme.spacing.md}`
    },
    stationHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: theme.spacing.sm
    },
    stationName: {
      fontSize: "22px",
      fontWeight: theme.fonts.bold,
      color: theme.colors.black,
      margin: 0
    },
    actionIcons: {
      display: "flex",
      flexDirection: "row"
    },
    iconButton: {
      marginLeft: theme.spacing.md,
      cursor: "pointer",
      padding: theme.spacing.xs,
      borderRadius: theme.borderRadius.sm,
      transition: "background-color 0.3s ease",
      border: "none",
      background: "none"
    },
    addressContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: theme.spacing.sm
    },
    addressText: {
      fontSize: "14px",
      color: theme.colors.textGray,
      marginLeft: theme.spacing.xs
    },
    stationDetails: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing.xs,
      marginBottom: theme.spacing.md
    },
    detailRow: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing.sm
    },
    availability: {
      color: theme.colors.success,
      fontWeight: theme.fonts.bold
    },
    chargersContainer: {
      padding: theme.spacing.md
    },
    chargerTabsContainer: {
      display: "flex",
      flexDirection: "row",
      overflowX: "auto",
      marginBottom: theme.spacing.md,
      paddingBottom: theme.spacing.sm,
      gap: theme.spacing.sm
    },
    connectorsSection: {
      marginBottom: theme.spacing.md
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: theme.fonts.bold,
      marginBottom: theme.spacing.md,
      color: theme.colors.black
    },
    infoSection: {
      padding: theme.spacing.md
    },
    actionBar: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      flexDirection: "row",
      padding: theme.spacing.md,
      backgroundColor: theme.colors.white,
      borderTop: `1px solid ${theme.colors.border}`,
      boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      zIndex: 1000,
      gap: theme.spacing.sm
    },
    actionButton: {
      flex: 1,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.md,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      border: "none",
      fontSize: "16px",
      fontWeight: theme.fonts.bold,
      transition: "all 0.3s ease"
    },
    bookButton: {
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.primary}`,
      color: theme.colors.primary
    },
    connectButton: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white
    },
    disabledButton: {
      backgroundColor: theme.colors.disabled,
      borderColor: theme.colors.disabled,
      color: theme.colors.textGray,
      cursor: "not-allowed"
    }
  };

  if (!site || !transformedStation) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <button 
            onClick={() => navigate(-1)} 
            style={styles.backButton}
          >
            <FaArrowLeft style={styles.backIcon} />
          </button>
          <div style={styles.headerTitle}>Station Details</div>
        </div>
        <div style={styles.errorMessage}>No station data found</div>
      </div>
    );
  }

  const tabs = ["Chargers", "Information"];

  const handleSelectConnector = (connector) => {
    setSelectedConnector({
      ...connector,
      fullSlot: `${selectedCharger?.name} - ${connector.slot}`
    });
  };

  const openGoogleMaps = () => {
    if (transformedStation?.coordinates?.latitude && transformedStation?.coordinates?.longitude) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${transformedStation.coordinates.latitude},${transformedStation.coordinates.longitude}`;
      window.open(url, "_blank");
    } else {
      alert("Coordinates not available");
    }
  };

  const isConnectorAvailableForConnect = selectedConnector?.status === "Available";
  const isConnectorAvailableForBooking = selectedConnector && 
    (selectedConnector.status === "Available" || selectedConnector.status === "In Use");

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <button 
          onClick={() => navigate(-1)} 
          style={styles.backButton}
        >
          <FaArrowLeft style={styles.backIcon} />
        </button>
        <div style={styles.headerTitle}>Station Details</div>
      </div>
      
      {/* Station Image */}
      <div style={styles.stationImageContainer}>
        <img 
          src={require("../images/station.png")}
          alt="Charging Station" 
          style={styles.stationImage}
          onError={(e) => {
            e.target.src = "/assets/images/chargingstation.png";
          }}
        />
      </div>
      
      {/* Station Info */}
      <div style={styles.stationInfo}>
        <div style={styles.stationHeader}>
          <div style={styles.stationName}>{transformedStation.name}</div>
          <div style={styles.actionIcons}>
            <button style={styles.iconButton}>
              <FaHeart style={{ color: theme.colors.primary, fontSize: "24px" }} />
            </button>
            <button style={styles.iconButton}>
              <FaShareAlt style={{ color: theme.colors.primary, fontSize: "24px" }} />
            </button>
          </div>
        </div>
        
        <div style={styles.addressContainer}>
          <FaMapMarkerAlt style={{ color: theme.colors.textGray, fontSize: "16px" }} />
          <div style={styles.addressText}>{transformedStation.address}</div>
        </div>
        
        {/* <div style={styles.stationDetails}>
          <div style={styles.detailRow}>
            <span style={styles.availability}>
              {transformedStation.available}/{transformedStation.totalPorts} Available
            </span>
          </div>
          <div style={styles.detailRow}>
            <span>⚡ {transformedStation.power} | {transformedStation.current_type} | {transformedStation.price}</span>
          </div>
        </div> */}
      </div>
      
      {/* Main Tabs */}
      <TopTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Tab Content */}
      {activeTab === 0 ? (
        <div style={styles.chargersContainer}>
          {/* Charger Selection Tabs - HORIZONTAL SCROLL */}
          <div style={styles.chargerTabsContainer}>
            {transformedStation.chargers.map((charger, index) => (
              <ChargerTab
                key={index}
                name={charger.name}
                isActive={selectedCharger?.name === charger.name}
                onPress={() => {
                  setSelectedCharger(charger);
                  setSelectedConnector(null);
                }}
              />
            ))}
          </div>
          
          {/* Selected Charger's Connectors */}
          {selectedCharger && (
            <div style={styles.connectorsSection}>
              <div style={styles.sectionTitle}>Select a Connector for {selectedCharger.name}</div>
              <div>
                {selectedCharger.connectors?.map((connector, index) => (
                  <ConnectorCard
                    key={index}
                    slot={connector.slot}
                    connectorType={connector.connectorType}
                    price={connector.price}
                    status={connector.status}
                    currentType={connector.currentType}
                    capacity={connector.capacity}
                    selected={selectedConnector}
                    onPress={() => handleSelectConnector(connector)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div style={styles.infoSection}>
          <AmenitiesSection />
          <ContactSection station={transformedStation} />
        </div>
      )}
      
      {/* Bottom Action Buttons */}
      <div style={styles.actionBar}>
        <button
          style={{
            ...styles.actionButton,
            ...styles.connectButton,
            ...(!isConnectorAvailableForBooking && styles.disabledButton)
          }}
          onClick={() => {
            if (isConnectorAvailableForBooking) {
               const stationStr = encodeURIComponent(JSON.stringify(transformedStation));
                const connectorStr = encodeURIComponent(JSON.stringify(selectedConnector));
                const chargerStr = encodeURIComponent(JSON.stringify(selectedCharger));

                // Open native app via deep link
                window.location.href = `evya://booking?station=${stationStr}&connector=${connectorStr}&charger=${chargerStr}`;
                        // navigate("/booking", {
              //   state: {
              //     station: transformedStation,
              //     connector: selectedConnector,
              //     charger: selectedCharger
              //   }
              // });
            }
          }}
          disabled={!isConnectorAvailableForBooking}
        >
          Book
        </button>
        
        <button
          style={{
            ...styles.actionButton,
            ...styles.connectButton,
            ...(!isConnectorAvailableForConnect && styles.disabledButton)
          }}
          onClick={() => {
            if (isConnectorAvailableForConnect) {
              navigate("/connect-charger", {
                state: {
                  station: transformedStation,
                  connector: selectedConnector,
                  charger: selectedCharger
                }
              });
            }
          }}
          disabled={!isConnectorAvailableForConnect}
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default StationDetails;