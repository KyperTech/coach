import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './root';

const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);


let rootElement = document.getElementById('root');

ReactDOM.render(
  <Root />, rootElement
);
