import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../store/userSlice';
import { Dialog, Transition } from '@headlessui/react';
import './UserProfileModal.css';
import AvatarImage64 from '../../assets/images/AvatarImage64.jpg';

const UserProfileModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (isLoggedIn && userInfo) {
      setFormData({
        firstName: userInfo.firstName || '',
        lastName: userInfo.lastName || '',
        email: userInfo.email || '',
        phoneNumber: userInfo.phoneNumber || '',
      });
    } else {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      });
    }
  }, [isLoggedIn, userInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    setShowConfirmation(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    // Clear form data on logout
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Transition show={isOpen} as={React.Fragment}>
      {(ref) => (
        <Dialog as="div" className="user-profile-modal" onClose={onClose} initialFocus={ref}>
          <div className="modal-backdrop" aria-hidden="true" />
          <div className="modal-container">
            <div className="modal-content-wrapper">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="modal-content">
                  <Dialog.Title as="h3" className="modal-title">
                    User Profile
                  </Dialog.Title>
                  {isLoggedIn ? (
                    <>
                      <div className="user-profile">
                        <img src={AvatarImage64} alt="User Avatar" className="user-avatar" />
                        <div>
                          <p className="user-name">{`${userInfo.firstName} ${userInfo.lastName}`}</p>
                          <p className="user-email">{userInfo.email}</p>
                          <p className="user-phone">{userInfo.phoneNumber}</p>
                        </div>
                      </div>
                      <div className="user-actions">
                        <button className="action-button">Edit Profile</button>
                        <button className="action-button">My Bookings</button>
                        <button className="action-button logout" onClick={handleLogout}>Logout</button>
                      </div>
                    </>
                  ) : (
                    <form onSubmit={handleLogin} className="login-form">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        required
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        required
                      />
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        required
                      />
                      <button type="submit" className="action-button">Login</button>
                    </form>
                  )}
                  <button className="close-button" onClick={onClose}>
                    &times;
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      )}
    </Transition>
  );
};

export default UserProfileModal;
