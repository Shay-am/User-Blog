import styled from 'styled-components';

import { ReactComponent as LogoApp } from 'assets/logo.svg';

const Logo = styled(LogoApp)`
  width: ${({ size }) => size || '150px'};
  margin: 0;
`;

export default Logo;
