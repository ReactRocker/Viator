import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ExperiencePage from './components/Experiences/ExperiencePage';
import Home from './components/Experiences/Home';
import Sidebar from './components/Navigation/Sidebar';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('experiences');
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedExperience(null);
  };

  const handleExperienceClick = (experienceId) => {
    setSelectedExperience(experienceId);
    setCurrentPage('experience');
  };

  const handleCloseExperience = () => {
    setSelectedExperience(null);
    setCurrentPage('experiences');
  };

  return (
    <Provider store={store}>
      <div className="app">
        <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
        <div className="main-content">
          {currentPage === 'experiences' && <Home onExperienceClick={handleExperienceClick} />}
          {currentPage === 'experience' && <ExperiencePage experienceId={selectedExperience} onClose={handleCloseExperience} />}
        </div>
      </div>
    </Provider>
  );
}

export default App;
