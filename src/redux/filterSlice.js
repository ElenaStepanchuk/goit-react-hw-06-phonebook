import { createSlice } from '@reduxjs/toolkit';
export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filtered: (_, action) => {
      return action.payload;
    },
  },
});
export const { filtered } = filterSlice.actions;
