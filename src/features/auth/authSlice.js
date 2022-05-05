import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import requests from '../../api/request';
import userList from '../../data/user.json';
import { getStorage } from '../../utils/helperLocalStorage';
import { login, logOut } from './authThunk';
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
  error: false,
  loading: false,
  status: '',
  tempCheck: [],
  errorMessage: '',
};
// Crée automatiquement des actions avec le TODO_FUNCTION
// Tranche de state (le "slice)")
//! -------------------------
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
     * On submit, change elements
     * @param {*} state
     * @param {*} action
     */
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
        state.loading = false;
        console.log('Authentification KO');
        throw Error('Not good');
      }
      // const regexEmail =
      //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //   const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gm;
      // if ()
    },
    /**
     * Allow to logout user, delete the token on the local storage
     * @param {*} state
     * @param {*} action
     */
    logoutUser: (state, action) => {
      localStorage.removeItem('token');
    },
    addTokenBegin: (state, action) => {
      const token = getStorage('token');
      state.token = getStorage('token', token);
    },
  },
  // object qui permet de définir les actions à faire en fonction de ce qu'il se passe
  extraReducers: {
    // Si le logout réussi (obligé qu'il réussisse)
    [logOut.fulfilled]: (state, action) => {
      state.loading = false;
      state.email = '';
      state.firstname = '';
      state.lastname = '';
      state.pseudo = '';
      state.token = '';
      state.logged = false;
      state.status = '';
    },
    // Lorsque le loading est en attente
    [login.pending]: (state, { payload }) => {
      state.loading = true;
    },
    // lorsque le login est réussi
    [login.fulfilled]: (state, { payload }) => {
      // const { accessToken, user } = payload; //! A voir avec l'équipe ; un state user qui regroupe tout les éléments lié a l'user.
      // On ajoute le token dans le storage au state de l'auth
      const token = getStorage('token');
      state.token = getStorage('token', token);
      state.loading = false;
    },
    // Si pas réussi au niveau du login
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const { handleChange, handleSubmit, addTokenBegin } = authSlice.actions;

// we export the reducer of our slice
export default authSlice.reducer;
