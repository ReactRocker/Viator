import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ experience, onClick }) => {
  return (
    <div className="experience-card" onClick={onClick}>
      <img src={experience.image} alt={experience.title} className="experience-image" />
      <div className="experience-details">
        <h2 className="experience-title">{experience.title}</h2>
        <p className="experience-location">{experience.location}</p>
        <p className="experience-price">From ${experience.price}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
