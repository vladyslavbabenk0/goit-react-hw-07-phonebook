import { createSlice } from '@reduxjs/toolkit';

const sliceFilter = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    setFilter: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setFilter } = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;
