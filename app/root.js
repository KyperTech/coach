import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import AppRouter from './app-router';


class Root extends Component {
  constructor(dev) {
    super();
    this.dev = dev || false;
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Provider store={this.props.store}>
          <AppRouter />
        </Provider>
      </div>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
