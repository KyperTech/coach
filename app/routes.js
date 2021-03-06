import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router'
import { ReduxRouter } from 'redux-router';
// import Main from './components/Main';
// import Login from './components/Login';
// import {
//     App,
//     Home,
//     About,
//     Login,
//     RequireLogin,
//     LoginSuccess,
//     NotFound,
//   } from 'containers';
import App from './containers/App/App';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Profile from './containers/Profile/Profile';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import RequireLogin from './containers/RequireLogin/RequireLogin';
import LoginSuccess from './containers/LoginSuccess/LoginSuccess';
import NotFound from './containers/NotFound/NotFound';
import NewCoach from './containers/NewCoach/NewCoach';
import TimeSlider from './components/TimeSlider/TimeSlider';

export default class AppRouter extends Component {
  render() {
    return (
      <ReduxRouter>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home } />
          <Route path="login" component={ Login }/>
          <Route path="signup" component={ Signup }/>
          <Route path="about" component={ About } />
          <Route path="profile" component={ Profile } />
          <Route path="new" component={ NewCoach } />
          <Route path="test" component={ TimeSlider } />

          <Route path="*" component={ NotFound } />
        </Route>
      </ReduxRouter>
    )
  }
}
