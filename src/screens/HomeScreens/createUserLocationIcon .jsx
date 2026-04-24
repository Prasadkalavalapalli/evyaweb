import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

const createUserLocationIcon = () => {
  return L.divIcon({
    html: `
      <div style="position: relative;">
        <div style="
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #4285F4;
          border: 3px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        "></div>
      </div>
    `,
    className: "user-location-marker",
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};

const UserLocationMarker = ({ position }) => {
  if (!position) return null; // safety check

  return (
    <Marker position={position} icon={createUserLocationIcon()}>
      <Popup>Your Current Location</Popup>
    </Marker>
  );
};

export default UserLocationMarker;