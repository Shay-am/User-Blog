import React from 'react';
import styled from 'styled-components';
import { Logo, Title } from 'components';

const StyledHeader = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  padding: 6px 20px 7px 20px;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <Title>User Blog</Title>
  </StyledHeader>
);

export default Header;
