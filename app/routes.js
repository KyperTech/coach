import React, { Component } from 'react';
import { Route } from 'react-router'
import { ReduxRouter } from 'redux-router';
import Main from './components/Main';
import Login from './components/Login';

class AppRouter extends Component {
  render() {
    return (
      <ReduxRouter>
        <Route path="/" component={ Main }>
          <Route path="login" component={ Login } />
        </Route>
      </ReduxRouter>
    )
  }
}

export default AppRouter;
