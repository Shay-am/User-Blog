import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Paragraph, TextArea } from 'components';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  /* background-color: hsla(214, 61%, 60%, 1); */
`;

const StyledUploading = styled.div`
  width: 100vw;
  height: 10vw;
  color: ${({ theme }) => theme.btn};
  font-size: ${({ theme }) => theme.x};
  padding: 10px;
  margin-bottom: 40px;
  border: 1px solid black;
`;

const StyledWrapperTextArea = styled.div`
  width: 80vw;
  margin-bottom: 10px;
`;

const StyledButtonWrapepr = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`;

const test = 'Lorem impsum blab bla';

const EditPostPage = () => {
  const [text, setText] = useState(test);

  return (
    <>
      <Wrapper>
        <StyledUploading>
          <Paragraph>Upload Post</Paragraph>
        </StyledUploading>
        <StyledWrapperTextArea>
          <TextArea
            placeholder=""
            id={2}
            value={text}
            onChange={(e) => setText(e.target.value)}
          >
            Title
          </TextArea>
        </StyledWrapperTextArea>
        <StyledWrapperTextArea>
          <TextArea
            placeholder=""
            id={2}
            value={text}
            onChange={(e) => setText(e.target.value)}
          >
            Body
          </TextArea>
        </StyledWrapperTextArea>
        <StyledButtonWrapepr>
          <Button cancel as={Link} to="/user/1">
            Cancel
          </Button>
          <Button as={Link} to="/user/1">
            Save
          </Button>
        </StyledButtonWrapepr>
      </Wrapper>
    </>
  );
};

export default EditPostPage;
