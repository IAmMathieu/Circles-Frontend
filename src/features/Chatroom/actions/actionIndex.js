
//ACTIONS TYPES
export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMessage = (payload) => {
    return {    type: ADD_MESSAGE,
    payload: payload,}
  };
  