/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { user: '' },
  reducers: {
    addActiveUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { addActiveUser } = userSlice.actions;
export default userSlice.reducer;
