import React, { useState } from 'react';
import styled from 'styled-components';
import { useValidTextArea } from 'helpers';

const Container = styled.div``;

const StyledTextArea = styled.textarea`
  font-size: ${({ theme }) => theme.xs};
  min-width: 80vw;
  border-color: ${(props) => (props.error ? 'red' : 'blue')};
  box-shadow: 0 0 0 3px ${({ theme }) => theme.lightGray};

  padding: 1em;
  outline: none;

  word-wrap: break-word;
  text-size-adjust: 100%;
`;
const Message = styled.p`
  font-size: 0.6em;
  color: red;
`;

const TextArea = ({ name, value, placeholder, handleChange }) => {
  const isErrorWithValidText = useValidTextArea(value);

  return (
    <Container>
      <StyledTextArea
        name={name}
        rows={7}
        placeholder={placeholder}
        value={value || ''}
        error={isErrorWithValidText}
        onChange={handleChange}
      />
      {isErrorWithValidText && <Message>This Pole is required</Message>}
    </Container>
  );
};

export default TextArea;
