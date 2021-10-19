import React from 'react';
import styled, { css } from 'styled-components';
import { Avatar, Button } from 'components';

const CardWrapper = styled.div`
  position: relative;
  min-width: 320px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0 30px 30px;
  border: 1px solid gray;
  box-shadow: 0 0 0.5em gray;

  &:hover {
    background: ${({ theme }) => theme.lightGray};
  }
`;

const CardDescription = styled.div`
  width: 60%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

const CardDetails = styled.p`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.5em;

  ${({ email }) =>
    email &&
    css`
      font-size: 1em;
    `}
`;
const StyledButton = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const Card = () => (
  <>
    <CardWrapper>
      <Avatar />
      <CardDescription>
        <CardDetails>Leanne Graham</CardDetails>
        <CardDetails email>Email: Sincere@Aprli.Biz</CardDetails>
        <CardDetails email>Id:2</CardDetails>
      </CardDescription>
      <StyledButton>
        <Button>My List Posts</Button>
      </StyledButton>
    </CardWrapper>
  </>
);

export default Card;
