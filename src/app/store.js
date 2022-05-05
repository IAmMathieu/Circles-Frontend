import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import errorsReducer from '../features/errors/errorSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    errors: errorsReducer,
  },
});
