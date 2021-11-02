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
  transform: translateX(10%);
`;

const CommentPage = () => {
  const postData = useSelector(({ post }) => post.post);
  const { userId, id, title, body } = postData;
  const { postId } = useParams();
  const { data: comments, isFetching } = useGetPostCommentsByIdQuery(postId);

  if (isFetching) return 'Loading...';

  return (
    <>
      <Header nav />
      <ListPosts isComment userId={userId} id={id} title={title} body={body} />
      <StyledComments>
        <Paragraph>Comments:</Paragraph>
      </StyledComments>
      {comments.map((comment) => (
        <ListComments
          key={comment.id}
          postId={comment.postId}
          id={comment.id}
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      ))}
    </>
  );
};
export default CommentPage;
