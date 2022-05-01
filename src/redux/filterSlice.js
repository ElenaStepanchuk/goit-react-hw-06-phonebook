import { createSlice } from '@reduxjs/toolkit';
export const filterSlice = createSlice({
  name: 'filtered',
  initialState: '',
  reducers: {
    filtered: (_, action) => {
      return action.payload;
    },
  },
});
