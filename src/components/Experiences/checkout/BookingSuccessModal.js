import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCheckout } from '../../../store/checkoutSlice';
import { Dialog, Transition } from '@headlessui/react';
import ExperienceSummaryCard from './ExperienceSummaryCard';
import './BookingSuccessModal.css';

const BookingSuccessModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const experienceDetails = useSelector(state => state.checkout.experienceDetails);

  const handleBrowseExperiences = () => {
    dispatch(resetCheckout());
    onClose();
    // Add navigation logic here
  };

  // This function will be called when trying to close the modal
  const handleClose = () => {
    // Do nothing, effectively preventing the modal from closing when clicking outside
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="booking-success-modal" onClose={handleClose}>
        <div className="booking-success-modal-container">
          <div className="booking-success-modal-content-wrapper">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="booking-success-modal-content">
                <button onClick={handleBrowseExperiences} className="booking-success-modal-close">
                  &times;
                </button>
                <div className="booking-success-modal-layout">
                  <div className="booking-success-modal-left">
                    <img src="/path-to-your-image.jpg" alt="Booking Success" className="booking-success-image" />
                    <h2 className="booking-success-title">Booking Successful!</h2>
                    <p className="booking-success-text">
                      The experience has been booked and added to your booked experiences.
                    </p>
                    <p className="booking-success-text">
                      Viator manages your booking directly with the supplier. You should receive a confirmation email directly from Viator to confirm your booking.
                    </p>
                    <button onClick={handleBrowseExperiences} className="browse-experiences-button">
                      Browse other Experiences
                    </button>
                  </div>
                  <div className="booking-success-modal-right">
                    <ExperienceSummaryCard experience={experienceDetails} />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingSuccessModal;
