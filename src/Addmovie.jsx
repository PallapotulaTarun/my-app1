import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import './Addmovie.css';

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
        <div className="m1">
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
            <div className="Add"><button >Submit</button></div>
            
          </form>
        </div>
      </div>
     );
}
 
export default AddMovie;