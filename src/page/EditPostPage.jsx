import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { useUpdatePostMutation } from 'services/userApi';
import { Button, Paragraph, TextArea } from 'components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
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

const StyledButtonWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`;

const EditPostPage = () => {
  const [isValid, setValid] = useState(true);
  // const history = useHistory();

  const postData = useSelector(({ post }) => post.post);
  const { userId, id: postId } = postData;

  const [title, setTitle] = useState(postData.title);
  const [body, setBody] = useState(postData.body);

  const [updatePost] = useUpdatePostMutation();

  const onSavePostClicked = async () => {
    if (title) {
      setValid(false);
    }
    await updatePost({ title, body, postId });
    // history.push(`/users/${userId}/posts`);
  };

  return (
    <Wrapper>
      <StyledUploading>
        <Paragraph>Upload Post</Paragraph>
      </StyledUploading>
      <StyledWrapperTextArea>
        <TextArea
          placeholder="Write here Title"
          id={postId}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isValid={isValid}
        >
          title
        </TextArea>
      </StyledWrapperTextArea>
      <StyledWrapperTextArea>
        <TextArea
          placeholder=" "
          id={postId}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          isValid={isValid}
        >
          Bodyy
          
        </TextArea>
      </StyledWrapperTextArea>
      <StyledButtonWrapper>
        <Button as={Link} to={`/users/${userId}/posts`}>
          Cancel
        </Button>
        <Button onClick={() => onSavePostClicked()}>Save</Button>
      </StyledButtonWrapper>
    </Wrapper>
  );
};

export default EditPostPage;
