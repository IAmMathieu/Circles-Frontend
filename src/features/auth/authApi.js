import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setStorage } from '../../utils/helperLocalStorage';
import { handleToken } from './authSlice';
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
        };
      },
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((result) => {
            const { token, user_id } = result.data;
            setStorage('token', token);
            setStorage('user_id', user_id);
            dispatch(handleToken({ token, user_id }));
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }),
    registerUser: builder.query({
      /**
       * Query for register user.
       * @param {*} param0
       * @returns
       */
      query: ({ firstname, lastname, birthdate, email, password }) => {
        return {
          url: 'register',
          method: 'POST',
          body: new URLSearchParams({
            firstname,
            lastname,
            email,
            password,
            birthdate,
          }),
          header: 'Content-Type: application/x-www-form-urlencoded',
        };
      },
      /**
       * Take the response and extract the token. If token, set the token to the local storage.
       * @param {*} response
       * @returns
       */
      async onQueryStarted(body, { distpach, queryFulfilled }) {
        queryFulfilled
          .then((result) => {
            const { token } = result.data;
            setStorage('token', token);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserQuery, useRegisterUserQuery } = authApi;
