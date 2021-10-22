import styled, { css } from 'styled-components';

const Description = styled.article`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ theme }) => theme.extraLight};
  font-size: 1rem;
  padding: 4px 0 5px 0;
  margin-top: 5px;

  ${({ post }) =>
    post &&
    css`
      min-width: 90vw;
      font-size: 1.7rem;
    `}
`;

export default Description;
