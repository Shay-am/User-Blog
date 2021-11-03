import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Avatar, Button, Paragraph } from 'components';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addActiveUser } from 'store/features/userSlice';

const CardWrapper = styled.article`
  position: relative;
  min-width: 300px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1.8em 1.8em;
  border: 1px solid gray;
  box-shadow: 0 0 0.5em gray;
`;

const StyledCardDescription = styled.div`
  width: 60%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

const StyledButton = styled.div`
  position: absolute;
  bottom: 15px;
  right: 5px;
`;

const Card = ({ name, id, email }) => {
  const dispatch = useDispatch();

  return (
    <>
      <CardWrapper>
        <Avatar />
        <StyledCardDescription>
          <Paragraph>{name}</Paragraph>
          <Paragraph secondary>{email}</Paragraph>
          <Paragraph secondary>Id: {id}</Paragraph>
        </StyledCardDescription>
        <StyledButton>
          <Button
            as={NavLink}
            to={`/users/${id}/posts`}
            onClick={() => dispatch(addActiveUser({ user: { name, id } }))}
          >
            My List post
          </Button>
        </StyledButton>
      </CardWrapper>
    </>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default Card;
