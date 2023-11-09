import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";

import {NavLink} from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./RegisterForm.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import pic11 from "./Images/image11.png";
function RegisterForm() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handlefirstNameChange = (event) => {
    setfirstName(event.target.value);
  };
  
  const handlelastNamechange = (event) => {
    setlastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleconfirmpasswordchange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
  
    // Client-side validation
    // if (!firstName || !lastName || !email || !password || !confirmpassword) {
    //   setError('Please fill in all fields');
    //   return;
    // }
    if (password !== confirmpassword) {
      setError('Passwords do not match');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (firstName.trim().length === 0) {
      setError('First name cannot be empty');
      return;
    }
    if (lastName.trim().length === 0) {
      setError('Last name cannot be empty');
      return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      setError(<p>Password must contain at least 1 letter, lowercase letter, digit, and special char, and be at least 8 char long</p>)

      return;
    }
  
    // Send POST request to server
    fetch('https://localhost:44360/api/Account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // If the registration is successful, display a success message
          alert('Registration successful');
         
        } else {
          // If the registration fails, display an error message
          setError('Enter Valid Details !!');
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
                    <li className="right-btn"><NavLink className="navbar-band" to="/Cities" style={{color:"#495057",paddingTop:"10px"}}>Login</NavLink></li>
                    <li className="rrr"><NavLink className="navbar-band" to="/LoginForm" style={{paddingRight:"0px"}}>Location</NavLink>
                        <FaMapMarkerAlt style={{background:"none",color:"#e9ecef",paddingLeft:"0px"}} className="search-icon"/>
                    </li>
                </ul>   

            </nav>
        </div>
    <div className='signup'>
   
      <img src={pic11} alt="img" className='img-signup'/>
    <div className="register-form-container">
      <form onSubmit={handleButtonClick} className="form-css">
        <h2>SIGN UP</h2>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder='Enter Fist Name'
            type="text"
            id="firstName"
            value={firstName}
            onChange={handlefirstNameChange}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder='Enter Last Name'
            type="text"
            id="lastName"
            value={lastName}
            onChange={handlelastNamechange}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
          placeholder='Enter Email'
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
          placeholder='Enter Password'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
          placeholder='Enter Comfirm Password'
            type="password"
            id="password"
            value={confirmpassword}
            onChange={handleconfirmpasswordchange}
            className="form-control"
          />
        </div>
        {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
        <button type="submit">
          SIGN UP
        </button>
        {/* <Link to='/login' className='btn btn-primary'>SIGN UP</Link> */}
        <br/>
        <Link to='/LoginForm' className='already-user-css'>Already User ?</Link>
      </form>
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

export default RegisterForm;