import React from 'react';
import styled from 'styled-components';
import { Paragraph, Description } from 'components';

const Wrapper = styled.div`
  display: flex;
  width: auto;
  min-height: 200px;
  flex-direction: column;
  justify-content: space-around;
  margin: 1em 0 0 0;
  padding: 0.5em;
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

const ListComments = ({ postId, id, name, body, email }) => (
  <Wrapper>
    <Paragraph secondary>
      <strong>Name:</strong> {name}
    </Paragraph>
    <Paragraph secondary>
      <strong>Email:</strong> {email}
    </Paragraph>
    <StyledDescriptionWrapper>
      <Description>{body}</Description>
    </StyledDescriptionWrapper>
    <StyledParagraph>
      <Paragraph>Comment Id: {id}</Paragraph>
      <Paragraph>PostId: {postId}</Paragraph>
    </StyledParagraph>
  </Wrapper>
);

export default ListComments;
