import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onNavigate, currentPage }) => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <button 
              onClick={() => onNavigate('experiences')} 
              className={`sidebar-button ${currentPage === 'experiences' ? 'active' : ''}`}
            >
              Experiences
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
