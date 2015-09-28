import React, { Component } from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import AppRouter from './routes';

import configureStore from './store/configureStore';

class Root extends Component {
  constructor(dev) {
    super();
    this.dev = dev;
  }
  render() {
    let panel = this.dev ? (
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
    ) : '';
    return (
      <div>
        <Provider store={store}>
          <AppRouter />
        </Provider>
        { panel }
      </div>
    )
  }
}

export default Root;
