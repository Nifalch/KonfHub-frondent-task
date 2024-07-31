import React from 'react';
import './TicketCard.css';

const TicketCard = ({ title, description, venue, additionalDetails, availability, price }) => {
  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <h2>{title}</h2>
      </div>
      <div className="ticket-body">
        <p>{description}</p>
        <p className="venue">
          <strong>Venue:</strong> {venue}
        </p>
        <p className="additional-details">{additionalDetails}</p>
        <p className="availability">
          <strong>Available Till:</strong> {availability}
        </p>
        <p className="price">
          <strong></strong> ₹{price}
        </p>
      </div>
      <div className="ticket-footer">
        <button className="register-button">Register</button>
      </div>
    </div>
  );
};

export default TicketCard;
