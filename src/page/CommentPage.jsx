import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetPostCommentsByIdQuery } from 'services/userApi';
import { ListPosts, Paragraph, ListComments } from 'components';
import Header from 'components/Header/Header';

const StyledComments = styled.div`
  position: relative;
  min-height: 2em;
  top: 2em;
  padding: 1em;
`;

const CommentPage = () => {
  const postData = useSelector(({ post }) => post.post);
  const { userId, id, title, body } = postData;
  const { postId } = useParams();
  const { data, isFetching } = useGetPostCommentsByIdQuery(postId);

  if (isFetching) return 'Loading...';
  console.log(data);
  return (
    <>
      <Header nav />
      <ListPosts isComment userId={userId} id={id} title={title} body={body} />
      <StyledComments>
        <Paragraph>Comments:</Paragraph>
      </StyledComments>
      {data.map((item) => (
        // eslint-disable-next-line
        <ListComments key={item.id} {...item} />
      ))}
    </>
  );
};
export default CommentPage;
