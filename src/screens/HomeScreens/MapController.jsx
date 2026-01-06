import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';

const MapController = ({ center, zoom, shouldFly }) => {
  const map = useMap();

  useEffect(() => {
    if (center && shouldFly && map) {
      map.flyTo(center, zoom, { duration: 1.0 });
    }
  }, [center, zoom, shouldFly, map]);

  return null;
};

export default MapController;