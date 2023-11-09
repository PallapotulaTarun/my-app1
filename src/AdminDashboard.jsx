import React, { Component } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import MovieDisplay from "./Adminmovies";
import pic10 from "./Images/image17.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import pic9 from "./Images/image19.jpg";

let url = "https://localhost:44360/api/Movie";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MovieData: [],
      showMovies: false, // Flag to control whether to show movies or not
    };
  }

  componentDidMount() {
    // Fetch the list of movies and set the state
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ MovieData: data });
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }

  toggleMovies = () => {
    this.setState((prevState) => ({
      showMovies: !prevState.showMovies,
    }));
  };

  render() {
    const { MovieData, showMovies } = this.state;

    // Define the width and height for the images
    const imageSize = {
      width: "200px", // Adjust the width as needed
      height: "200px", // Adjust the height as needed
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
              <li>
                {" "}
                <NavLink to="/AdminProfile">
                  <BsPersonCircle className="Admin-icon" />
                </NavLink>
              </li>
              <li className="right-btn">
                <NavLink
                  className="navbar-band"
                  to="/Home"
                  style={{ color: "#495057", paddingTop: "10px" }}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink to="/AdminViewTicket"> {/* Wrap pic9 with NavLink */}
              <img
                src={pic9}
                alt="Left Image"
                style={{ ...imageSize, marginRight: "500px", marginLeft: "300px" }}
              />
            </NavLink>
            <button onClick={this.toggleMovies}>
              <img
                src={pic10}
                alt="Movie"
                style={{ ...imageSize, cursor: "pointer" }} // Apply imageSize and cursor styles
              />
            </button>
          </div>
          {showMovies && <MovieDisplay listdata={MovieData} />}
        </div>

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
      </div>
    );
  }
}

export default Movie;
