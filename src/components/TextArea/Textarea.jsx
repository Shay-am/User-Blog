/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  font-size: ${({ theme }) => theme.xxs};
  width: 25em;
  min-height: 5em;
  border-color: ${({ theme }) => theme.btn};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.lightGray};
  transition: 180ms box-shadow ease-in-out;

  padding: 10px;
  word-wrap: break-word;
  text-size-adjust: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.btn};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.lightGray};
    transition: 180ms box-shadow ease-in-out;
    outline: 3px solid transparent;
  }
  &:invalid {
    border-color: red;
  }
`;

const Label = styled.label`
  width: 10em;
  color: ${({ theme }) => theme.btn};
  border-bottom: 1px dotted black;
`;

const TextArea = ({ name, placeholder, value, handler, children }) => (
  <StyledTextArea>
    <Label htmlFor={name}>{children}</Label>
    <StyledTextArea
      placeholder={placeholder}
      name={name}
      rows={7}
      value={value}
      onChange={handler}
    />
  </StyledTextArea>
);

export default TextArea;
