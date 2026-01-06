// stationsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../axios/Apis";

// ✅ Async thunk to fetch stations
export const fetchStations = createAsyncThunk(
  "stations/fetchStations",
  async (newParams = {}, { getState, rejectWithValue, signal }) => {
    try {
      const state = getState();
      const lastFilters = state.stations.lastUsedParams;

      // Merge previous filters with new ones (deep merge for nested objects)
      const mergedFilters = { 
        ...lastFilters, 
        ...(newParams.filters || {}) 
      };

      const data = await Apis.getStations(
        {
          location: newParams.location,
          filters: mergedFilters,
          search: newParams.search,
          from: newParams.from,
          to: newParams.to,
        },
        signal
      );

      return { 
        data, 
        filters: mergedFilters,
        location: newParams.location, // Store location separately
        search: newParams.search,
        from: newParams.from,
        to: newParams.to
      };
    } catch (err) {
      if (err.name === 'AbortError') {
        // Request was cancelled/aborted, don't treat as error
        return rejectWithValue("Request cancelled");
      }
      if (!err.response) {
        return rejectWithValue("Network error - please check your connection");
      }
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const initialState = {
  stations: [],
  loading: false,
  selectedStation: null,
  error: null,
  lastUsedParams: {
    filters: {},
    location: null,
    search: null,
    from: null,
    to: null
  },
  lastUpdated: null,
};

const StationsSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    clearStations: (state) => {
      state.stations = [];
      state.lastUpdated = null;
      state.error = null;
    },
    updateStation: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.stations.findIndex((s) => s.id === id);
      if (index !== -1) {
        state.stations[index] = { ...state.stations[index], ...updates };
      }
      // Also update selected station if it's the same one
      if (state.selectedStation && state.selectedStation.id === id) {
        state.selectedStation = { ...state.selectedStation, ...updates };
      }
    },
    clearError: (state) => {
      state.error = null;
    },
    updateFilters: (state, action) => {
      // Deep merge filters
      state.lastUsedParams.filters = { 
        ...state.lastUsedParams.filters, 
        ...action.payload 
      };
    },
    updateLocation: (state, action) => {
      state.lastUsedParams.location = action.payload;
    },
    updateSearch: (state, action) => {
      state.lastUsedParams.search = action.payload;
    },
    setSelectedStation: (state, action) => {
      state.selectedStation = action.payload;
    },
    clearSelectedStation: (state) => {
      state.selectedStation = null;
    },
    resetAllFilters: (state) => {
      state.lastUsedParams = initialState.lastUsedParams;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStations.fulfilled, (state, action) => {
        state.loading = false;
        state.stations = action.payload.data || [];
        state.lastUsedParams = {
          filters: action.payload.filters,
          location: action.payload.location,
          search: action.payload.search,
          from: action.payload.from,
          to: action.payload.to
        };
        state.lastUpdated = new Date().toISOString();
        state.error = null;
      })
      .addCase(fetchStations.rejected, (state, action) => {
        state.loading = false;
        // Don't set error for cancelled requests
        if (action.payload !== "Request cancelled") {
          state.error = action.payload || "Something went wrong";
        }
      });
  },
});

export const {
  clearStations,
  updateStation,
  clearError,
  updateFilters,
  updateLocation,
  updateSearch,
  setSelectedStation,
  clearSelectedStation,
  resetAllFilters,
} = StationsSlice.actions;

export const selectAllStations = (state) => state.stations.stations;
export const selectStationById = (state, stationId) =>
  state.stations.stations.find((s) => s.id === stationId);
export const selectStationsLoading = (state) => state.stations.loading;
export const selectStationsError = (state) => state.stations.error;
export const selectStationsLastUpdated = (state) => state.stations.lastUpdated;
export const selectStationsParams = (state) => state.stations.lastUsedParams;
export const selectSelectedStation = (state) => state.stations.selectedStation;

export default StationsSlice.reducer;