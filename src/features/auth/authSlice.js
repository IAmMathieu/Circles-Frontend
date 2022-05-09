import { createSlice } from '@reduxjs/toolkit';
// Initialise the default state.

const initialState = {
  id: '',
  firstname: '',
  lastname: '',
  surname: '',
  email: '',
  password: '',
  birthdate: '',
  token: '',
  user_id: '',
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
  },
});

export const { handleChange, handleToken } = authSlice.actions;

// we export the reducer of our slice
export default authSlice.reducer;
