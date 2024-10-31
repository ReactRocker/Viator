import React from 'react';
import './ExperienceSummaryCard.css';
import ExperienceCardImage2 from '../../../assets/images/ExperienceCardImage2.jpg';

const ExperienceSummaryCard = () => {
  return (
    <div className="experience-summary-card">
      <img src={ExperienceCardImage2} alt="Eiffel Tower" className="summary-image" />
      <h3 className="summary-title">Eiffel Tower Access to 2nd Floor and Summit Option with Host</h3>
      <p className="summary-location">Paris, France</p>
      <div className="summary-date-container">
        <p className="summary-date">27 Jun 2024 • 13:00 • 2 Adults, 2 Children</p>
      </div>
      <h4 className="summary-header">Summary</h4>
      <div className="summary-item">
        <span>2x Adult tickets</span>
        <span>$550.00</span>
      </div>
      <div className="summary-total">
        <span>Total</span>
        <span>$1100.00</span>
      </div>
      <div className="cancellation-policy">
        <div className="check-circle">
          <span className="check-symbol">✓</span>
        </div>
        <span className="cancellation-text">Free Cancellation up to 24 hours before experience starts (local time)</span>
      </div>
      <p className="summary-footer">Bookings and communication are managed by Viator</p>
    </div>
  );
};

export default ExperienceSummaryCard;
