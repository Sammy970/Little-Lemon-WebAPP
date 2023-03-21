import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Homepage from "./Components/Homepage"
import BookingPage from './Components/BookingPage';
import ConfirmedBooking from './Components/ConfirmedBooking';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/confirmedTable' element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
