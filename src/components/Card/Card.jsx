import React from 'react';
import styled from 'styled-components';
import { Avatar, Button, CardDetails } from 'components';
import { NavLink } from 'react-router-dom';

const CardWrapper = styled.li`
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
  bottom: 5px;
  right: 5px;
`;

const Card = () => (
  <>
    <CardWrapper>
      <Avatar />
      <StyledCardDescription>
        <CardDetails>Leanne Graham</CardDetails>
        <CardDetails secondary>Email: Sincere@Aprli.Biz</CardDetails>
        <CardDetails secondary>Id:2</CardDetails>
      </StyledCardDescription>
      <StyledButton>
        <Button as={NavLink} to="/user/1">
          My Lists Posts
        </Button>
      </StyledButton>
    </CardWrapper>
  </>
);

export default Card;
