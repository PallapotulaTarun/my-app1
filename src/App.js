
import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';


import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm1';
import Movies from './Movies';

import MyForm from './TicketBooking';
import Ticket from './Ticket';
import Cities from './Cities';
import Admin from './Admin';
import AdminDashboard from './AdminDashboard';
import Adminmovies from './Adminmovies';
import AdminProfile from './AdminProfile';
import AdminViewTicket from './AdminViewTicket';
import PrintTicketDetails from './PrintTicketDetails';
import AddMovie from './Addmovie';
import TicketTemplate from './TicketTemplate';
function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/registration" element={<RegistrationForm />}></Route>
        <Route path="/LoginForm" element={<LoginForm />}></Route>
        <Route path="/book" element={<MyForm />}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/Ticket" element={<Ticket />}></Route>
        <Route path="/Cities" element={<Cities />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/AdminDashboard" element={<AdminDashboard />}></Route>
        <Route path="/Adminmovies" element={<Adminmovies />}></Route>
        <Route path="/AdminProfile" element={<AdminProfile />}></Route>
        <Route path="/AdminViewTicket" element={<AdminViewTicket />}></Route>
        <Route path="/PrintTicketDetails" element={<PrintTicketDetails/ >}></Route>
        <Route path="/add" element={<AddMovie/ >}></Route>
        <Route path="/TicketTemplate" element={<TicketTemplate/ >}></Route>

      </Routes>
    </div>

  );
}
export default App;
