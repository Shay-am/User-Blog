/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: { post: '' },
  reducers: {
    addActivePost: (state, action) => {
      state.post = action.payload.post;
    },
  },
});

export const { addActivePost } = postSlice.actions;
export default postSlice.reducer;
