import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Logo, H1, Button, Avatar, Paragraph } from 'components';
import { useSelector } from 'react-redux';

const StyledHeader = styled.header`
  width: 100vw;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1.3em 0.5em 2em;
  background-color: white;

  ${({ noFixed }) =>
    noFixed &&
    css`
      display: flex;
      position: static;
      justify-content: space-around;
      padding: 1em;
    `}
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 9em;
  align-items: center;
  border: 1px solid black;
  border-radius: 1em;
  padding: 0.21em;
  position: relative;
  text-decoration: none;
  color: black;

  &:hover {
    top: 0.2em;
  }
`;

const Header = ({ nav }) => {
  const user = useSelector((state) => state.user.user);
  const { name, id } = user;
  return (
    <>
      {!nav ? (
        <StyledHeader noFixed>
          <Logo size="9em" />
          <H1>User Blog</H1>
        </StyledHeader>
      ) : (
        <StyledHeader>
          <Button prev="true" as={NavLink} to="/">
            Change User
          </Button>
          <StyledHeading as={NavLink} to={`/users/${id}/posts`}>
            <Paragraph size=".8em" secondary>
              {name}
            </Paragraph>
            <Avatar mini />
          </StyledHeading>
        </StyledHeader>
      )}
    </>
  );
};

export default Header;
