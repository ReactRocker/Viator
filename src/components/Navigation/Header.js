import React, { useState } from 'react';
import AvatarImage40 from '../../assets/images/AvatarImage40.jpg';
import './Header.css';
import UserProfileModal from "../UserProfile/UserProfileModal";

const Header = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);

  const handleLogin = () => {
    // Add login logic here
    setIsLoggedIn(true);
    openProfileModal();
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Swaggie</h1>
        {isLoggedIn ? (
          <button className="profile-button" onClick={openProfileModal}>
            <img src={AvatarImage40} alt="Profile" className="profile-avatar" />
          </button>
        ) : (
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
      <UserProfileModal isOpen={isProfileModalOpen} onClose={closeProfileModal} />
    </header>
  );
};

export default Header;
