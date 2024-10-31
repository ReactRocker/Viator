import { configureStore } from '@reduxjs/toolkit';
import checkoutReducer from './checkoutSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
    user: userReducer,
  },
});
