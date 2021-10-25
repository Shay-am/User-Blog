import React from 'react';
import { ListPosts } from 'components';
import Header from 'components/Header/Header';
// import { useParams } from 'react-router';

const UserPage = () => (
  <>
    <Header nav />
    <ListPosts />
  </>
);
export default UserPage;
