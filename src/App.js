import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/Theme';
import MainPage from 'page/MainPage';

import GlobalStyle from './Theme/GlobalStyles';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <StyledApp>
          <MainPage />
        </StyledApp>
      </>
    </ThemeProvider>
  </>
);

export default App;
