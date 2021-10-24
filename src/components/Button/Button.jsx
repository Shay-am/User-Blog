import styled, { css } from 'styled-components';
import prevIconButton from '../../assets/PrevIconButton.svg';

const Button = styled.button`
  font-size: ${({ theme }) => theme.s};
  padding: 0.7rem;
  background: ${({ theme }) => theme.btn};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;

  ${({ cancel }) =>
    cancel &&
    css`
      height: 30px;
      text-align: center;
      font-size: ${({ theme }) => theme.xxs};
      background: ${({ theme }) => theme.grey};
    `}

  ${({ prev }) =>
    prev &&
    css`
      margin-left: 30px;
      background: none;
      color: black;
      width: 7rem;
      height: 4rem;
      border-radius: none;
      font-size: 1.3rem;

      &::before {
        width: 70px;
        height: 70px;
        content: '';
        position: absolute;
        background-image: url(${prevIconButton});
        background-size: cover;

        background-repeat: no-repeat;
        background-size: 50px 50px;
        left: 2px;
        top: 3px;
      }
    `}
`;

export default Button;
