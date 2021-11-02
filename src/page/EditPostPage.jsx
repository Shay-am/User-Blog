import React, { useState, useEffect } from 'react';
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
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
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
const Message = styled.span`
  font-size: 3rem;
`;

const EditPostPage = () => {
  const history = useHistory();
  const [isError, setError] = useState(false);

  const post = useSelector((state) => state.post.post);
  const { userId, id: postId } = post;

  const [values, setValues] = useState({
    title: post.title,
    body: post.body,
  });

  const [updatePost] = useUpdatePostMutation();

  const onSavePostClicked = async () => {
    try {
      if (values.title && values.body) {
        await updatePost({
          title: values.title,
          body: values.body,
          postId,
        })
          .unwrap()
          .then(() => history.push(`/users/${postId}/posts`))
          .catch(() => setError(true));
      }
    } catch (err) {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Wrapper>
      <StyledUploading>
        <Paragraph>Upload Post</Paragraph>
      </StyledUploading>
      <Form>
        <StyledForm>
          <Label htmlFor="title">Title</Label>
          <TextArea
            name="title"
            placeholder="Write here your title"
            value={values.title || ''}
            handleChange={handleChange}
          />
        </StyledForm>
        {isError && <Message>This post is not updated!!! Try again</Message>}
        <StyledForm>
          <Label htmlFor="body">Body</Label>
          <TextArea
            name="body"
            placeholder="Write here your body"
            value={values.body || ''}
            handleChange={handleChange}
          />
        </StyledForm>
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
