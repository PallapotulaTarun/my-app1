import React, { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./SeatSelection.css"; 
import {NavLink, useNavigate} from "react-router-dom";

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatCategories, setSeatCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); 
  const [selectedSlot, setSelectedSlot] = useState("11am"); 
  const [nextButtonEnabled, setNextButtonEnabled] = useState(true);
  const [showSeatNumbers, setShowSeatNumbers] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  
  const categoryPrices = {
    Balcony: 700,
    Gold: 500,
    Silver: 350,
  };

  const seatRows = [
    { id: "A", category: "Balcony" },
    { id: "B", category: "Balcony" },
    { id: "C", category: "Balcony" },
    { id: "D", category: "Gold" },
    { id: "E", category: "Gold" },
    { id: "F", category: "Gold" },
    { id: "G", category: "Gold" },
    { id: "H", category: "Gold" },
    { id: "I", category: "Silver" },
    { id: "J", category: "Silver" },
    { id: "K", category: "Silver" },
    { id: "L", category: "Silver" },
  ];

  const seatData = seatRows.flatMap((row) => {
    const seatsInRow = [];
    for (let seatNumber = 1; seatNumber <= 12; seatNumber++) {
      seatsInRow.push({
        id: `${row.id}${seatNumber}`,
        category: row.category,
        row: row.id,
        seatNumber: seatNumber,
        isBooked: false,
      });
    }
    return seatsInRow;
  });

  useEffect(() => {
    const categories = ["All", ...new Set(seatData.map((seat) => seat.category))];
    setSeatCategories(categories);
  }, [seatData]);

  useEffect(() => {
    const amount = selectedSeats.reduce((total, seatId) => {
      const selectedSeat = seatData.find((seat) => seat.id === seatId);
      return total + categoryPrices[selectedSeat.category];
    }, 0);
    setTotalAmount(amount);
  }, [selectedSeats, seatData, categoryPrices]);

  const handleSeatClick = (seat) => {
    if (!seat.isBooked) {
      const updatedSeats = selectedSeats.includes(seat.id)
        ? selectedSeats.filter((selectedSeat) => selectedSeat !== seat.id)
        : [...selectedSeats, seat.id];
      setSelectedSeats(updatedSeats);
      setShowSeatNumbers((prevShowSeatNumbers) => ({
        ...prevShowSeatNumbers,
        [seat.id]: !prevShowSeatNumbers[seat.id],
      }));
    }
  };

  const handleNextButtonClick = () => {
    
    if (selectedSeats.length > 0 && formData.name.trim() !== "" && formData.email.trim() !== "" && formData.date.trim() !== "" && selectedSlot !== "") {
      setShowSuccessPopup(true); // Show the success popup
      setShowTicketDetails(true); // Show the ticket details
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check if all required fields are filled
    // const allFieldsFilled =
    //   formData.name.trim() !== "" &&
    //   formData.email.trim() !== "" &&
    //   formData.date.trim() !== "" &&
    //   selectedSlot !== "" &&
    //   // Check if at least one seat is selected

    // // Enable the "Book Ticket" button if all fields are filled
    setNextButtonEnabled(true);
  };

  const filteredSeats =
    selectedCategory === "All"
      ? seatData
      : seatData.filter((seat) => seat.category === selectedCategory);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  const nav = useNavigate();
  const print=()=>{
    localStorage.setItem('user',JSON.stringify(formData))
    nav('/TicketTemplate')
  }

  const componentRef=useRef();
  const handlePrint= useReactToPrint({
    content: ()=> componentRef.current,
});

  const [showTicketDetails, setShowTicketDetails] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State to control ticket details display
  
  

  return (
    <div>
      <div className="header" to="/home">
        
          <h3>ChalCinema </h3>
      </div>
      <li className="right-btn"><NavLink className="navbar-band" to="/Home" style={{color:"#495057",paddingTop:"0px"}}>Logout</NavLink></li>
      

      <div className="seat-selection-container">
        <h1>Seat Selection</h1>
        <div className="category-selector">
          <span>Select Category: </span>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            {seatCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="slot-selector">
          <span>Select Slot: </span>
          <select
            onChange={(e) => setSelectedSlot(e.target.value)}
            value={selectedSlot}
          >
            {["11am", "2:30pm", "6pm", "9pm"].map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <div className="seat-grid">
          {filteredSeats.map((seat) => (
            <div
              key={seat.id}
              className={`seat ${selectedSeats.includes(seat.id) ? "selected" : ""} ${
                seat.isBooked ? "booked" : ""
              } ${seat.category.toLowerCase()}`}
              onClick={() => handleSeatClick(seat)}
            >
              {showSeatNumbers[seat.id] && `${seat.row}-${seat.seatNumber}`}
              {selectedSeats.includes(seat.id) && (
                <div className="seat-price">
                  {categoryPrices[seat.category]}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="selected-seats">
          <h2>Selected Seats</h2>
          <ul>
            {selectedSeats.map((seatId, index) => {
              const selectedSeat = seatData.find((seat) => seat.id === seatId);
              return (
                <li key={index}>
                  {selectedSeat.row}-{selectedSeat.seatNumber} ({selectedSeat.category}) - {categoryPrices[selectedSeat.category]}
                </li>
              );
            })}
          </ul>
          <div className="total-amount">
            Total Amount: {totalAmount}
          </div>
        </div>

        <div className="form-fields">
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <button
          onClick={handleNextButtonClick}
          disabled={!nextButtonEnabled}
          className="next-button"
        >
          Book Ticket
        </button>
        
        {/* Success popup */}
        {showSuccessPopup && (
          <div className="success-popup">
            <p>Ticket booked successfully!</p>
          </div>
        )}
        
        {/* const ticket = {
          movie : 
        } */}


        {showTicketDetails && (
          <div className="ticket-details" ref={componentRef} >
            <h2>Your Ticket Details</h2>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Date: {formData.date}</p>
            <p>Slot: {selectedSlot}</p>
            <h3>Selected Seats:</h3>
            <ul>
              {selectedSeats.map((seatId, index) => {
                const selectedSeat = seatData.find((seat) => seat.id === seatId);
                return (
                  <li key={index}>
                    Seat: {selectedSeat.row}-{selectedSeat.seatNumber} ({selectedSeat.category})
                    Price: {categoryPrices[selectedSeat.category]}
                  </li>
                );
              })}
            </ul>
            <p>Total Amount: {totalAmount}</p>
            
          </div>
        )}
      </div>
      <div className="text-center">
      <button onClick={print} className="print-button" >
      Print 
    </button>
      </div>

      <div className="footer">
        <p>© 2023 Movie Ticket Booking</p>
      </div>
    </div>
  );
};

export default SeatSelection;