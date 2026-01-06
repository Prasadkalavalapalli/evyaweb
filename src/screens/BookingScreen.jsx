import React, { useState, useRef, useEffect } from 'react';
import { 
  FaArrowLeft, 
  FaMapMarkerAlt, 
  FaCheckCircle,
  FaClock,
  FaCalendarAlt,
  FaMapPin,
  FaPlug,
  FaBolt,
  FaMoneyBillWave,
  FaChargingStation
} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
// import BookingSuccessPopup from './BookingSuccessPopup';

// 🎨 Centralized Colors and Fonts (same as previous)
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
    border: "#E0E0E0",
    lightgrey: "#f8f9fa"
  },
  fonts: {
    bold: "600",
    regular: "400",
    medium: "500",
    semibold: "600"
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

const BookingScreen = () => {
//   const { state } = location || {};
//   console.log(state);
const location = useLocation();
  const navigate = useNavigate();
console.log(location);
  const { station, connector, charger } = location.state;
  console.log(station,connector,charger);
  
  const siteName = station?.name || 'Unknown Site';
  const connectorName = connector?.fullSlot || 'Connector details not available';
  const address = station?.address || 'Address not available';
  const connectorType = connector?.connectorType || 'Unknown';
  const powerCapacity = connector?.capacity || 'Unknown';
  const price = connector?.price || '₹0/kWh';
  const portId = connector?.portId || null;

  const [selectedSlots, setSelectedSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false); 
  const [bookingData, setBookingData] = useState(null);
  const scrollRef = useRef(null);

  // Generate time slots from 6:00 AM to 10:00 PM in 15-minute intervals
  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 6; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const period = hour >= 12 ? 'pm' : 'am';
        const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
        times.push(
          `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`
        );
      }
    }
    return times;
  };

  const times = generateTimeSlots();

  // Convert timestamp to time string
  const timestampToTimeString = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'pm' : 'am';
    const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHour}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        setLoading(true);
        
        // Mock response
        const mockResponse = {
          portId: 213,
          reservations: [
            { startTime: 1753879597000, endTime: 1753883197000 }, 
            { startTime: 1753886400000, endTime: 1753890000000 }, 
            { startTime: 1753893600000, endTime: 1753897200000 }, 
            { startTime: 1753894500000, endTime: 1753898100000 }, 
            { startTime: 1753895400000, endTime: 1753899000000 }, 
          ]
        };

        const booked = mockResponse.reservations.flatMap(res => {
          const start = new Date(res.startTime);
          const end = new Date(res.endTime);
          const slots = [];
          
          let current = new Date(start);
          while (current < end) {
            const hours = current.getHours();
            const minutes = current.getMinutes();
            const period = hours >= 12 ? 'pm' : 'am';
            const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
            const timeString = `${displayHour}:${minutes.toString().padStart(2, '0')} ${period}`;
            slots.push(timeString);
            current.setMinutes(current.getMinutes() + 15);
          }
          return slots;
        });

        setBookedSlots(booked);

        // Auto-scroll
        setTimeout(() => {
          const nineAMIndex = times.findIndex(time => time === '9:00 am');
          if (nineAMIndex !== -1 && scrollRef.current) {
            const row = Math.floor(nineAMIndex / 4);
            const scrollToY = row * 60;
            scrollRef.current.scrollTo({ top: scrollToY, behavior: 'smooth' });
          }
        }, 100);

      } catch (error) {
        console.error('Error fetching booked slots:', error);
        alert('Failed to load availability data');
      } finally {
        setLoading(false);
      }
    };

    fetchBookedSlots();
  }, [portId]);

  const convertToMinutes = (time) => {
    const [hm, ampm] = time.split(' ');
    let [hours, minutes] = hm.split(':').map(Number);
    if (ampm === 'pm' && hours !== 12) hours += 12;
    if (ampm === 'am' && hours === 12) hours = 0;
    return hours * 60 + minutes;
  };

  const convertToTimeString = (minutes) => {
    let hours = Math.floor(minutes / 60);
    let mins = minutes % 60;
    let ampm = 'am';
    if (hours >= 12) {
      ampm = 'pm';
      if (hours > 12) hours -= 12;
    }
    if (hours === 0) hours = 12;
    return `${hours}:${mins.toString().padStart(2, '0')} ${ampm}`;
  };

  const isTimeBooked = (time) => bookedSlots.includes(time);

  const handleTimeSelection = (time) => {
    if (isTimeBooked(time)) {
      alert('This time slot is already booked.');
      return;
    }

    if (selectedSlots.includes(time)) {
      setSelectedSlots(selectedSlots.filter(t => t !== time));
    } else {
      setSelectedSlots([...selectedSlots, time]);
    }
  };

  const sortedSelected = [...selectedSlots].sort(
    (a, b) => convertToMinutes(a) - convertToMinutes(b)
  );

  const durationMins = selectedSlots.length * 15;
  const costPerMinute = 1; 
  const totalCost = (durationMins * costPerMinute).toFixed(2);

  const endTime =
    sortedSelected.length > 0
      ? convertToTimeString(convertToMinutes(sortedSelected[sortedSelected.length - 1]) + 15)
      : 'End Time';

  const handleBooking = () => {
    if (selectedSlots.length === 0) {
      alert("Please select at least one slot before booking.");
      return;
    }

    const bookingInfo = {
      bookingId: Math.floor(Math.random() * 1000000).toString(),
      day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
      date: new Date().toLocaleDateString(),
      timeSlot: `${sortedSelected[0]} - ${endTime}`,
      duration: `${durationMins} mins`,
      stationName: siteName,
      address: address,
      connectorType: connectorType,
      price: price,
      powerLevel: powerCapacity,
      totalCost: `₹${totalCost}`,
    };

    setBookingData(bookingInfo);
    setShowPopup(true);
    //  window.location.href = `evya://booking?stationId=${stationId}&connectorId=${connectorId}&chargerId=${chargerId}`;
  };

  // Styles
  const styles = {
    screen: { 
      flex: 1, 
      backgroundColor: theme.colors.white,
      padding: theme.spacing.md,
      minHeight: '100vh'
    },
    centered: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '20px',
      marginTop: '10px'
    },
    backButton: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: theme.spacing.xs,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerTitle: {
      fontSize: '18px',
      fontWeight: theme.fonts.bold,
      color: theme.colors.black,
      marginLeft: '12px'
    },
    stationCard: {
      backgroundColor: theme.colors.lightgrey,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      marginBottom: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    stationName: {
      fontSize: '16px',
      fontWeight: theme.fonts.bold,
      color: theme.colors.black,
      marginBottom: '12px'
    },
    infoRow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    infoDetails: {
      flex: 1,
      marginLeft: '12px'
    },
    detailsRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
      flexWrap: 'wrap',
      gap: '8px'
    },
    connectorText: {
      fontSize: '14px',
      fontWeight: theme.fonts.semibold,
      color: theme.colors.black,
      flex: 1,
      marginRight: '8px'
    },
    connectorType: {
      fontSize: '13px',
      color: theme.colors.textGray,
      marginRight: '8px'
    },
    costText: {
      fontSize: '14px',
      fontWeight: theme.fonts.bold,
      color: theme.colors.primary
    },
    addressText: {
      fontSize: '13px',
      color: theme.colors.textGray,
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    timeSection: {
      flex: 1,
      marginBottom: theme.spacing.lg
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: theme.fonts.bold,
      color: theme.colors.black,
      marginBottom: '16px'
    },
    bookedInfo: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '12px'
    },
    bookedInfoText: {
      fontSize: '12px',
      color: theme.colors.textGray,
      marginLeft: '6px'
    },
    timeHeader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '20px',
      backgroundColor: '#f8f9fa',
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg
    },
    timeBox: {
    //   display: 'flex',
      alignItems: 'center',
      flex: 1
    },
    timeLabel: {
      fontSize: '12px',
      color: theme.colors.textGray,
      marginBottom: '4px'
    },
    timeValue: {
      fontSize: '14px',
      fontWeight: theme.fonts.semibold,
      color: theme.colors.black
    },
    durationValue: {
      fontSize: '14px',
      fontWeight: theme.fonts.bold,
      color: theme.colors.primary
    },
    timeGridContainer: {
      maxHeight: '300px',
      marginBottom: '20px',
      overflowY: 'auto'
    },
    timeGrid: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '8px'
    },
    timeSlot: {
      width: '23%',
      padding: '12px',
      marginBottom: '8px',
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.white,
      border: `1px solid ${theme.colors.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    selectedTimeSlot: {
      backgroundColor: theme.colors.primary + '20',
      borderColor: theme.colors.primary
    },
    bookedTimeSlot: {
      backgroundColor: '#f8d7da',
      borderColor: '#f5c6cb',
      cursor: 'not-allowed'
    },
    timeSlotText: {
      fontSize: '12px',
      color: theme.colors.black
    },
    selectedTimeSlotText: {
      color: theme.colors.primary,
      fontWeight: theme.fonts.semibold
    },
    bookedTimeSlotText: {
      color: '#721c24',
      textDecoration: 'line-through'
    },
    slotBookedIndicator: {
      position: 'absolute',
      top: '4px',
      right: '4px',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: '#dc3545'
    },
    footer: {
      backgroundColor: theme.colors.white,
      paddingTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colors.border}`,
      position: 'sticky',
      bottom: 0,
      left: 0,
      right: 0
    },
    priceContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px'
    },
    totalText: {
      fontSize: '16px',
      color: theme.colors.black
    },
    priceText: {
      fontSize: '18px',
      fontWeight: theme.fonts.bold,
      color: theme.colors.primary
    },
    termsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '20px'
    },
    termsText: {
      fontSize: '12px',
      color: '#6c757d'
    },
    detailsLink: {
      fontSize: '12px',
      color: theme.colors.primary,
      fontWeight: theme.fonts.medium,
      cursor: 'pointer',
      textDecoration: 'none'
    },
    bookButton: {
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      display: 'flex',
      alignItems: "flex-end",
      justifyContent: 'flex-end',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    bookButtonDisabled: {
      backgroundColor: '#6c757d',
      cursor: 'not-allowed'
    },
    bookButtonText: {
      color: theme.colors.white,
      fontSize: '16px',
      fontWeight: theme.fonts.bold
    }
  };

  if (loading) {
    return (
      <div style={{...styles.screen, ...styles.centered}}>
        <div>Loading availability...</div>
      </div>
    );
  }

  return (
    <div style={styles.screen}>
      {/* Header */}
      <div style={styles.header}>
        <button 
          onClick={() => navigate(-1)} 
          style={styles.backButton}
        >
          <FaArrowLeft style={{ color: theme.colors.black, fontSize: '18px' }} />
        </button>
        <div style={styles.headerTitle}>Book Charger</div>
      </div>

      {/* Station info card */}
      <div style={styles.stationCard}>
        <div style={styles.stationName}>{siteName}</div>
        <div style={styles.infoRow}>
          <FaChargingStation style={{ color: theme.colors.primary, fontSize: '24px', marginTop: '2px' }} />
          <div style={styles.infoDetails}>
            <div style={styles.detailsRow}>
              <div style={styles.connectorText}>{connectorName}</div>
              <div style={styles.connectorType}>{connectorType} • {powerCapacity}</div>
              <div style={styles.costText}>{price}</div>
            </div>
            <div style={styles.addressText}>
              <FaMapMarkerAlt style={{ fontSize: '14px' }} /> {address}
            </div>
          </div>
        </div>
      </div>

      {/* Time selection */}
      <div style={styles.timeSection}>
        <div style={styles.sectionTitle}>Select Time Slot</div>

        <div style={styles.bookedInfo}>
          <div style={styles.slotBookedIndicator} />
          <div style={styles.bookedInfoText}>Booked slots</div>
        </div>

        <div style={styles.timeHeader}>
          <div style={styles.timeBox}>
            <div style={styles.timeLabel}>Start Time</div>
            <div style={styles.timeValue}>
              {sortedSelected[0] || '--:-- --'}
            </div>
          </div>
          <div style={styles.timeBox}>
            <div style={styles.timeLabel}>Duration</div>
            <div style={styles.durationValue}>
              {durationMins > 0 ? `${durationMins} Mins` : '--'}
            </div>
          </div>
          <div style={styles.timeBox}>
            <div style={styles.timeLabel}>End Time</div>
            <div style={styles.timeValue}>{endTime}</div>
          </div>
        </div>

        <div 
          ref={scrollRef} 
          style={styles.timeGridContainer}
        >
          <div style={styles.timeGrid}>
            {times.map(time => {
              const selected = selectedSlots.includes(time);
              const booked = isTimeBooked(time);

              return (
                <div
                  key={time}
                  onClick={() => !booked && handleTimeSelection(time)}
                  style={{
                    ...styles.timeSlot,
                    ...(selected && styles.selectedTimeSlot),
                    ...(booked && styles.bookedTimeSlot)
                  }}
                >
                  <div
                    style={{
                      ...styles.timeSlotText,
                      ...(selected && styles.selectedTimeSlotText),
                      ...(booked && styles.bookedTimeSlotText)
                    }}
                  >
                    {time}
                  </div>
                  {booked && <div style={styles.slotBookedIndicator} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <div style={styles.priceContainer}>
          <div style={styles.totalText}>Total Charging Cost</div>
          <div style={styles.priceText}>₹ {totalCost}</div>
        </div>
        
        <div style={styles.termsContainer}>
          <div style={styles.termsText}>*Terms & Conditions apply</div>
          <a 
            href="#" 
            style={styles.detailsLink}
            onClick={(e) => e.preventDefault()}
          >
            View cost breakdown
          </a>
        </div>
        
        <button
          disabled={selectedSlots.length === 0}
          onClick={handleBooking}
          style={{
            ...styles.bookButton,
            ...(selectedSlots.length === 0 && styles.bookButtonDisabled)
          }}
        >
          <div style={styles.bookButtonText}>
            {selectedSlots.length === 0 ? 'Select Time Slot' : 'Pay & Book Now'}
          </div>
        </button>
      </div>

      {/* Popup */}
      {/* <BookingSuccessPopup
        visible={showPopup}
        onClose={() => setShowPopup(false)}
        bookingData={bookingData}
      /> */}
    </div>
  );
};

export default BookingScreen;