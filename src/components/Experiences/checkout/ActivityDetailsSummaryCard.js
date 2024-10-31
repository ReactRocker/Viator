import React from 'react';
import './ActivityDetailsSummaryCard.css';

const ActivityDetailsSummaryCard = ({ activityDetails }) => {
  return (
    <div className="activity-details-summary-card">
      <div className="summary-header">
        <h3 className="summary-title">Activity Details</h3>
        <button className="edit-button">Edit</button>
      </div>
      <div className="activity-info">
        <div className="activity-item">
          <label className="activity-label">PRIMARY TRAVELER</label>
          <p className="activity-value">{activityDetails.firstName} {activityDetails.lastName}</p>
        </div>
        <div className="activity-item">
          <label className="activity-label">MEETING POINT</label>
          <p className="activity-value">{activityDetails.meetingPoint}</p>
        </div>
        <div className="activity-item">
          <label className="activity-label">TOUR LANGUAGE</label>
          <p className="activity-value">{activityDetails.tourLanguage}</p>
        </div>
        {activityDetails.specialRequirements && (
          <div className="activity-item">
            <label className="activity-label">SPECIAL REQUIREMENTS</label>
            <p className="activity-value">{activityDetails.specialRequirements}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityDetailsSummaryCard;
