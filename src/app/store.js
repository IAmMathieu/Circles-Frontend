import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import tchatReducer from '../features/tchat/tchatSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tchat: tchatReducer,
  },
});
