import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/configureStore';

const initialState = window.__INITIAL_STATE__ || {
  cars: [{name:'hola', hp: 210}]
};

const store = configureStore(initialState);

let rootElement = document.getElementById('root');

ReactDOM.render(
  <Root store={ store } />, rootElement
);
