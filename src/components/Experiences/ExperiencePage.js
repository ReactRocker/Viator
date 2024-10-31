import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openCheckout, resetCheckout } from '../../store/checkoutSlice';
import CheckoutModal from './checkout/CheckoutModal';
import BookingSuccessModal from './checkout/BookingSuccessModal';
import './ExperiencePage.css';

const ExperiencePage = ({ onClose }) => {
  const dispatch = useDispatch();
  const isCheckoutOpen = useSelector(state => state.checkout.isOpen);
  const bookingSuccess = useSelector(state => state.checkout.bookingSuccess);

  const handleBookNow = () => {
    console.log('handleBookNow called');
    dispatch(openCheckout());
    console.log('openCheckout dispatched, isOpen should now be true');
  };

  const handleCloseBookingSuccess = () => {
    dispatch(resetCheckout());
    // Add any navigation logic here
  };

  console.log('ExperiencePage render - isCheckoutOpen:', isCheckoutOpen);

  return (
    <div className="experience-page">
      <div className="experience-container">
        <button onClick={onClose} className="close-button">
          &times; Close
        </button>
        <div className="experience-content">
          <div className="experience-image">
            <img src="https://via.placeholder.com/1200x400" alt="Jeep Tour" />
            <span className="experience-tag">Most Popular</span>
          </div>
          
          <h1 className="experience-title">Private Scottsdale Off-Road Jeep Tour</h1>
          <p className="experience-location">Scottsdale, USA</p>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {'★★★★★'.split('').map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            </div>
            <span className="text-gray-600">(1,342)</span>
          </div>
          
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>2 - 3 hours</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              <span>Mobile Ticket</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
              <span>English</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center text-green-600">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Free Cancellation</span>
            </div>
            <div className="flex items-center text-blue-600">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Reserve Now & Pay Later</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-3xl font-bold">from $550.00</span>
              <span className="text-sm text-gray-600 ml-2">per adult</span>
            </div>
            <button
              onClick={handleBookNow}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Check availability
            </button>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Featured in</h2>
            <div className="flex space-x-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Sales & Promotion</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Likely to Sell Out</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Most Popular</span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Free Cancellation</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Where you'll be</h2>
            <div className="h-64 bg-gray-300 rounded-lg">
              {/* Add map component here */}
              <p className="p-4">Map placeholder</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700">
              TripAdvisor's 2021 Travelers' Choice Best of the Best Scottsdale's 2020-2022 #1 ranked TripAdvisor outdoor activity. Our Private Scottsdale Off-Road Jeep Tour is for those who are looking for a more intimate experience in the Sonoran Desert. You will enjoy spectacular sights as your professional tour guide teaches you about Sonoran desert flora, fauna, and Native American history. Since our private tours are in North Scottsdale, you will receive more trail time than any other off-road tour in the Scottsdale area. Private tour vehicles: Jeep Wrangler Unlimited (4 seats) with forward-facing seating, Jeep YJ (3 seats), or Jeep Gladiator (4 seats) with vertical-row (sideways) seating. Scottsdale Adventure Tours is a commercial special recreation permit holder through the U.S. Department of Agriculture: Cave Creek Ranger District and the U.S. Department of the Interior: Bureau of Land Management.
            </p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">What's included</h2>
            <ul className="list-disc list-inside">
              <li>Bottled Water</li>
              <li>Bottled Water</li>
              <li>Bottled Water</li>
              <li>Bottled Water</li>
              <li>Bottled Water</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">What to expect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Tonto National Forest</h3>
                <p className="text-gray-700">We will explore the scenic Tonto National Forest, connected to North Scottsdale, Arizona. We are special recreation permit holders through the U.S. Department of Agriculture: Cave Creek Ranger District.</p>
              </div>
              <div>
                <h3 className="font-semibold">Pinnacle Peak Park (Pass By)</h3>
                <p className="text-gray-700">A scenic 3,169 foot granite summit located in North Scottsdale, Arizona.</p>
              </div>
              <div>
                <h3 className="font-semibold">Reata Pass (Pass By)</h3>
                <p className="text-gray-700">The last standing buildings of an old western town.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CheckoutModal />
      <BookingSuccessModal isOpen={bookingSuccess} onClose={handleCloseBookingSuccess} />
    </div>
  );
};

export default ExperiencePage;
