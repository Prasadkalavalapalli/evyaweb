import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaChevronUp, FaChevronDown, FaTimesCircle, FaFilter, FaBolt } from 'react-icons/fa';
import { pallette } from '../Utils/Pallete';
import { updateFilters } from '../../redux/StationsSlice';

const FilterTabs = ({ onFilterChange }) => {
  const dispatch = useDispatch();
  
  const [activeTab, setActiveTab] = useState('');
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  
  const [filters, setFilters] = useState({
    chargerType: null,     // For AC/DC type from tabs
    connectorType: null,   // Connector type
    status: null,         // Status
  });

  const TABS = [
    { label: 'AC', value: 'AC' },
    { label: 'DC', value: 'DC' }
   
  ];
  
  const FILTER_CATEGORIES = {
    connectorType: [
      { label: 'CCS2', value: 'CCS2' },
      { label: 'CCS1', value: 'CCS1' },
      { label: 'Type2', value: 'Type 2' },
      { label: 'CHAdeMO', value: 'CHAdeMO' },
      { label: 'Type1', value: 'Type 1' }
    ],
    status: [
      { label: 'ACTIVE', value: 'ACTIVE' },
      { label: 'INACTIVE', value: 'INACTIVE' },
      { label: 'MAINTENANCE', value: 'MAINTENANCE' }
    ]
  };

  // Apply chargerType filter when tab changes - FIXED
  useEffect(() => {
    console.log('Active tab changed:', activeTab);
    
    if (activeTab) {
      const chargerType = TABS.find(tab => tab.label === activeTab)?.value;
      console.log('Found chargerType:', chargerType);
      
      if (chargerType) {
        const updatedFilters = { ...filters, chargerType };
        setFilters(updatedFilters);
        
        // Apply filters immediately when tab is clicked
        applyFiltersImmediately(updatedFilters);
      }
    } else {
      // When tab is cleared, remove chargerType filter
      const updatedFilters = { ...filters, chargerType: null };
      setFilters(updatedFilters);
      applyFiltersImmediately(updatedFilters);
    }
  }, [activeTab]);

  // Apply filters immediately (for tab clicks)
  const applyFiltersImmediately = (filterData) => {
    console.log('Applying filters immediately:', filterData);
    
    // Prepare filter payload for API
    const filterPayload = {
      chargerType: filterData.chargerType || null,
      connectorType: filterData.connectorType || null,
      status: filterData.status || null,
    };

    // Update Redux store
    dispatch(updateFilters(filterPayload));
    
    // Notify parent component (MapSection) to trigger API call
    if (onFilterChange) {
      console.log('Calling onFilterChange with:', filterPayload);
      onFilterChange(filterPayload);
    }
  };

  // Apply filters to Redux and API (for Apply button)
  const applyFilters = () => {
    console.log('Applying filters from Apply button:', filters);
    
    // Prepare filter payload for API
    const filterPayload = {
      chargerType: filters.chargerType || null,
      connectorType: filters.connectorType || null,
      status: filters.status || null,
    };

    // Update Redux store
    dispatch(updateFilters(filterPayload));
    
    // Notify parent component (MapSection) to trigger API call
    if (onFilterChange) {
      console.log('Calling onFilterChange with:', filterPayload);
      onFilterChange(filterPayload);
    }
    
    setShowFilterBox(false);
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const updateFilterState = (filterType, value) => {
    const updatedFilters = {
      ...filters,
      [filterType]: filters[filterType] === value ? null : value
    };
    setFilters(updatedFilters);
    console.log('Updated filters state:', updatedFilters);
  };

  const clearFilters = () => {
    console.log('Clearing all filters');
    setActiveTab('');
    setFilters({
      chargerType: null,
      connectorType: null,
      status: null,
    });
    setExpandedCategory(null);
    setShowFilterBox(false);

    const emptyFilters = {
      chargerType: null,
      connectorType: null,
      status: null,
    };
    
    dispatch(updateFilters(emptyFilters));
    
    // Notify parent component
    if (onFilterChange) {
      console.log('Calling onFilterChange with empty filters');
      onFilterChange(emptyFilters);
    }
  };

  const hasActiveFilters = activeTab || 
    filters.connectorType || 
    filters.status;

  const renderFilterOption = (category, option) => (
    <button
      key={option.value}
      style={{
        ...styles.filterOption,
        backgroundColor: filters[category] === option.value ? pallette.primary : pallette.lightgrey,
        color: filters[category] === option.value ? pallette.white : pallette.black,
      }}
      onClick={() => updateFilterState(category, option.value)}
    >
      {option.label}
    </button>
  );

  const renderFilterCategory = (category, title, options) => (
    <div key={category} style={styles.categoryContainer}>
      <button
        style={styles.categoryHeader}
        onClick={() => toggleCategory(category)}
      >
        <span style={styles.categoryTitle}>{title}</span>
        {expandedCategory === category ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {expandedCategory === category && (
        <div style={styles.optionGroup}>
          {options.map(option => 
            renderFilterOption(category, option)
          )}
        </div>
      )}
    </div>
  );

  // Handle tab click - FIXED to work properly
  const handleTabClick = (tabLabel) => {
    console.log('Tab clicked:', tabLabel);
    
    if (activeTab === tabLabel) {
      // If clicking the same tab, clear it
      setActiveTab('');
    } else {
      // Set the new active tab
      setActiveTab(tabLabel);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.tabsContainer}>
          {TABS.map(tab => (
            <button
              key={tab.value}
              style={{
                ...styles.tab,
                backgroundColor: activeTab === tab.label ? pallette.primary : pallette.lightgrey,
                color: activeTab === tab.label ? pallette.white : pallette.primary,
              }}
              onClick={() => handleTabClick(tab.label)}
            >
              <FaBolt size={14} />
              <span style={styles.tabText}>{tab.label}</span>
            </button>
          ))}
        </div>

        <div style={styles.filterActions}>
          {hasActiveFilters && (
            <button style={styles.clearIcon} onClick={clearFilters}>
              <FaTimesCircle size={20} color={pallette.error} />
            </button>
          )}

          <button
            style={{
              ...styles.filterIcon,
              backgroundColor: showFilterBox ? pallette.primary : 
                hasActiveFilters ? pallette.lightgrey : pallette.lightgrey,
              border: hasActiveFilters ? `1px solid ${pallette.primary}` : 'none',
            }}
            onClick={() => setShowFilterBox(!showFilterBox)}
          >
            <FaFilter 
              size={20} 
              color={showFilterBox ? pallette.white : 
                hasActiveFilters ? pallette.primary : pallette.black} 
            />
          </button>
        </div>
      </div>

      {showFilterBox && (
        <div style={styles.filterBox}>
          <div style={styles.filterTitle}>More Filters</div>

          {renderFilterCategory('connectorType', 'Connector Type', FILTER_CATEGORIES.connectorType)}
          {renderFilterCategory('status', 'Status', FILTER_CATEGORIES.status)}
          
          <div style={styles.filterButtons}>
            <button
              style={styles.cancelButton}
              onClick={() => setShowFilterBox(false)}
            >
              Cancel
            </button>
            <button
              style={styles.applyButton}
              onClick={applyFilters}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '6px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabsContainer: {
    display: 'flex',
    gap: '12px',
    flex: 1,
    overflowX: 'auto',
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 10px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    gap: '6px',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s ease',
  },
  tabText: {
    fontSize: '12px',
    fontWeight: '600',
  },
  filterActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  filterIcon: {
    backgroundColor: pallette.lightgrey,
    padding: '8px',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s ease',
  },
  clearIcon: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    transition: 'transform 0.3s ease',
  },
  clearIconHover: {
    transform: 'scale(1.1)',
  },
  filterBox: {
    backgroundColor: pallette.white,
    padding: '16px',
    marginTop: '12px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 0.3s ease',
  },
  filterTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '16px',
    color: pallette.black,
  },
  categoryContainer: {
    marginBottom: '12px',
    borderBottom: `1px solid ${pallette.lightgrey}`,
    paddingBottom: '12px',
  },
  categoryHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    width: '100%',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: pallette.black,
  },
  categoryTitle: {
    fontSize: '14px',
    fontWeight: '600',
  },
  optionGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '12px',
  },
  filterOption: {
    padding: '8px 16px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
  },
  filterButtons: {
    display: 'flex',
    gap: '12px',
    marginTop: '20px',
  },
  cancelButton: {
    flex: 1,
    padding: '12px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: pallette.lightgrey,
    color: pallette.black,
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  applyButton: {
    flex: 1,
    padding: '12px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: pallette.primary,
    color: pallette.white,
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
};

// Add CSS animation
const styleSheet = document.styleSheets[0];
if (styleSheet) {
  try {
    styleSheet.insertRule(`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `, styleSheet.cssRules.length);
  } catch (e) {
    console.log('CSS animation rule already exists or cannot be added');
  }
}

export default FilterTabs;