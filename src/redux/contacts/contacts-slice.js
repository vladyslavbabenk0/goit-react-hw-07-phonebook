import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ name, number }) => {
        const id = nanoid();
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },
    removeContact: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
