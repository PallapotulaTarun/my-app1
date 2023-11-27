import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { cities } from "./Citydata"; // Import the cities array
import "./Cities.css";

export default function Cities() {
  const citiesPerRow = 3; // Number of cities per row

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    // If the clicked city is already selected, unselect it
    if (selectedCity === city) {
      setSelectedCity(null);
    } else {
      // Otherwise, set the selected city
      setSelectedCity(city);
      // Implement the logic for what should happen when a city link is clicked here
      // For example, you can navigate to a specific route based on the selected city
      console.log(`Clicked on city: ${city}`);
    }
  };

  const createRows = () => {
    const rows = [];

    for (let i = 0; i < cities.length; i += citiesPerRow) {
      const rowCities = cities.slice(i, i + citiesPerRow);

      rows.push(
        <div className="city-row" key={i}>
          {rowCities.map((city, index) => (
            <div className="city-block" key={index}>
              <button
                className={`city-button ${selectedCity === city ? "clicked" : ""
                  }`}
                onClick={() => handleCityClick(city)}
              >
                {city}
              </button>
            </div>
          ))}
        </div>
      );
    }

    return rows;
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-default">
          <ul>
            <li>
              <NavLink className="navbar-band" to="/home">
                Chalo Cinema
              </NavLink>
            </li>
           
            <li className="wrapper">
              <input className="search-input" placeholder="search"></input>
              <BsSearch className="search-icon" />
            </li>
          </ul>
        </nav>
      </div>

      <div className="cities-container">
        <h2>Select City</h2>
        <div className="city-rows">{createRows()}</div>
      </div>
      <div className="get-started-button">
        <NavLink to="/movies"><button className="get-started-btn">Get Started</button></NavLink>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="line-footer">
          <p className="line"></p>
          <h3>Chalo Cinema</h3>
          <p className="line"></p>
        </div>
        <div className="social-media">
          <a href="/">
            <FaFacebookSquare className="social-icons" />
          </a>
          <a href="/">
            <FaInstagram className="social-icons" />
          </a>
          <a href="/">
            <FaYoutube className="social-icons" />
          </a>
          <a href="/">
            <FaTwitterSquare className="social-icons" />
          </a>
        </div>

        <div className="about">
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Help</a>
        </div>
        <p className="copy-right">
          Copyright 2023 © Chalo Cinema Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
      {/* End of Footer */}
    </div>
  );
}
