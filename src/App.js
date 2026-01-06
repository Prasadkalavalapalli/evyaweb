import logo from './logo.svg';
import './App.css';
import MapsScreen from './screens/MapsScreen';
import Search from './screens/Search';
import Routescreen from './screens/Route';
import StationsList from './screens/StationsList';
import { Router, Routes,Route } from 'react-router-dom';
import SiteCard from './screens/SiteCard';
import ErrorMessage from './helpers/ErrorMessage';
import StationDetails from './screens/StationDetails';
import BookingScreen from './screens/BookingScreen';
import MapSection from './screens/HomeScreens/MapSection';
import MapSearch from './screens/HomeScreens/MapSearch';


function App() {
  return (
    <div >
      {/* <Search/> */}
      {/* <MapsScreen/> */}
      {/* <Route/> */}
      {/* <StationsList/> */}

      
      <Routes>
        {/* Default route */}
        <Route path="/mapsection" element={<MapSection/>}/>
        <Route path="/map" element={<MapsScreen />} />
        <Route path="/mapsearch" element={<MapSearch/>}/>
        <Route path="/route" element={<Routescreen />} />
        <Route path="/search" element={<Search />} />
        <Route path="/site-card" element={<SiteCard/>} />
        <Route path="/stations" element={<StationsList />} />
        <Route path="/stationsdetails" element={<StationDetails/>}/>
        <Route path="/booking" element={<BookingScreen/>}/>
        <Route path="/error" element={<ErrorMessage/>}/>
      </Routes>
    </div>
  );
}

export default App;
