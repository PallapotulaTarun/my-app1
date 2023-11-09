import React, { useState } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    cardExpiryDate: "",
    cardCvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API call to process the payment
    console.log(formData);

    // You can add your payment processing logic here, e.g., using a payment gateway.
    // After the payment is processed, you can redirect the user to a success page or show a confirmation message.
    navigate("/TicketDetails");
  };

  return (
    <div className="payment-page">
      <div className="payment-form">
        <h2>Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="cardName">Card Name:</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="cardExpiryDate">Card Expiry Date:</label>
            <input
              type="date"
              id="cardExpiryDate"
              name="cardExpiryDate"
              value={formData.cardExpiryDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="cardCvv">Card CVV:</label>
            <input
              type="text"
              id="cardCvv"
              name="cardCvv"
              value={formData.cardCvv}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Pay Now
          </button>
        </form>
      </div>
    </div>
    
  );
};

export default Payment;