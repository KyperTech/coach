import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';
import routes from '../routes';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  reduxReactRouter({
    routes,
    createHistory
  }),
  devTools()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
