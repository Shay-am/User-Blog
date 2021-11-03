import React, { useState, useEffect } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { useUpdatePostMutation } from 'services/userApi';
import { Button, Logo, Paragraph } from 'components';
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
  margin: 1em 0;
`;

const StyledUploading = styled.header`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: center;

  color: ${({ theme }) => theme.btn};
  font-size: ${({ theme }) => theme.x};

  border-bottom: 1px solid black;
`;
const StyledLabel = styled(Label)`
  margin-bottom: 0.3em;
`;

const BUttonToolbar = styled.div`
  width: 15em;
  display: flex;
  justify-content: space-around;
`;
const Message = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${({ hasError }) => (hasError ? 'none' : 'block')};

  transform: translateX(10%);
  font-size: 3rem;
`;

const EditPostPage = () => {
  const history = useHistory();
  const [hasError, setError] = useState(false);

  const post = useSelector((state) => state.post.post);
  const { userId, id: postId } = post;

  const [values, setValues] = useState({
    title: post.title,
    body: post.body,
  });

  useEffect(() => {
    if (hasError) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [hasError]);

  const [updatePost] = useUpdatePostMutation();

  const onSavePostClicked = async (e) => {
    e.preventDefault();
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
    <Wrapper hasError={hasError}>
      <StyledUploading>
        <Paragraph size=".8em">Edit Post</Paragraph>
        <NavLink to="/">
          <Logo size="3.4em" />
        </NavLink>
      </StyledUploading>
      <Form>
        <StyledForm>
          <StyledLabel htmlFor="title">Title</StyledLabel>
          <TextArea
            name="title"
            id="title"
            placeholder="Write here your title"
            value={values.title || ''}
            handleChange={handleChange}
          />
        </StyledForm>
        {hasError && <Message>This post is not updated!!! Try again</Message>}
        <StyledForm>
          <StyledLabel htmlFor="body">Body</StyledLabel>
          <TextArea
            name="body"
            id="body"
            placeholder="Write here your body"
            value={values.body || ''}
            handleChange={handleChange}
          />
        </StyledForm>
        <BUttonToolbar>
          <Button cancel="true" as={Link} to={`/users/${userId}/posts`}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => onSavePostClicked()}>
            Save
          </Button>
        </BUttonToolbar>
      </Form>
    </Wrapper>
  );
};

export default EditPostPage;
