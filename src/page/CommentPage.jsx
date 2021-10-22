import React from 'react';

import {
  Avatar,
  PrevButton,
  ListPosts,
  CardDetails,
  Description,
} from 'components';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100vw;
`;

const StyledHeader = styled.header`
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: space-between;
  position: relative;
  position: fixed;
`;

const StyledHeading = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  margin-right: 10px;
  justify-content: space-between;
`;

const CommentPage = () => (
  <StyledWrapper>
    <StyledHeader>
      <PrevButton>Zmien uzytkownika</PrevButton>
      <StyledHeading>
        <CardDetails secondary>Mateusz Bogacz </CardDetails>
        <Avatar mini />
      </StyledHeading>
    </StyledHeader>
    <ListPosts />
    <CardDetails>Comments</CardDetails>
    <p>
      <strong>Name:</strong>
    </p>
    <CardDetails secondary>
      et fugit eligendi deleniti quidem qui sint nihil auteAm
    </CardDetails>

    <CardDetails secondary>
      <strong>Email:</strong>Presley.Mueller@myrl.com
    </CardDetails>
    <Description post>
      doloribus at sed quis culpa deserunt consectetur qui
      praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate
      autem\nvoluptatem repellendus aspernatur dolorem in
    </Description>
    <CardDetails>UserId: 2</CardDetails>
    <CardDetails>PostId: 2</CardDetails>
  </StyledWrapper>
);
export default CommentPage;
