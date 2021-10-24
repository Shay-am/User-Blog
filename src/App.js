import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/Theme';
import { MainPage, UserPage, CommentPage, EditPostPage } from 'page';

import GlobalStyle from './Theme/GlobalStyles';

const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/user/1" component={UserPage} />
          <Route exact path="/comments" component={CommentPage} />
          <Route exact path="/edit" component={EditPostPage} />
        </Switch>
      </ThemeProvider>
    </Router>
  </>
);

export default App;
