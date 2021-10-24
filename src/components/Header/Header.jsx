import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Logo, Title, Button, Avatar, Paragraph } from 'components';

const StyledHeader = styled.div`
  width: 100vw;
  position: fixed;
  display: flex;
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
  position: absolute;
  right: 7px;
  align-items: center;
`;

const Header = ({ nav }) => (
  <>
    {!nav ? (
      <StyledHeader noFixed>
        <Logo />
        <Title as="h2">User Blog</Title>
      </StyledHeader>
    ) : (
      <StyledHeader>
        <Button prev as={NavLink} to="/">
          Zmien uzytkownika
        </Button>
        <StyledHeading>
          <Paragraph secondary>Mateusz Bogacz </Paragraph>
          <Avatar mini />
        </StyledHeading>
      </StyledHeader>
    )}
  </>
);

export default Header;
