import { emptySplitApi } from '../api/emptySplitApi';
const circleApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    /* Two types :
        - Query endpoints : for retrieving data.
        - Mutation endpoints : for CRUD
    */
    createCircle: builder.mutation({
      /**
       * Query for login user. Take the email and password on parameter, and send it to the server.
       * @param {*} param0
       * @returns
       */
      query: ({ token, name, description, color, img_url, user_id }) => {
        return {
          url: `circle`,
          method: 'POST',
          contentType: 'application/json',
          body: new URLSearchParams({
            name,
            description,
            color,
            img_url,
            user_id,
          }),
          headers: { Authorization: `Bearer ${token}` },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useCreateCircleMutation } = circleApi;
