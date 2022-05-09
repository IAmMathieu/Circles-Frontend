import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const { user_id } = authSlice.getState();
// const customCall = `https://cercles.herokuapp.com/api/profil/${user_id}/circles`;
export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://cercles.herokuapp.com/api/profil/',
  }),
  endpoints: (builder) => ({
    getUserDashBoard: builder.query({
      /**
       * Query for login user. Take the email and password on parameter, and send it to the server.
       * @param {*} param0
       * @returns
       */
      query: ({ user_id, token }) => {
        return {
          url: `${user_id}/circles`,
          method: 'GET',
          // body: new URLSearchParams({
          //   id: user_id,
          //   Authorization: token,
          // }),
          header: {
            Authorization: token,
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserDashBoardQuery } = dashboardApi;
