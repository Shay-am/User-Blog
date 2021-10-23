import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.s};

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: ${({ theme }) => theme.xs};
      font-weight: ${({ theme }) => theme.medium};
    `}
`;

export default Paragraph;
