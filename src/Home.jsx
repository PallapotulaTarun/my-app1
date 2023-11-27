
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import pic1 from "./Images/image1.jpeg";
import pic3 from "./Images/image3.jpg";
import pic4 from "./Images/image4.jpeg";
import pic5 from "./Images/image2.jpg";
import pic6 from "./Images/image6.jpg";
import pic7 from "./Images/image7.jpg";
import pic8 from "./Images/image8.jpeg";
import pic9 from "./Images/image9.jpg";
import SimpleImageSlider from "react-simple-image-slider";



const images = [
  { url: pic5 },
  { url: pic4 },
  { url: pic1 },
  { url: pic3 },
];

function Home() {
  return (
     
        <div>
          <div>
            <nav className="navbar navbar-default">
              <ul>
                <li>
                  <NavLink className="navbar-band" to="/home">
                    ChalCinema
                  </NavLink>
                </li>
                <li className="wrapper">
                  <input className="search-input" placeholder="search"></input>
                  <BsSearch className="search-icon" />
                </li>
                <li className="right-btn">
                  <NavLink
                    className="navbar-band"
                    to="/LoginForm"
                    style={{ color: "#495057", paddingTop: "10px", }}
                  >
                    Login
                  </NavLink>
                </li>
                {/* Add Admin Login button */}
                <li className="right-btn">
                  <NavLink
                    className="navbar-band"
                    to="/Admin"
                    style={{ color: "#495057", paddingTop: "10px" }}
                  >
                    Admin
                  </NavLink>
                </li>
                
                
              </ul>
            </nav>
          </div>
          <div className="img-slider">
            <SimpleImageSlider
              width={600}
              height={300}
              images={images}
              showBullets={true}
              navSize={30}
              navMargin={1}
              navStyle={1}
            />
          </div>

          <div className="recommended">
            <h4>Upcoming Movies</h4>
            <div className="recom-img">
              <div>
                <img src={pic6} alt="fireSpot" />
                <div className="img-flex">
                  <h5>Vaathi</h5>
                  <p>125.5K Likes</p>
                </div>
              </div>

              <div>
                <img src={pic7} alt="fireSpot" />
                <div className="img-flex">
                  <h5>Shehzada</h5>
                  <p>95.2K Likes</p>
                </div>
              </div>

              <div>
                <img src={pic8} alt="fireSpot" />
                <div className="img-flex">
                  <h5>varisu</h5>
                  <p>83.9K Likes</p>
                </div>
              </div>

              <div>
                <img src={pic9} alt="fireSpot" />
                <div className="img-flex">
                  <h5>Bholaa</h5>
                  <p>195.9K Likes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="line-footer">
              <p className="line"></p>
              <h3>ChalCinema</h3>
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
        </div>
      
  
  );
}

export default Home;
