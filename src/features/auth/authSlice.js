import { createSlice } from '@reduxjs/toolkit';
import userList from '../../data/user.json';
// Initialise the default state.
const initialState = {
  firstname: '',
  lastname: '',
  surname: '',
  email: '',
  password: '',
  token: '',
  logged: true,
  error: false,
};
// Crée automatiquement des actions avec le TODO_FUNCTION

// Tranche de state (le "slice)")
export const authSlice = createSlice({
  name: 'auth', // name of the slice
  initialState, // we give it the initialState
  reducers: {
    // functions used for changing the state
    handleChange: (state, action) => {
      /* state[nomDuChamp] --> En fonction ce sera email ou password(si on est sur l'input email, ce sera email) et on modifie la valeur basé sur le payload envoyé.
      Ici ce sera donc state[email] = action.payload.payload qui est égal à la valeur renseigné par l'utilisateur
      */
      state[action.payload.name] = action.payload.payload;
    },
    handleSubmit: (state, action) => {
      const { email, password } = state;
      const userFind = userList.find(
        (user) => user.email === email && user.password === password
      );
      if (userFind) {
        console.log('Authentification OK');
        state.logged = true;
        state.error = false;
      } else {
        state.error = true;
        console.log('Authentification KO');
      }
      // const regexEmail =
      //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //   const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm;
      // if ()
    },
  },
});

export const { handleChange, handleSubmit } = authSlice.actions;

// we export the reducer of our slice
export default authSlice.reducer;
