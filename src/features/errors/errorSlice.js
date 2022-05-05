import { handleSubmit } from '../auth/authSlice';
import { createSlice } from '@reduxjs/toolkit';
// Recupération des éléments que l'erreur dois analyser
// Create error slice, for keep the error logic into it.

export const errorsSlice = createSlice({
  name: 'errors',
  initialState: '', // On commence par du falsy ''
  // Le state est lié à d'autres fonctions (vu qu'ici on ne récupère que l'erreur), on fais donc un extraReducers //! A voir la différence entre les deux
  extraReducers: {
    [handleSubmit.rejected]: (state, action) => {
      //   debugger;
      return action.error.message;
    },
    [handleSubmit.fullfiled]: (state, action) => {
      console.log(action);
    },
  },
});
export const selectErrors = (state) => state.errors;

export default errorsSlice.reducer;
