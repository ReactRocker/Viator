import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  currentStep: 0,
  activityDetails: {},
  bookingSuccess: false,
  experienceDetails: {}, // Add this if not already present
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openCheckout: (state) => {
      state.isOpen = true;
    },
    closeCheckout: (state) => {
      state.isOpen = false;
      state.currentStep = 0;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    saveActivityDetails: (state, action) => {
      state.activityDetails = action.payload;
    },
    setBookingSuccess: (state, action) => {
      state.bookingSuccess = action.payload;
    },
    resetCheckout: (state) => {
      return { ...initialState, experienceDetails: state.experienceDetails };
    },
  },
});

export const { 
  openCheckout, 
  closeCheckout, 
  setCurrentStep, 
  saveActivityDetails, 
  setBookingSuccess,
  resetCheckout
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
