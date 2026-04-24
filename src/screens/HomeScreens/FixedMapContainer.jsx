import React from 'react';
import MapSection from './MapSection';


const FixedMapContainer  = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <MapSection/>
    </div>
  );
};

export default FixedMapContainer ;