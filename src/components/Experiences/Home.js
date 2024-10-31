import React from 'react';
import Header from '../Navigation/Header';
import ExperienceCard from './ExperienceCard';
import './Home.css';

const Home = ({ onExperienceClick }) => {
  const experiences = [
    { id: 1, title: 'Private Scottsdale Off-Road Jeep Tour', location: 'Scottsdale, USA', price: 550, image: 'https://via.placeholder.com/300x200' },
    { id: 2, title: 'Eiffel Tower Access with Host', location: 'Paris, France', price: 75, image: 'https://via.placeholder.com/300x200' },
    { id: 3, title: 'Grand Canyon Helicopter Tour', location: 'Las Vegas, USA', price: 399, image: 'https://via.placeholder.com/300x200' },
  ];

  return (
    <div className="home">
      <Header />
      <div className="home-container">
        <h2 className="home-header">Experiences</h2>
        <div className="experience-grid">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onClick={() => onExperienceClick(experience.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
