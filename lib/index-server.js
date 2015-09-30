'use strict';

import React from 'react';
import Root from '../app/root';

import configureStore from '../app/store/configureStore';

export default () => {
  // Compile an initial state
  const initialState = { word: 'asdf' };

  // Create a new Redux store instance
  const store = configureStore(initialState);

  // Grab the initial state from our Redux store
  const finalState = store.getState();

  return {
    appData: finalState,
    appMarkup: React.renderToString(<Root store={ store }/>)
  };
}
