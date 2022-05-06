import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import authReducer from '../features/auth/authSlice';
import socketMW from './../features/CirclePage/Chatroom/middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(socketMW));

export const store = configureStore({
  reducer: {
    auth: authReducer,
    enhancers,
  },
});
