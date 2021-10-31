import React from 'react';
import { useParams } from 'react-router-dom';
import { ListPosts } from 'components';
import Header from 'components/Header/Header';
import { useGetUserPostsQuery } from 'services/userApi';

const UserPage = () => {
  const { id: userPostsId } = useParams();

  const { data: userPosts, isFetching } = useGetUserPostsQuery(userPostsId);

  if (isFetching) return 'Loading...';

  return (
    <>
      <Header nav />
      {userPosts.map(({ userId, id, title, body }) => (
        <ListPosts key={id} userId={userId} id={id} title={title} body={body} />
      ))}
    </>
  );
};
export default UserPage;
