import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeCheckout, setCurrentStep } from '../../../store/checkoutSlice';
import { Dialog, Transition } from '@headlessui/react';
import ContactDetails from '../../ContactDetails/ContactDetails';
import PaymentDetails from './PaymentDetails';
import ExperienceSummaryCard from './ExperienceSummaryCard';
import ContactDetailsSummaryCard from './ContactDetailsSummaryCard';
import ActivityDetailsSummaryCard from './ActivityDetailsSummaryCard';
import './CheckoutModal.css';
import TimerIcon from '../../../assets/images/icons/timer.svg';
import ActivityDetails from "../../ActivityDetails/ActivityDetails";

const CheckoutModal = () => {
  const dispatch = useDispatch();
  const { isOpen, currentStep, activityDetails, bookingSuccess } = useSelector((state) => state.checkout);
  const contactDetails = useSelector((state) => state.user.userInfo);
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    if (isOpen && !bookingSuccess) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen, bookingSuccess]);

  useEffect(() => {
    if (bookingSuccess) {
      dispatch(closeCheckout());
    }
  }, [bookingSuccess, dispatch]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleClose = () => {
    dispatch(closeCheckout());
  };

  const handleNext = () => {
    console.log("handleNext called in CheckoutModal"); // Add this line
    dispatch(setCurrentStep(currentStep + 1));
  };

  const handlePrev = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ContactDetails onNext={handleNext} />;
      case 1:
        return <ActivityDetails onNext={handleNext} onPrev={handlePrev} />;
      case 2:
        return <PaymentDetails onPrev={handlePrev} />;
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="checkout-modal" onClose={handleClose}>
        <div className="checkout-modal-overlay" aria-hidden="true" />
        <div className="checkout-modal-container">
          <div className="checkout-modal-content-wrapper">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="checkout-modal-content">
                <button onClick={handleClose} className="checkout-modal-close">
                  &times;
                </button>
                <div className="checkout-modal-layout">
                  <div className="checkout-modal-main">
                    {renderStep()}
                  </div>
                  <div className="checkout-modal-sidebar">
                    <div className="checkout-timer">
                      <img src={TimerIcon} alt="Timer" className="timer-icon" />
                      <span>{formatTime(timeLeft)}</span>
                    </div>
                    <ExperienceSummaryCard />
                    {currentStep > 0 && contactDetails && (
                      <div style={{ marginTop: '16px' }}>
                        <ContactDetailsSummaryCard contactDetails={contactDetails} />
                      </div>
                    )}
                    {currentStep > 1 && Object.keys(activityDetails).length > 0 && (
                      <div style={{ marginTop: '16px' }}>
                        <ActivityDetailsSummaryCard activityDetails={activityDetails} />
                      </div>
                    )}
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

export default CheckoutModal;
