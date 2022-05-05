/* eslint-disable import/prefer-default-export */
// ACTION TYPES
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const SAVE_PSEUDO = 'SAVE_PSEUDO';
export const WS_CONNECT = 'WS_CONNECT';
export const SEND_MESSAGE = 'SEND_MESSAGE';

// ACTION CREATORS
export const addMessage = (message) => ({
  // par convention les types sont écrit en UPPER_SNAKE_CASE
  type: ADD_MESSAGE,
  message,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  newMessage: value,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const changeField = (value, key) => ({
  type: CHANGE_FIELD,
  value,
  key,
});

export const login = () => ({
  type: LOGIN,
});

export const savePseudo = (pseudo) => ({
  type: SAVE_PSEUDO,
  pseudo,
});

export const wsConnect = () => ({
  type: WS_CONNECT,
});