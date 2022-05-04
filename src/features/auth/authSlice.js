import { createSlice } from '@reduxjs/toolkit';

// Initialise the default state.
const initialState = {
  firstname: '',
  lastname: '',
  surname: '',
  email: '',
  password: '',
  pseudo: '',
  token: '',
  logged: false,
};

// Crée automatiquement des actions avec le TODO_FUNCTION

// Tranche de state (le "slice)")
export const authSlice = createSlice({
  name: 'auth', // name of the slice
  initialState, // we give it the initialState
  reducers: {
    // functions used for changing the state
    function: (state, action) => {
      // state hold informations of current and previous values, and action contain payload (object who pass informations when changing state), type represent the type change --> actions can change the state
      state.value = action.payload;
    },
    handleChange: (state, action) => {
      /* state[nomDuChamp] --> En fonction ce sera email ou password(si on est sur l'input email, ce sera email) et on modifie la valeur basé sur le payload envoyé.
      Ici ce sera donc state[email] = action.payload.payload qui est égal à la valeur renseigné par l'utilisateur
      */
      state[action.payload.name] = action.payload.payload;
      // [action.key]: action.value,
    },
  },
});

export const { handleChange } = authSlice.actions;

// we export the reducer of our slice
export default authSlice.reducer;
