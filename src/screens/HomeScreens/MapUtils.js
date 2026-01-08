import L from 'leaflet';
import { pallette } from '../Utils/Pallete';

// Custom icon for stations
export const createStationIcon = (site, isSelected = false) => {
  const name = (site.managerName || "").toLowerCase();
  let logo = require("../../images/chargermark.png");
  if (name.includes("bpcl")) logo = require("../../images/bpcl.png");
  else if (name.includes("hpcl")) logo = require("../../images/hpcl.png");
  else if (name.includes("iocl") || name.includes("indian oil")) logo = require("../../images/incl.png");
  const isAvailable = site.avaiPorts > 0;
  const badgeColor = isAvailable ? pallette.primary : pallette.red;
  const badgeBg = isAvailable ? pallette.lightprimary : pallette.lightred;

  return L.divIcon({
    html: `
      ${isSelected ? `<div style="position: relative; cursor: pointer; width: 30px; height: 40px;">`:`<div style="position: relative; cursor: pointer; width: 20px; height: 40px;">`}
        <img 
          src="${logo}" 
          alt="EV Station" 
          style="width: 100%; height: 100%; object-fit: contain; ${isSelected ? 'filter: drop-shadow(0 0 8px rgba(74, 175, 87, 0.8))' : ''}" 
        />
        <div style="
          position: absolute;
          top: 10px;
          right: 30px;
          border-radius: 35%;
          width: 25px;
          height: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid white;
          background-color: ${badgeBg};
          transform: translate(30%, -30%);
          z-index: 1000;
        ">
          <span style="
            font-size: 10px;
            font-weight: bold;
            font-family: Arial, sans-serif;
            color: ${badgeColor};
          ">
            ${site.available || 0}/${site.totalPorts || 0}
          </span>
        </div>
        ${isSelected ? `
         
        ` : ''}
      </div>
    `,
    className: "custom-marker",
    iconSize: [40, 60],
    iconAnchor: [20, 60],
  });
};

// Calculate distance between two points
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return (R * c).toFixed(1);
};

// Get availability color
export const getAvailabilityColor = (station) => {
  if (!station.available || station.available === 0) return pallette.red;
  if (station.available / station.totalPorts < 0.3) return pallette.orange;
  return pallette.l1;
};




// import L from 'leaflet';
// import { pallette } from '../Utils/Pallete';

// // Custom icon for stations
// export const createStationIcon = (site, isSelected = false) => {
//   const name = (site.managerName || "").toLowerCase();
//   let logo = require("../../images/chargermark.png");
//   if (name.includes("bpcl")) logo = require("../../images/bpcl.png");
//   else if (name.includes("hpcl")) logo = require("../../images/hpcl.png");
//   else if (name.includes("iocl") || name.includes("indian oil")) logo = require("../../images/incl.png");
  
//   const isAvailable = site.avaiPorts > 0;
//   const badgeColor = isAvailable ? pallette.primary : pallette.red;
//   const badgeBg = isAvailable ? pallette.lightprimary : pallette.lightred;

//   // Different size for selected vs non-selected
//   const iconSize = isSelected ? 30 : 20; // Increase size when selected
//   const badgeSize = isSelected ? 30 : 25; // Slightly larger badge when selected
//   const badgeFontSize = isSelected ? 12 : 10; // Larger font when selected

//   return L.divIcon({
//     html: `
//       <div style="position: relative; cursor: pointer; width: ${iconSize}px; height: ${iconSize * 2}px;">
//         <img 
//           src="${logo}" 
//           alt="EV Station" 
//           style="
//             width: 100%; 
//             height: 100%; 
//             object-fit: contain; 
//             ${isSelected ? 'transform: scale(1.3); transition: transform 0.3s ease;' : ''}
//           " 
//         />
//         <div style="
//           position: absolute;
//           top: ${isSelected ? '8px' : '10px'};
//           right: ${isSelected ? '35px' : '30px'};
//           border-radius: 35%;
//           width: ${badgeSize}px;
//           height: ${isSelected ? '18px' : '15px'};
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border: 2px solid white;
//           background-color: ${badgeBg};
//           transform: translate(30%, -30%);
//           z-index: 1000;
//           box-shadow: ${isSelected ? '0 2px 4px rgba(0,0,0,0.2)' : 'none'};
//         ">
//           <span style="
//             font-size: ${badgeFontSize}px;
//             font-weight: bold;
//             font-family: Arial, sans-serif;
//             color: ${badgeColor};
//           ">
//             ${site.avaiPorts || 0}/${site.noOfPorts || 0}
//           </span>
//         </div>
//       </div>
//     `,
//     className: `custom-marker ${isSelected ? 'selected-marker' : ''}`,
//     iconSize: isSelected ? [50, 70] : [40, 60], // Larger when selected
//     iconAnchor: isSelected ? [25, 70] : [20, 60], // Adjust anchor for larger icon
//   });
// };

// // Calculate distance between two points
// export const calculateDistance = (lat1, lon1, lat2, lon2) => {
//   const R = 6371; // Earth's radius in km
//   const dLat = (lat2 - lat1) * Math.PI / 180;
//   const dLon = (lon2 - lon1) * Math.PI / 180;
//   const a = 
//     Math.sin(dLat/2) * Math.sin(dLat/2) +
//     Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
//     Math.sin(dLon/2) * Math.sin(dLon/2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//   return (R * c).toFixed(1);
// };

// // Get availability color
// export const getAvailabilityColor = (station) => {
//   if (!station.avaiPorts || station.avaiPorts === 0) return pallette.red;
//   if (station.avaiPorts / station.noOfPorts < 0.3) return pallette.orange;
//   return pallette.l1;
// };

// // Add CSS for pulse animation (remove since we don't want circles)
// export const addMarkerStyles = () => {
//   const style = document.createElement('style');
//   style.innerHTML = `
//     /* Remove pulse animation styles since we don't want circles */
//     .selected-marker img {
//       filter: drop-shadow(0 0 6px rgba(74, 175, 87, 0.6));
//     }
//   `;
//   document.head.appendChild(style);
// };