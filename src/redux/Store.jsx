// store.js
import { configureStore } from "@reduxjs/toolkit";
import stationsReducer from "./StationsSlice"; // import your slice

const Store = configureStore({
  reducer: {
    stations: stationsReducer, // key name matches slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // optional, avoids errors with non-serializable data
    }),
});

export default Store;
