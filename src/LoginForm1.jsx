import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import {NavLink} from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// import { Container } from 'react-bootstrap';
import pic10 from "./Images/image10.jpg"
import { Link, Navigate } from 'react-router-dom';

import './Login.css'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch('https://localhost:44360/api/Account/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // If the login is successful, set loggedIn to true
          setLoggedIn(true);
          localStorage.setItem("email",JSON.stringify(email));
        } else {
          // If the login fails, display an error message
          setError('Invalid email or password');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('An error occurred');
      });
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
                   
                </ul>   

            </nav>
        </div>
    <div className='main-form'>
      <img src={pic10} alt="img" className='img-login' />
 
    <div className='login-container'>
      {loggedIn ? (
        // Redirect to the dashboard page if loggedIn is true
        <Navigate to="/Cities" />
      ) : (
        // Display the login form if loggedIn is false
        <form onSubmit={handleFormSubmit} className="form-css">
          <div>
            <h2>Login</h2>
            <label htmlFor="email">Email:</label>
            <input  placeholder='Enter Email' type="email" id="email" value={email} onChange={handleEmailChange}/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
             placeholder='Enter Password'
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}

          <button type="submit">LOGIN</button>
          <br></br>
          <Link to="/registration" className='newuser'>New User?</Link>
        </form>
      )}
    </div>
    
   </div>
   <div className="footer">
   <div className="line-footer">
   <p className="line"></p>
   <h3>Chalo Cinema</h3>
   <p className="line"></p>
   </div>
   <div className="social-media">
     <a href="/"><FaFacebookSquare className="social-icons"/></a>
     <a href="/"><FaInstagram className="social-icons"/></a>
     <a href="/"><FaYoutube className="social-icons"/></a>
     <a href="/"><FaTwitterSquare className="social-icons"/></a>
   </div>
   
     <div className="about">
       <a href="/">About</a>
       <a href="/">Contact</a>
       <a href="/">Help</a>
     </div>
   <p className="copy-right">Copyright 2023 © Chalo Cinema Pvt. Ltd. All Rights Reserved.</p>
 </div>
 </div>
  );
}


export default LoginForm;