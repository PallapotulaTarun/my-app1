import React from "react";
import "./AdminProfile.css";
import pic10 from "./Images/image18.png";
import {NavLink} from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

export default function AdminProfile() {
  // Define default AdminProfile details
  const adminProfile = {
    name: "Tarun",
    email: "Tarun@gmail.com",
    contactNumber: "630*******",
    image: "admin-image.jpg",
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
                   <li className="right-btn"><NavLink className="navbar-band" to="/Home" style={{color:"#495057",paddingTop:"10px"}}>Logout</NavLink></li>
                </ul>   

            </nav>
        </div>
    <div className="admin-profile-container">
      <div className="admin-profile-box">
        <div className="admin-profile-picture">
          <img src={pic10} alt="Admin" />
        </div>
        <div className="admin-profile-details">
          <h3>Admin Profile</h3>
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{adminProfile.name}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{adminProfile.email}</td>
              </tr>
              <tr>
                <td>Contact:</td>
                <td>{adminProfile.contactNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
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
