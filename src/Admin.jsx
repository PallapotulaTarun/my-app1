import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import pic10 from "./Images/image16.png"; // Import your image
import {  Navigate } from 'react-router-dom';

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Check if the provided email and password match the default credentials
    if (email === "Tarun@gmail.com" && password === "Tarun@123") {
      setLoggedIn(true);
      setErrorMessage("");
    } else {
      setLoggedIn(false);
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
        <div>
            <nav className="navbar navbar-default">
                <ul>  
                    <li><NavLink className="navbar-band" to="/home">ChalCinema</NavLink></li>
                    <li class="wrapper">
                        <input class="search-input" placeholder="search"></input> 
                        <BsSearch className="search-icon"/>
                   </li>
                   <li className="rrr"><NavLink className="navbar-band" to="/Cities"  style={{paddingRight:"0px"}}>Location</NavLink>
                        <FaMapMarkerAlt style={{background:"none",color:"#e9ecef",paddingLeft:"0px"}} className="search-icon"/>
                    </li>
                </ul>   

            </nav>
        </div>
    
    
    <div className="main-form">
      <img src={pic10} alt="Login" className="img-login" /> {/* Add your image here */}

      <div className="login-container">
        <h2>Admin Login</h2>
        {loggedIn ? (
          <Navigate to="/AdminDashboard" />
        ) : (
          <form onSubmit={handleLogin} className="form-css">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter Password"
                required
              />
            </div>
            <button type="submit">LOGIN</button>
            <br />
            {errorMessage && (
              <div className="error-message" style={{ color: "red" }}>
                {errorMessage}
              </div>
              
            )}
          </form>
        )}
      </div>
      
    </div>
    </div>
    
  );
}
