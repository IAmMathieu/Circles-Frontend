import { createSlice } from '@reduxjs/toolkit';
import { getStorage } from '../../utils/helperLocalStorage';

// Initialise the default state.
const initialState = {
  id: null,
  firstname: null,
  lastname: null,
  surname: null,
  email: null,
  password: null,
  birthdate: null,
  portrait_url: null,
  token: getStorage('token'),
  user_id: null,
  oldPassword: null,
};
// Crée automatiquement des actions avec le TODO_FUNCTION
// Tranche de state (le "slice)")
export const authSlice = createSlice({
  name: 'auth', // name of the slice
  initialState, // we give it the initialState
  reducers: {
    // functions used for changing the state
    /**
     * When an input change, add the value of this input to the state
     * @param {*} state
     * @param {*} action
     */
    handleChange: (state, action) => {
      /* state[nomDuChamp] --> En fonction ce sera email ou password(si on est sur l'input email, ce sera email) et on modifie la valeur basé sur le payload envoyé.
      Ici ce sera donc state[email] = action.payload.payload qui est égal à la valeur renseigné par l'utilisateur
      */
      state[action.payload.name] = action.payload.payload;
    },
    /**
     * Permet de changer le token et l'user_id
     * @param {*} state
     * @param {*} action
     */
    handleToken: (state, action) => {
      const { token, user_id } = action.payload;
      state.token = token;
      state.user_id = user_id;
    },

    handleUser: (state, action) => {
      const { birthdate, email, firstname, portrait_url, lastname, surname } =
        action.payload;
      state.birthdate = birthdate;
      state.email = email;
      state.firstname = firstname;
      state.portrait_url = portrait_url;
      state.lastname = lastname;
      state.surname = surname;
    },
  },
});

export const { handleChange, handleToken, handleUser } = authSlice.actions;

// we export the reducer of our slice
export default authSlice.reducer;
