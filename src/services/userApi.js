import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiUrl = 'https://jsonplaceholder.typicode.com';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ['POST'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({ url: `/users` }),
      providesTags: ['POST'],
    }),
    getUserPosts: builder.query({
      query: (userId) => ({ url: `/posts/?userId=${userId}` }),
    }),
    getPostCommentsById: builder.query({
      query: (postId) => ({ url: `/posts/${postId}/comments` }),
    }),
    updatePost: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `posts/${data.postId}`,
          method: 'PUT',
          body: JSON.stringify(data),
        };
      },
      invalidatesTags: ['POST'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserPostsQuery,
  useGetPostCommentsByIdQuery,
  useUpdatePostMutation,
} = userApi;
