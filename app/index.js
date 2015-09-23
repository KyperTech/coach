import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import AppRouter from './routes';

const initialState = {
  cars: [{name:'hola', hp: 210}]
}

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <AppRouter />
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    )
  }
}

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Root />, rootElement
);
