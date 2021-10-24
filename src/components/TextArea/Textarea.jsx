/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width: 100%;
  outline: none;
  border-style: none;
  border: none;
  resize: vertical;
  border-radius: 10px;
  border: 2px solid transparent;
  border-color: ${({ theme }) => theme.btn};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.lightGray};
  transition: 180ms box-shadow ease-in-out;
  outline: 3px solid transparent;
  padding: 10px;

  &:focus {
    border-color: ${({ theme }) => theme.btn};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.lightGray};
    transition: 180ms box-shadow ease-in-out;
    outline: 3px solid transparent;
  }
`;

const Label = styled.label`
  width: 100px;
  color: ${({ theme }) => theme.btn};
  border-bottom: 1px dotted black;
`;

const TextArea = ({ name, placeholder, value, onChange, children }) => (
  <>
    <Label htmlFor={name}>{children}</Label>
    <StyledTextArea
      placeholder={placeholder}
      id={name}
      rows={6}
      value={value}
      onChange={onChange}
    />
  </>
);

export default TextArea;
