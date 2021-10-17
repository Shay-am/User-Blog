import styled from 'styled-components';

const Button = styled.button`
  width: 15rem;
  height: 3.5rem;
  background: ${({ theme }) => theme.btn};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.btn};
    font-weight: bold;
  }
`;

export default Button;
