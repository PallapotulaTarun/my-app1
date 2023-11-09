import React from "react";

const Ticket = ({ formData, selectedSeats, categoryPrices, seatData, selectedSlot }) => {
  return (
    <div className="ticket-printable">
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
              Price: ${categoryPrices[selectedSeat.category]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ticket;