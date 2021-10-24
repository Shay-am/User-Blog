import React from 'react';
import styled from 'styled-components';
import { ListPosts, Paragraph, Description } from 'components';
import Header from 'components/Header/Header';

const Wrapper = styled.div`
  display: flex;
  width: auto;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px 0 0 0;
  padding: 5px 5px 5px 5px;
`;

const StyledDescriptionWrapper = styled.section`
  width: 90vw;
  margin-left: 10px;
`;
const StyledParagraph = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

const StyledComments = styled.div`
  margin-top: 20px;
`;

const CommentPage = () => (
  <>
    <Header nav />
    <ListPosts isComment />
    <StyledComments>
      <Paragraph>Comments:</Paragraph>
    </StyledComments>
    <Wrapper>
      <Paragraph secondary>
        <strong>Name:</strong> et fugit eligendi deleniti quidem qui sint nihil
        auteAm
      </Paragraph>

      <Paragraph secondary>
        <strong>Email:</strong> Presley.Mueller@myrl.com
      </Paragraph>
      <StyledDescriptionWrapper>
        <Description>
          doloribus at sed quis culpa deserunt consectetur qui
          praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate
          autem\nvoluptatem repellendus aspernatur dolorem in
        </Description>
      </StyledDescriptionWrapper>
      <StyledParagraph>
        <Paragraph>UserId: 2</Paragraph>
        <Paragraph>PostId: 2</Paragraph>
      </StyledParagraph>
    </Wrapper>
    <Wrapper>
      <Paragraph secondary>
        <strong>Name:</strong> et fugit eligendi deleniti quidem qui sint nihil
        auteAm
      </Paragraph>

      <Paragraph secondary>
        <strong>Email:</strong> Presley.Mueller@myrl.com
      </Paragraph>
      <StyledDescriptionWrapper>
        <Description>
          doloribus at sed quis culpa deserunt consectetur qui
          praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate
          autem\nvoluptatem repellendus aspernatur dolorem in
        </Description>
      </StyledDescriptionWrapper>
      <StyledParagraph>
        <Paragraph>UserId: 2</Paragraph>
        <Paragraph>PostId: 2</Paragraph>
      </StyledParagraph>
    </Wrapper>
  </>
);
export default CommentPage;
