import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/Theme';
import { MainPage, UserPage, CommentPage } from 'page';

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
          <Route exact path="/user/1">
            <UserPage />
          </Route>
          <Route exact path="/comments">
            <CommentPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  </>
);

export default App;
