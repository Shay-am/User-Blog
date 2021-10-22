import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ theme }) => theme.bold};
  margin-right: 15px;
`;

export default Title;
