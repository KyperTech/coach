import React from 'react';
import storeConfig from './store/configureStore';
import { Provider } from 'react-redux';
import Main from './components/Main';
import rootReducer from './reducers';

const store = storeConfig();
let rootElement = document.body;
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <Main />}
  </Provider>,
  rootElement
);
