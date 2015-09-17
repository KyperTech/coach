import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main';
import Routes from './routes';
import rootReducer from './reducers';

const initialState = {
  cars: [{name:'hola',hp: 210}]
}
let store = createStore(rootReducer, initialState);

let rootElement = document.body;
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <Routes />}
  </Provider>,
  rootElement
);
