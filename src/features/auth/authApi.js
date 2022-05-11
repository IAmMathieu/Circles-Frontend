import { setStorage } from '../../utils/helperLocalStorage';
import { handleToken } from '../auth/authSlice';
import { emptySplitApi } from '../api/emptySplitApi';
const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    /* Two types :
        - Query endpoints : for retrieving data.
        - Mutation endpoints : for CRUD
    */
    loginUser: builder.mutation({
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
          invalidatesTags: ['Post'],
        };
      },
      /**
       * Se lance lorsque la query est terminée. Elle permet d'ajouter dans le storage le token, et l'user_id(a voir si on ne le coockies pas?)
       * @param {*} body
       * @param {*} param1
       */
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((result) => {
            const { token, user_id } = result.data;
            setStorage('token', token);
            setStorage('user_id', user_id);
            // Dispatch le handletoken du slice(permet d'utiliser facilement le token et l'user_id)
            dispatch(handleToken({ token, user_id }));
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }),
    registerUser: builder.mutation({
      /**
       * Query for login user. Take the email and password on parameter, and send it to the server.
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
       * Se lance lorsque la query est terminée. Elle permet d'ajouter dans le storage le token, et l'user_id(a voir si on ne le coockies pas?)
       * @param {*} body
       * @param {*} param1
       */
      async onQueryStarted(body, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((result) => {
            const { token, user_id } = result.data;
            setStorage('token', token);
            setStorage('user_id', user_id);
            // Dispatch le handletoken du slice(permet d'utiliser facilement le token et l'user_id)
            dispatch(handleToken({ token, user_id }));
          })
          .catch((error) => {
            console.log(error);
          });
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginUserMutation, useRegisterUserMutation } = extendedApi;
