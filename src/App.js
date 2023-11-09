
import React from 'react';

import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './RoutingDemos/Contact';
 import Header from './RoutingDemos/Header';
 import RegistrationForm from './RegistrationForm';
 import LoginForm from './LoginForm1';
 import Movies from './Movies';
import Main from './mainpage';
import MyForm from './TicketBooking';
import Ticket from './Ticket';
import Cities from './Cities';
import Payment from './Payment';
import Admin from './Admin';
import AdminDashboard from './AdminDashboard';
import Adminmovies from './Adminmovies';
import AdminProfile from './AdminProfile';
import AdminViewTicket from './AdminViewTicket';

  
  

//import Myticket from './BookedTicket';
function App() { 

  
  return (
    <div>
      
      <Main/>
     
      
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/header" element={<Header/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/registration" element={<RegistrationForm/>}></Route>
      <Route path="/LoginForm" element={<LoginForm/>}></Route>
      <Route path="/book" element={<MyForm/>}></Route>
      <Route path="/Movies" element={<Movies/>}></Route>
      <Route path = "/Ticket" element={<Ticket/>}></Route>
      <Route path = "/Cities" element={<Cities/>}></Route>
      <Route path = "/Payment" element={<Payment/>}></Route>
      <Route path = "/Admin" element={<Admin/>}></Route>
      <Route path = "/AdminDashboard" element={<AdminDashboard/>}></Route>
      <Route path = "/Adminmovies" element={<Adminmovies/>}></Route>
      <Route path = "/AdminProfile" element={<AdminProfile/>}></Route>
      <Route path = "/AdminViewTicket" element={<AdminViewTicket/>}></Route>

      
      

      {/* <Route path = "/myticket" element={<Myticket/>}></Route> */}
     

    </Routes>
   

    </div>
    
      

    
  );
}


export default App;
