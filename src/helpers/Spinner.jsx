// // src/components/Spinner.jsx
// import React from "react";

// const Spinner = ({ size = 60, color = "#4CAF50", message = "Loading..." }) => {
//   const spinnerStyle = {
//     width: size,
//     height: size,
//     border: `${size / 10}px solid #f3f3f3`,
//     borderTop: `${size / 10}px solid ${color}`,
//     borderRadius: "50%",
//     animation: "spin 1s linear infinite",
//     marginBottom: 16,
//   };

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100%",
//     width: "100%",
//     textAlign: "center",
//   };

//   const messageStyle = {
//     fontSize: 16,
//     color: "#4CAF50",
//     fontWeight: "bold",
//     fontFamily: "Arial, sans-serif",
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={spinnerStyle}></div>
//       <div style={messageStyle}>{message}</div>
//       <style>
//         {`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Spinner;


import React from "react";

function Spinner() {
  return (
    <>
      <style>
        {`
          :root {
            --primary: #048f30ff; /* theme color */
          }
          .loading-wrapper {
            position: fixed;       /* sit on top of all screens */
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(255, 255, 255, 0.6); /* optional dim overlay */
            z-index: 9999;        /* always on top */
          }
          .spinner {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            border: 2px solid transparent;
            border-top-color: var(--primary);
            border-bottom-color: var(--primary);
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      <div className="loading-wrapper">
        <div className="spinner" />
      </div>
    </>
  );
}

export default Spinner;

