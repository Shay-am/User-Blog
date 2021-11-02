import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ size, theme }) => size || theme.s};

  ${({ secondary }) =>
    secondary &&
    css`
      font-size: ${({ size, theme }) => size || theme.xs};
      font-weight: ${({ theme }) => theme.medium};
    `}

  ${({ trials }) =>
    trials &&
    css`
      font-size: ${({ theme }) => theme.x};
      font-weight: ${({ theme }) => theme.bold};
      color: white;
    `}
`;

export default Paragraph;
