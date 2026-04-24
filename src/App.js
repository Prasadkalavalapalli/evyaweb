import { Routes, Route } from 'react-router-dom';

import MapSearch from './screens/HomeScreens/MapSearch';
import StationsList from './screens/StationsList';
import StationDetails from './screens/StationDetails';
import BookingScreen from './screens/BookingScreen';
import Routescreen from './screens/Route';
import Search from './screens/Search';
import SiteCard from './screens/SiteCard';
import ErrorMessage from './helpers/ErrorMessage';
import MapsScreen from './screens/MapsScreen';
import FixedMapContainer from './screens/HomeScreens/FixedMapContainer';


function App() {
  return (
    <div style={{ position: 'relative' }}>
      {/* MapSection is ALWAYS here - never unmounts */}
  <FixedMapContainer/>
      
      {/* All routes render on top */}
      <div style={{ position: 'relative', zIndex: 10, background: 'white' }}>
        <Routes>
          <Route path="/mapsection" element={<div />} />
          <Route path="/map" element={<MapsScreen />} />
          <Route path="/mapsearch" element={<MapSearch />} />
          <Route path="/route" element={<Routescreen />} />
          <Route path="/search" element={<Search />} />
          <Route path="/site-card" element={<SiteCard />} />
          <Route path="/stations" element={<StationsList />} />
          <Route path="/stationsdetails" element={<StationDetails />} />
          <Route path="/booking" element={<BookingScreen />} />
          <Route path="/error" element={<ErrorMessage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;