import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { useUpdatePostMutation } from 'services/userApi';
import { Button, Paragraph } from 'components';
import { Form, Label, TextArea } from 'components/FormGroup';

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
  height: 10vh;
  color: ${({ theme }) => theme.btn};
  font-size: ${({ theme }) => theme.x};
  padding: 10px;
  margin-bottom: 40px;
  border: 1px solid black;
`;

const BUttonToolbar = styled.div`
  width: 15em;
  display: flex;
  justify-content: space-around;
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
      <Form>
        <Label htmlFor="title">Title</Label>
        <TextArea
          name="title"
          placeholder="Write here your title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label htmlFor="body">Body</Label>
        <TextArea
          name="body"
          placeholder="Write here your title"
          defaultValue={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <BUttonToolbar>
          <Button as={Link} to={`/users/${userId}/posts`}>
            Cancel
          </Button>
          <Button onClick={() => onSavePostClicked()}>Save</Button>
        </BUttonToolbar>
      </Form>
    </Wrapper>
  );
};

export default EditPostPage;
