import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PrevButtonSvg } from 'assets/NextArrow.svg';

const StyledWrapper = styled.button`
  width: auto;
  height: auto;
  background-color: white;
  display: flex;
  align-items: center;
  border: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
const StyledTitleButton = styled.p`
  width: 25vw;
  height: 5vh;
  margin: 0;
`;

const PrevButton = ({ children }) => (
  <>
    <NavLink to="/users">
      <StyledWrapper>
        <PrevButtonSvg />
        <StyledTitleButton>{children}</StyledTitleButton>
      </StyledWrapper>
    </NavLink>
  </>
);

export default PrevButton;
