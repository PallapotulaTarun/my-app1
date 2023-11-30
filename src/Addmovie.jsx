import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import './AddMovie.css'; // Import your CSS file

const AddMovie = () => {
  const [listdata, setListData] = useState([]);
  const [newMovie, setNewMovie] = useState({
    movieName: "",
    theatreName: "",
    charges: "",
    location: "",
    rating: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://localhost:44360/api/Movie", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then((response) => {
        if (response.ok) {
          alert('Movie added successfully.');
          setNewMovie({
            movieName: "",
            theatreName: "",
            charges: "",
            location: "",
            rating: "",
            image: "",
          });

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

  return (
    <div className="m">
      <nav className="navbar navbar-default">
        <ul>
          <li>
            <NavLink className="navbar-brand" to="/home">
              Chalo Cinema
            </NavLink>
          </li>
          <li>
            <NavLink to="/AdminProfile">
              <BsPersonCircle className="Admin-icon" />
            </NavLink>
          </li>
          <li className="right-btn">
            <NavLink
              className="navbar-brand"
              to="/Home"
              style={{ color: "#495057", paddingTop: "10px" }}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="m1">
        <h2>Add New Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="movieName" className="form-label">
              Movie Name:
            </label>
            <input
              type="text"
              name="movieName"
              value={newMovie.movieName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="theatreName" className="form-label">
              Theatre Name:
            </label>
            <input
              type="text"
              name="theatreName"
              value={newMovie.theatreName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="charges" className="form-label">
              Charges:
            </label>
            <input
              type="text"
              name="charges"
              value={newMovie.charges}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <input
              type="text"
              name="location"
              value={newMovie.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating" className="form-label">
              Rating:
            </label>
            <input
              type="text"
              name="rating"
              value={newMovie.rating}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image" className="form-label">
              Image URL:
            </label>
            <input
              type="text"
              name="image"
              value={newMovie.image}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="Add">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
