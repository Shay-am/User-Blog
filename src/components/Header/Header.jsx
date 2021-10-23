import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Logo, Title, Button, Avatar, Paragraph } from 'components';

const StyledHeader = styled.div`
  width: 100vw;
  /* height: auto; */
  position: ${({ noFixed }) => (noFixed ? 'static' : 'fixed')};
  display: flex;
  justify-content: space-around;
  padding: 6px 20px 7px 20px;
  background-color: white;
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
