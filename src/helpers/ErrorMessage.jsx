import React, { useEffect, useState } from "react";

const ErrorMessage = ({ message }) => {
  const [show, setShow] = useState(false); // controls actual render
  const duration = 3000;

  useEffect(() => {
    if (message) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false); // disappear after duration
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!show || !message) return null; // hide if no message

  return (
    <div style={styles.container}>
      <div style={styles.messageBox}>
        <div style={styles.text}>{message}</div>
        {/* Manual close button if needed */}
        {/* <button style={styles.button} onClick={() => setShow(false)}>
          <div style={styles.buttonText}>OK</div>
        </button> */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 9999,
  },
  messageBox: {
    backgroundColor: "white",
    padding: "12px 16px",
    borderRadius: "8px",
    minWidth: "250px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    border: "1px solid #e8e7e7ff",
  },
  text: {
    color: "black",
    fontSize: "16px",
    fontWeight: "500",
    marginBottom: "8px",
  },
  button: {
    marginTop: "4px",
    backgroundColor: "red",
    padding: "6px 20px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: "14px",
  },
};

export default ErrorMessage;
