import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieDisplay = ({ listdata }) => {
  const renderdata = () => {
    if (listdata && listdata.length > 0) {
      return listdata.map((Movie) => (
        
        <div className="card-container" key={Movie.movieId}>
          
            <div className="card-body">
            
              <img src={Movie.image} alt="img" />             
              <h4>{Movie.movieName}</h4>
              <div className="card-flex">
              <p style={{paddingRight:"40px"}}>Theatre:{Movie.theatreName}</p>
              <p style={{paddingLeft:"40px"}}>Price: {Movie.charges}</p>
              </div>
              <div className="card-flex">
              <p style={{paddingRight:"30px"}}>Location: {Movie.location}</p>
              <p style={{paddingLeft:"40px"}}>Rating: {Movie.rating}</p>
              </div >
                <Link to={'/Book'} className="card-btn">
                   Book Movie
                </Link>
            </div>
          </div>
        
      ));
    } else {
      return <h2>oops!</h2>;
    }
  };
  <div>
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

  return (
    <div>
      
      {renderdata()}
    </div>
  );
  
};


export default MovieDisplay;