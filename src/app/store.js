import { configureStore } from '@reduxjs/toolkit';
import { emptySplitApi } from '../features/api/emptySplitApi';
import authReducer from '../features/auth/authSlice';
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // [authApi.reducerPath]: authApi.reducer,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    auth: authReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      // authApi.middleware,
      emptySplitApi.middleware
    ),
});
