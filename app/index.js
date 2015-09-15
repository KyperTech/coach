import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from './components/Main';
import rootReducer from './reducers';

let store = createStore(rootReducer);

let rootElement = document.body;
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <Main />}
  </Provider>,
  rootElement
);
