import styled, { css } from 'styled-components';

const CardDetails = styled.p`
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.5em;

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: 1em;
    `}

  ${({ trialy }) =>
    trialy &&
    css`
      font-size: 1.1rem;
    `}
`;

export default CardDetails;
