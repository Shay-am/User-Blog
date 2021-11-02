import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paragraph, Description } from 'components';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1em 0 0 0;
  padding: 0.5em;
`;

const WrapperItem = styled.article`
  width: 60vw;
`;

const StyledDescriptionWrapper = styled.section`
  margin: 1em 0 0 0;
`;
const StyledParagraph = styled.section`
  display: flex;
  margin: 1em 0 0 0;
  justify-content: space-evenly;
`;
const StyledParagraphName = styled.div`
  margin-bottom: 0.5em;
`;

const ListComments = ({ postId, id, name, body, email }) => (
  <Wrapper>
    <WrapperItem>
      <StyledParagraphName>
        <Paragraph secondary>
          <strong>Name:</strong> {name}
        </Paragraph>
      </StyledParagraphName>
      <Paragraph secondary>
        <strong>Email:</strong> {email}
      </Paragraph>
      <StyledDescriptionWrapper>
        <Description>{body}</Description>
      </StyledDescriptionWrapper>
      <StyledParagraph>
        <Paragraph secondary>Comment Id: {id}</Paragraph>
        <Paragraph secondary>PostId: {postId}</Paragraph>
      </StyledParagraph>
    </WrapperItem>
  </Wrapper>
);

ListComments.propTypes = {
  postId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ListComments;
