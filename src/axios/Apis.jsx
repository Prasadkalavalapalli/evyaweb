// stationsApi.js
import axios from "axios";

const API_URL = "http://localhost:8800/api/mobile/mobilegetAllSites";

const getStations = async ({ location, filters, search, from, to } = {}, signal) => {
  let params = {};

  console.log("🔄 getStations called with:", { location, filters, search, from, to });

  // ✅ Extract location parameters
  if (location?.latitude != null) params.latitude = location.latitude;
  if (location?.longitude != null) params.longitude = location.longitude;

  // ✅ Extract filter parameters
  if (filters) {
    if (filters.radius != null) params.radiusKm = filters.radius;
    if (filters.connectorType != null) params.connectorType = filters.connectorType;
    if (filters.power != null) params.minPower = filters.power;
    if (filters.chargerType != null) params.powerType = filters.chargerType;
    if (filters.status != null) params.status = filters.status;
    if (filters.evya != null) params.evya = filters.evya;
  }

  // ✅ Search parameter
  if (search && search.trim() !== "") params.search = search.trim();

  // ✅ From/To parameters
  if (from) params.from = from;
  if (to) params.to = to;

  // Remove null/undefined/empty string
  Object.keys(params).forEach((key) => {
    if (params[key] === null || params[key] === undefined || params[key] === "") {
      delete params[key];
    }
  });

  console.log("✅ FINAL API URL:", `${API_URL}?${new URLSearchParams(params).toString()}`);
  console.log("✅ FINAL Params Object:", params);

  try {
    const response = await axios.get(API_URL, { params, signal });

    if (response.status === 204) {
      console.log("✅ API returned 204 - No stations found");
      return [];
    }

    const stationsData = response.data;
    console.log( stationsData)
    return stationsData; // ✅ Missing return statement

  } catch (error) {
    console.error("❌ API Error:", error);
    throw error;
  }
};

const Apis = {
  getStations,
  
  getStationsByFilters: (filters, signal) => getStations({ filters }, signal),
  
  getStationsBySearch: async (search, signal) => {
    try {
      console.log("🔍 Searching with:", search);
      const response = await getStations({ search }, signal);

      return response;
    } catch (error) {
      console.error('Search API error:', error);
      return [];
    }
  },
  
  getStationsByLocation: (location, signal) => getStations({ location }, signal),
  
  getStationsByFromTo: (from, to, signal) => getStations({ from, to }, signal),
};

export default Apis;