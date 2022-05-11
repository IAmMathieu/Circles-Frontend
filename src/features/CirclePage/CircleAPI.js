import { emptySplitApi } from './emptySplitApi';
const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    /* Two types :
        - Query endpoints : for retrieving data.
        - Mutation endpoints : for CRUD
    */
    getUserCircle: builder.query({
      /**
       * Query for login user. Take the email and password on parameter, and send it to the server.
       * @param {*} param0
       * @returns
       */
      query: ({ token }) => {
        return {
          url: `circle/`,
          method: 'GET',
          contentType: 'application/json',
          headers: { Authorization: `Bearer ${token}` },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserCircleQuery } = extendedApi;