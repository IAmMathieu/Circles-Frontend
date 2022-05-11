import { createSlice } from '@reduxjs/toolkit';
import { ADD_MESSAGE } from '../Chatroom/actions/actionIndex';
import userList from '../../data/user.json';

const initialState = {
    messages: [
        {
          id:1,
          author: 'Super Chat',
          content: 'Salut ça va ?',
        },
        {
          id:2,
          author: 'Super Chat',
          content: 'T\'as pas des croquettes ?',
        },
        {
          id:3,
          author: 'Super Chat',
          content: 'Stp',
        },
        {
          id:4,
          author: 'Toto',
          content: 'hntouoetrnh',
        },
        
      ]
};

export const tchatSlice = createSlice({
    name: 'tchat',
    initialState,
    reducers: {
      addMessage: (state, action) => {
        switch(action.type){
          case ADD_MESSAGE: {
            console.log('case', ADD_MESSAGE);
            return state;
          }
          default:
            return state;
        }
      }
    },
    
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const { addMessage } = tchatSlice.actions;
export default tchatSlice.reducer;