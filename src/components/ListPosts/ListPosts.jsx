import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Title, Description, Button, Paragraph } from 'components';
import { useDispatch } from 'react-redux';
import { addActivePost } from 'app/features/postSlice';

const StyledWrapperList = styled.li`
  width: 100vw;
  height: auto;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transform: translateY(5rem);
  margin-bottom: 4rem;
`;
const StyledTitle = styled.section`
  width: 90vw;
  text-align: center;
`;

const StyledDetails = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

const StyledDescription = styled.section`
  width: 80vw;
`;

const ListPosts = ({ isComment, userId, id, title, body }) => {
  const dispatch = useDispatch();
  return (
    <StyledWrapperList>
      <StyledTitle>
        <Title>{title}</Title>
      </StyledTitle>
      <StyledDescription>
        <Description post>{body}</Description>
      </StyledDescription>
      <StyledDetails>
        <Paragraph>User Id: {userId}</Paragraph>
        <Paragraph>Post Id: {id}</Paragraph>
      </StyledDetails>
      {!isComment && (
        <StyledDetails>
          <Button
            as={NavLink}
            to={`/edit/${id}`}
            onClick={() =>
              dispatch(addActivePost({ post: { userId, id, title, body } }))
            }
          >
            Edit post
          </Button>
          <Button
            as={NavLink}
            to={`/comments/${id}`}
            onClick={() =>
              dispatch(addActivePost({ post: { userId, id, title, body } }))
            }
          >
            comments
          </Button>
        </StyledDetails>
      )}
    </StyledWrapperList>
  );
};
export default ListPosts;
