import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userApi } from 'services/userApi';
import userReducer from 'app/features/userSlice';
import postReducer from 'app/features/postSlice';

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
