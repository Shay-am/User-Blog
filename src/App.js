import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/Theme';
import { MainPage, UserPage } from 'page';

import GlobalStyle from './Theme/GlobalStyles';

const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/user/:id">
            <UserPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  </>
);

export default App;
