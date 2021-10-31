import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'Theme/Theme';
import { Home, UserPage, CommentPage, EditPostPage } from 'page';

import GlobalStyle from './Theme/GlobalStyles';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/:id/posts" component={UserPage} />
        <Route exact path="/comments/:postId" component={CommentPage} />
        <Route exact path="/edit/:id" component={EditPostPage} />
      </Switch>
    </ThemeProvider>
  </>
);

export default App;
