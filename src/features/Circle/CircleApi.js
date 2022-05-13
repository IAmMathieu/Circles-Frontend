import { emptySplitApi } from '../api/emptySplitApi';
const circleApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    /* Two types :
        - Query endpoints : for retrieving data.
        - Mutation endpoints : for CRUD
    */
    createCircle: builder.mutation({
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
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    joinCircle: builder.mutation({
      query: ({ token, user_id, circle_id }) => {
        return {
          url: `circle/${circle_id}`,
          method: 'POST',
          contentType: 'application/json',
          body: new URLSearchParams({
            user_id,
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    deleteCircle: builder.mutation({
      query: ({ token, user_id, code }) => {
        return {
          url: `circle/${user_id}`,
          method: 'DELETE',
          contentType: 'application/json',
          body: new URLSearchParams({
            code,
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateCircleMutation,
  useJoinCircleMutation,
  useDeleteCircleMutation,
} = circleApi;
