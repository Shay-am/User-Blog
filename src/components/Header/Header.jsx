import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Logo, Title, Button, Avatar, Paragraph } from 'components';
import { useSelector } from 'react-redux';

const StyledHeader = styled.div`
  width: 100vw;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px 7px 20px;
  background-color: white;

  ${({ noFixed }) =>
    noFixed &&
    css`
      position: static;
      justify-content: space-around;
      padding: 0;
    `}
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 7em;
  position: absolute;
  right: 1em;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 0.2em;
`;

const Header = ({ nav }) => {
  const userName = useSelector(({ user }) => user.user.name);
  return (
    <>
      {!nav ? (
        <StyledHeader noFixed>
          <Logo />
          <Title type="h1">User Blog</Title>
        </StyledHeader>
      ) : (
        <StyledHeader>
          <Button prev="true" as={NavLink} to="/">
            Change User
          </Button>
          <StyledHeading>
            <Paragraph secondary>{userName}</Paragraph>
            <Avatar mini />
          </StyledHeading>
        </StyledHeader>
      )}
    </>
  );
};

export default Header;
