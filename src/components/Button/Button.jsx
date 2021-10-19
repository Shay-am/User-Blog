import styled from 'styled-components';
// import NextArrow from 'assets/NextArrow.svg';

const Button = styled.button`
  width: fit-content;

  font-size: 2rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.btn};
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &::after {
    content: url('/NextArrow.svg');
    /* background-image: url('./NextArrow.svg'); */
    width: 10px;
    height: 20px;
    display: block;
    color: black;
    position: relative;
    top: 3px;
  }

  &:hover {
    color: ${({ theme }) => theme.btn};
    font-weight: bold;
  }
`;

export default Button;
