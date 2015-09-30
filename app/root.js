import React, { Component, PropTypes } from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import AppRouter from './app-router';


class Root extends Component {
  constructor(dev) {
    super();
    this.dev = dev;
  }
  render() {
    let panel = this.dev ? (
        <DebugPanel top right bottom>
          <DevTools store={this.props.store} monitor={LogMonitor} />
        </DebugPanel>
    ) : '';
    return (
      <div>
        <Provider store={this.props.store}>
          <AppRouter />
        </Provider>
        { panel }
      </div>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
