import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = 'https://jsonplaceholder.typicode.com/';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({ url: `/users` }),
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
