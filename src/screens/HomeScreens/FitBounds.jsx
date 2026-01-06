import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const FitBounds = ({ sites, currentLocation, shouldFit }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !shouldFit || sites.length === 0) return;
    
    const bounds = L.latLngBounds([]);
    
    if (currentLocation) {
      bounds.extend([currentLocation.lat, currentLocation.lng]);
    }
    
    sites.forEach(site => {
      const lat = site.coordinates?.latitude || site.latitude || site.lat;
      const lng = site.coordinates?.longitude || site.longitude || site.lng;
      if (lat && lng) {
        bounds.extend([lat, lng]);
      }
    });
    
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, sites, currentLocation, shouldFit]);

  return null;
};

export default FitBounds;