import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useValidTextArea } from 'helpers';

const Container = styled.div``;

const StyledTextArea = styled.textarea`
  font-size: ${({ theme }) => theme.xxs};
  min-width: 21em;
  height: auto;
  border-color: ${(props) => (props.error ? 'red' : 'none')};
  box-shadow: 0 0 0 3px ${({ theme }) => theme.lightGray};
  padding: 1em;
  outline: none;
`;
const MessageError = styled.p`
  font-size: 0.6em;
  color: red;
`;

const TextArea = ({ name, value, placeholder, handleChange }) => {
  const isErrorWithValidText = useValidTextArea(value);

  return (
    <Container>
      <StyledTextArea
        name={name}
        rows={8}
        cols={9}
        placeholder={placeholder}
        value={value || ''}
        error={isErrorWithValidText}
        onChange={handleChange}
      />
      {isErrorWithValidText && (
        <MessageError>This field is required.</MessageError>
      )}
    </Container>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
