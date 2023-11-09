import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import {NavLink} from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function About() {
  // Sample ticket data
  const [ticketDetails, setTicketDetails] = useState([
    {
      id: 1,
      name: "Tarun",
      email: "tarun@gmail.com",
      category: "Gold",
      seatNumber: "A1",
      amount: 500,
      date: "2023-09-21",
    },
    {
      id: 2,
      name: "Smith",
      email: "smith@gmail.com",
      category: "Balcony",
      seatNumber: "B2",
      amount: 700,
      date: "2023-09-22",
    },
    {
      id: 3,
      name: "Johnson",
      email: "johnson@gmail.com",
      category: "Gold",
      seatNumber: "C3",
      amount: 500,
      date: "2023-09-23",
    },
    {
      id: 4,
      name: "Ravi",
      email: "ravi@gmail.com",
      category: "Gold",
      seatNumber: "A2",
      amount: 500,
      date: "2023-09-24",
    },
    {
      id: 5,
      name: "Karun",
      email: "karun@gmail.com",
      category: "Balcony",
      seatNumber: "B3",
      amount: 700,
      date: "2023-09-25",
    },
    {
      id: 6,
      name: "Hemanth",
      email: "hemanth@gmail.com",
      category: "Gold",
      seatNumber: "C4",
      amount: 500,
      date: "2023-09-26",
    },
    // Add more ticket data as needed
  ]);

  const handleCancel = (id) => {
    const updatedTicketDetails = ticketDetails.filter((ticket) => ticket.id !== id);
    setTicketDetails(updatedTicketDetails);
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "left",
  };

  const evenRowStyle = {
    backgroundColor: "#f2f2f2",
  };

  const cancelButtonStyle = {
    backgroundColor: "#ff0000", // Red color
    color: "#fff",             // White text color
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
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
                   <li className="rrr"><NavLink className="navbar-band" to="/Cities"  style={{paddingRight:"0px"}}>Location</NavLink>
                        <FaMapMarkerAlt style={{background:"none",color:"#e9ecef",paddingLeft:"0px"}} className="search-icon"/>
                    </li>
                </ul>   

            </nav>
        </div>
      <h2>Ticket Details</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Seat Number</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ticketDetails.map((ticket) => (
            <tr key={ticket.id} style={ticket.id % 2 === 0 ? evenRowStyle : {}}>
              <td style={tdStyle}>{ticket.name}</td>
              <td style={tdStyle}>{ticket.email}</td>
              <td style={tdStyle}>{ticket.category}</td>
              <td style={tdStyle}>{ticket.seatNumber}</td>
              <td style={tdStyle}>{ticket.date}</td>
              <td style={tdStyle}>${ticket.amount.toFixed(2)}</td>
              <td style={tdStyle}>
                <button
                  style={cancelButtonStyle} 
                  onClick={() => handleCancel(ticket.id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
