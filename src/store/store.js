import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userApi } from 'services/userApi';
import userReducer from 'store/features/userSlice';
import postReducer from 'store/features/postSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddiware) =>
    getDefaultMiddiware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
