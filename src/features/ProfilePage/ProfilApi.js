import { emptySplitApi } from '../api/emptySplitApi';
const profilApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    /* Two types :
        - Query endpoints : for retrieving data.
        - Mutation endpoints : for CRUD
    */
    getProfilUser: builder.query({
      /**
       * Query for login user. Take the email and password on parameter, and send it to the server.
       * @param {*} param0
       * @returns
       */
      query: ({ user_id, token }) => {
        return {
          url: `profil/${user_id}`,
          method: 'GET',
          contentType: 'application/json',
          headers: { Authorization: `Bearer ${token}` },
        };
      },
    }),
    updateProfilUser: builder.mutation({
      /**
       * Query for login user. Take the email and password on parameter, and send it to the server.
       * @param {*} param0
       * @returns
       */
      query: ({
        user_id,
        token,
        firstname,
        password,
        lastname,
        surname,
        email,
        birthdate,
        oldpassword,
        img_url,
      }) => {
        return {
          url: `profil/${user_id}`,
          method: 'PATCH',
          body: new URLSearchParams({
            email,
            password,
            oldpassword,
            firstname,
            lastname,
            surname,
            birthdate,
            img_url,
          }),
          headers: { Authorization: `Bearer ${token}` },
        };
      },
    }),
    deleteProfilUser: builder.mutation({
      /**
       * Query for login user. Take the email and password on parameter, and send it to the server.
       * @param {*} param0
       * @returns
       */
      query: ({ user_id, token }) => {
        return {
          url: `profil/${user_id}`,
          method: 'DELETE',
          contentType: 'application/json',
          headers: { Authorization: `Bearer ${token}` },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetProfilUserQuery,
  useUpdateProfilUserMutation,
  useDeleteProfilUserMutation,
} = profilApi;
