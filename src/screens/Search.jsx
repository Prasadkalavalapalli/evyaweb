import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { fetchStations } from '../redux/StationsSlice';
import ErrorMessage from '../helpers/ErrorMessage';

const Search = ({ onSelectSite }) => {
  const dispatch = useDispatch();
  const { loading: stationsLoading, error: stationsError } = useSelector(
    (state) => state.stations
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [isFetchingPredictions, setIsFetchingPredictions] = useState(false);
  const [autocompleteService, setAutocompleteService] = useState(null);
  const inputRef = useRef(null);

  // Initialize the Google Maps AutocompleteService
  useEffect(() => {
    if (window.google && window.google.maps && window.google.maps.places) {
      setAutocompleteService(new window.google.maps.places.AutocompleteService());
    } else {
      console.error('Google Maps JavaScript API not loaded');
    }
  }, []);

  useEffect(() => {
    return () => {
      setSearchQuery('');
      setPredictions([]);
    };
  }, []);

  useEffect(() => {
    if (stationsError) {
      alert(stationsError);
    }
  }, [stationsError]);

  // Fetch predictions using AutocompleteService
  const fetchPredictions = useCallback((input) => {
    if (!input || input.length < 3) {
      setPredictions([]);
      return;
    }

    if (!autocompleteService) {
      console.error('AutocompleteService not available');
      return;
    }

    setIsFetchingPredictions(true);
    
    autocompleteService.getPlacePredictions(
      { input, types: ['address'] }, // You can adjust types as needed
      (predictions, status) => {
        setIsFetchingPredictions(false);
        
        if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
          setPredictions(predictions);
        } else {
          setPredictions([]);
          // Log status for debugging
          if (status !== window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
            console.log('Autocomplete request failed with status:', status);
          }
        }
      }
    );
  }, [autocompleteService]);

  // Debounced version of fetchPredictions to avoid too many API calls
  useEffect(() => {
    if (searchQuery.length < 3) {
      setPredictions([]);
      return;
    }

    const timerId = setTimeout(() => {
      fetchPredictions(searchQuery);
    }, 300); // 300ms debounce

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery, fetchPredictions]);

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const handleSearch = () => {
    if (searchQuery.trim().length > 0) {
      dispatch(fetchStations({ search: searchQuery.trim() }));
      setPredictions([]);
    }
    <ErrorMessage message={"hello"}/>
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSelectPrediction = (prediction) => {
    setSearchQuery(prediction.description);
    setPredictions([]);
    // if (onSelectSite) onSelectSite(prediction.description);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setPredictions([]);
    // dispatch(fetchStations({ search: ''}));
  };

  const renderPredictionItem = (item) => (
    <div
      className="prediction-item"
      onClick={() => handleSelectPrediction(item)}
      key={item.place_id}
    >
      <IoLocationOutline className="location-icon" />
      <span className="prediction-text">{item.description}</span>
    </div>
  );

  return (
    <div className="search-container">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Enter an address"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        {searchQuery !== '' && (
          <button className="clear-button" onClick={handleClearSearch}>
            <FaTimes />
          </button>
        )}
      </div>

      {predictions.length > 0 && (
        <div className="predictions-dropdown">
          {isFetchingPredictions ? (
            <div className="loading-container">
              <div className="spinner"></div>
              <span className="loading-text">Loading predictions...</span>
            </div>
          ) : (
            <div className="predictions-list">
              {predictions.map(renderPredictionItem)}
            </div>
          )}
        </div>
      )}

      {stationsLoading && (
        <div className="dropdown">
          <div className="loading-container">
            <div className="spinner large"></div>
            <span className="loading-text">Searching...</span>
          </div>
        </div>
      )}

      <style jsx>{`
        .search-container {
          position: fixed;
          top: 20px;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: transparent;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 20px;
        }
        
        .search-bar {
          display: flex;
          align-items: center;
          background-color: white;
          border-radius: 12px;
          padding: 18px 12px;
          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
          width: 92%;
          max-width: 600px;
          margin-top: 30px;
        }
        
        .search-icon {
          margin-right: 8px;
          color: #888;
          font-size: 18px;
        }
        
        .search-input {
          flex: 1;
          font-size: 16px;
          color: #333;
          border: none;
          outline: none;
          padding: 4px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        
        .search-button {
          padding: 6px 12px;
          background: none;
          border: none;
          color: #24a806ff;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        
        .search-button:hover {
          opacity: 0.8;
        }
        
        .clear-button {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 8px;
          margin-left: 4px;
          background: none;
          border: none;
          font-size: 16px;
          color: #dc3545;
          cursor: pointer;
        }
        
        .clear-button:hover {
          opacity: 0.8;
        }
        
        .predictions-dropdown {
          position: absolute;
          top: 70px;
          width: 92%;
          max-width: 600px;
          background-color: #fff;
          border-radius: 8px;
          max-height: 40vh;
          z-index: 1002;
          overflow: hidden;
          border: 1px solid #eee;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .prediction-item {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
        }
        
        .prediction-item:hover {
          background-color: #f5f5f5;
        }
        
        .location-icon {
          margin-right: 12px;
          font-size: 18px;
          color: #333;
          flex-shrink: 0;
        }
        
        .prediction-text {
          font-size: 14px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        
        .loading-container {
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .spinner {
          border: 2px solid #f3f3f3;
          border-top: 2px solid #007bff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }
        
        .spinner.large {
          width: 30px;
          height: 30px;
        }
        
        .loading-text {
          margin-top: 12px;
          font-size: 14px;
          color: #888;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
        
        .dropdown {
          position: absolute;
          top: 100px;
          width: 92%;
          max-width: 600px;
          overflow: hidden;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .search-bar {
            width: 96%;
          }
          
          .predictions-dropdown {
            width: 96%;
          }
          
          .dropdown {
            width: 96%;
          }
        }
      `}</style>
    </div>
  );
};

export default Search;
