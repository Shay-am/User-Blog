import styled from 'styled-components';

const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.x};
  margin-right: 0.9em;
`;

export default H1;
