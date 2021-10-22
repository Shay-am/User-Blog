import styled, { css } from 'styled-components';

const Button = styled.button`
  width: fit-content;
  font-size: 2rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.btn};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.btn};
    font-weight: bold;
  }

  ${({ prev }) =>
    prev &&
    css`
      &::after {
        content: '';
        display: block;
        position: relative;
        background-image: url('../assets/NextArrow.svg');
        background-size: 28px 28px;
        height: 40px;
        width: 40px;
      }
    `}
`;

export default Button;
