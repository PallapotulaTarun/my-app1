import React, { useState, useEffect } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const MovieDisplay = () => {
  const [listdata, setListData] = useState([]);
  const [newMovie, setNewMovie] = useState({
    movieName: "",
    theatreName: "",
    charges: "",
    location: "",
    rating: "",
    image: "",
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch movie data from your API or data source when the component mounts
    fetch("https://localhost:44360/api/Movie")
      .then((res) => res.json())
      .then((data) => setListData(data))
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  const renderdata = () => {
    if (listdata && listdata.length > 0) {
      return listdata.map((Movie) => (
        <div className="card-container" key={Movie.movieId}>
          <div className="card-body">
            <img src={Movie.image} alt="img" />
            <h4>{Movie.movieName}</h4>
            <div className="card-flex">
              <p style={{ paddingRight: "40px" }}>Theatre: {Movie.theatreName}</p>
              <p style={{ paddingLeft: "40px" }}>Price: {Movie.charges}</p>
            </div>
            <div className="card-flex">
              <p style={{ paddingRight: "30px" }}>Location: {Movie.location}</p>
              <p style={{ paddingLeft: "40px" }}>Rating: {Movie.rating}</p>
            </div>
            <button className="card-btn" onClick={() => handleDelete(Movie.movieId)}>
              Delete
            </button>
          </div>
        </div>
      ));
    } else {
      return <h2>No movies available.</h2>;
    }
  };

  const handleDelete = (movieId) => {
    // Make an HTTP DELETE request to your API to delete the movie by movieId
    fetch(`https://localhost:44360/api/Movie/${movieId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Successful deletion
          alert(`Deleted movie with ID: ${movieId}`);
          
          // After successful deletion from API, update the state to remove the deleted movie
          const updatedMovieData = listdata.filter((movie) => movie.movieId !== movieId);
          setListData(updatedMovieData);
        } else {
          // Handle error here (e.g., show an error message)
          console.error('Error deleting movie:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error deleting movie:', error);
      });
  };

  const handleAddMovie = () => {
    setShowModal(true); // Show the modal when Add Movie is clicked
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Make an HTTP POST request to your API to add the new movie
    fetch("https://localhost:44360/api/Movie", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then((response) => {
        if (response.ok) {
          // Successful addition
          alert('Movie added successfully.');
          // Clear the form
          setNewMovie({
            movieName: "",
            theatreName: "",
            charges: "",
            location: "",
            rating: "",
            image: "",
          });
          
          setShowModal(false);
          
          fetch("https://localhost:44360/api/Movie")
            .then((res) => res.json())
            .then((data) => setListData(data))
            .catch((error) => {
              console.error("Error fetching movies:", error);
            });
        } else {
          
          console.error('Error adding movie:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error adding movie:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const nav = useNavigate();

  return (
    <div>
      {renderdata()}
      <button className="btn-btn-primary"  onClick={()=>nav('/add')}  >
        Add Movie
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Movie</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="movieName">Movie Name:</label>
                <input
                  type="text"
                  name="movieName"
                  value={newMovie.movieName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="theatreName">Theatre Name:</label>
                <input
                  type="text"
                  name="theatreName"
                  value={newMovie.theatreName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="charges">Charges:</label>
                <input
                  type="text"
                  name="charges"
                  value={newMovie.charges}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  name="location"
                  value={newMovie.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="rating">Rating:</label>
                <input
                  type="text"
                  name="rating"
                  value={newMovie.rating}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="image">Image URL:</label>
                <input
                  type="text"
                  name="image"
                  value={newMovie.image}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Add</button>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
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
        <p className="copy-right">
          Copyright 2023 © Chalo Cinema Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default MovieDisplay;
