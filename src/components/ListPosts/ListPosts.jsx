import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Title, Description, Button, Paragraph } from 'components';
import { addActivePost } from 'store/features/postSlice';

const StyledWrapperList = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transform: translateY(15%);
  /* margin-bottom: 4rem; */
`;
const StyledWrapperItem = styled.article`
  width: 60vw;
  margin-bottom: 4em;
`;

const StyledTitle = styled.section`
  text-align: center;
`;

const StyledDetails = styled.section`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

const StyledDescription = styled.section`
  /* width: 80vw; */
`;

const ListPosts = ({ isComment, userId, id, title, body }) => {
  const dispatch = useDispatch();
  return (
    <StyledWrapperList>
      <StyledWrapperItem>
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
      </StyledWrapperItem>
    </StyledWrapperList>
  );
};

ListPosts.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default ListPosts;
