import styled, { css } from 'styled-components';

const Description = styled.article`
  text-align: justify;
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.xs};
  padding: 0.2em 0 0.3em 0;
  margin-top: 5px;
  line-height: 20px;

  ${({ post }) =>
    post &&
    css`
      font-size: 1.7rem;
    `}
`;

export default Description;
