import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { emptySplitApi } from '../features/api/emptySplitApi';
=======
import { applyMiddleware, compose } from 'redux';
>>>>>>> feat(circle): attempt connect chatroom
import authReducer from '../features/auth/authSlice';
import socketMW from './../features/CirclePage/Chatroom/middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(socketMW));

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // [authApi.reducerPath]: authApi.reducer,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    auth: authReducer,
    enhancers,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      // authApi.middleware,
      emptySplitApi.middleware
    ),
});
