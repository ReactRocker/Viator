import React from 'react';
import './ContactDetailsSummaryCard.css';

const ContactDetailsSummaryCard = ({ contactDetails }) => {
  return (
    <div className="contact-details-summary-card">
      <div className="summary-header">
        <h3 className="summary-title">Contact Details</h3>
        <button className="edit-button">Edit</button>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <label className="contact-label">FULL NAME</label>
          <p className="contact-value">{contactDetails.firstName} {contactDetails.lastName}</p>
        </div>
        <div className="contact-item">
          <label className="contact-label">PHONE NUMBER</label>
          <p className="contact-value">{contactDetails.phoneNumber}</p>
        </div>
        <div className="contact-item">
          <label className="contact-label">EMAIL ADDRESS</label>
          <p className="contact-value">{contactDetails.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsSummaryCard;
