import styled from 'styled-components';

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.l};
  margin-right: 0.9em;
`;

export default Title;
