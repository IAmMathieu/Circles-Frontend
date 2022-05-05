import { createAsyncThunk } from '@reduxjs/toolkit';
import requests from '../../api/request';
import history from '../../utils/history';
import axios from 'axios';
import { removeStorage, setStorage } from '../../utils/helperLocalStorage';

export const login = createAsyncThunk(
  'auth/loginUser',
  async (args, { getState }) => {
    const { email, password } = getState().auth;
    axios
      .post('https://cercles.herokuapp.com/api/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          setStorage('token', response.data.token);
          return response.data;
        }
      });
  }
);

export const logOut = createAsyncThunk('auth/signOut', async () => {
  removeStorage('token');
});
