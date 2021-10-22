import React from 'react';

import { Avatar, PrevButton, ListPosts, CardDetails } from 'components';

import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  position: fixed;
  -webkit-overflow-scrolling: touch;
`;

const StyledHeading = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  margin-right: 10px;
  justify-content: space-between;
`;

const UserPage = () => (
  <>
    <StyledHeader>
      <PrevButton>Zmien uzytkownika</PrevButton>
      <StyledHeading>
        <CardDetails secondary>Mateusz Bogacz </CardDetails>
        <Avatar mini />
      </StyledHeading>
    </StyledHeader>
    <ListPosts />
  </>
);
export default UserPage;
