import styled from 'styled-components';

const TextArea = styled.textarea.attrs((props) => ({
  name: props.name,
  placeholder: props.placeholder,
  value: props.value,
  rows: 8,
  onChange: props.handler,
}))`
  font-size: ${({ theme }) => theme.xs};
  width: 25em;
  border-color: ${({ theme }) => theme.btn};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.lightGray};
  transition: 180ms box-shadow ease-in-out;
  padding: 1em;
  margin-bottom: 1em;
  word-wrap: break-word;
  text-size-adjust: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.btn};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.lightGray};
    transition: 180ms box-shadow ease-in-out;
    outline: 3px solid transparent;
  }
`;

export default TextArea;
