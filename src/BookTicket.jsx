import React, { useState, useEffect } from 'react';

function BookTicketController() {
  const [tickets, setTickets] = useState([]);
  
  useEffect(() => {
    fetch('https://localhost:44387/api/Tickets')
      .then(response => response.json())
      .then(data => setTickets(data));
  }, []);
  
  const handleBook = (ticketId) => {
    // Handle booking logic here
  };
  
  const handleCancel = (ticketId) => {
    // Handle cancelation logic here
  };
  
  return (
    <div className='Ticket'>
      
      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Seat ID</th>
            <th>Price</th>
            <th>Date</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.ticketId}>
              <td>{ticket.ticketId}</td>
              <td>{ticket.seatId}</td>
              <td>{ticket.price}</td>
              <td>{ticket.date}</td>
              <td>
                <button onClick={() => handleBook(ticket.ticketId)}>Book</button>
                <button onClick={() => handleCancel(ticket.ticketId)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookTicketController;