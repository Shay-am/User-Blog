import styled from 'styled-components';

const Label = styled.label`
  width: 10em;
  color: ${({ theme }) => theme.btn};
  font-weight: 600;
  position: relative;
  right: 85px;
  align-self: auto;
`;

export default Label;
