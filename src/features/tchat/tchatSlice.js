import { createSlice } from '@reduxjs/toolkit';
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
        
      ]
};

export const tchatSlice = createSlice({
    name: 'tchat',
    initialState,
    reducer: {

    }
})

export default tchatSlice.reducer;