import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setStorage } from '../../utils/helperLocalStorage';
import history from '../../utils/history';
// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cercles.herokuapp.com/api/' }),
  endpoints: (builder) => ({
    loginUser: builder.query({
      /**
       * Query for login user. Take the email and password on parameter, and send it to the server.
       * @param {*} param0
       * @returns
       */
      query: ({ email, password }) => {
        return {
          url: 'login',
          method: 'POST',
          body: new URLSearchParams({
            email: email,
            password: password,
          }),
          header: 'Content-Type: application/x-www-form-urlencoded',
          // credentials: 'include',
        };
      },
      /**
       * Take the response and extract the token. If token, set the token to the local storage.
       * @param {*} response
       * @returns
       */
      transformResponse: (response) => {
        const { token } = response;
        if (token) {
          setStorage('token', token);
          history.go('/dashboard');
        }
        return response;
      },
    }),
    registerUser: builder.query({
      /**
       * Query for register user.
       * @param {*} param0
       * @returns
       */
      query: ({ email, password }) => {
        return {
          url: 'login',
          method: 'POST',
          body: new URLSearchParams({
            email: email,
            password: password,
          }),
          header: 'Content-Type: application/x-www-form-urlencoded',
          // credentials: 'include',
        };
      },
      /**
       * Take the response and extract the token. If token, set the token to the local storage.
       * @param {*} response
       * @returns
       */
      transformResponse: (response) => {
        const { token } = response;
        if (token) {
          setStorage('token', token);
          history.go('/dashboard');
        }
        return response;
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserQuery } = authApi;
