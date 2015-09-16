import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-react-router';
import { devTools } from 'redux-devtools';
import createHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';

const createStoreWithMiddleware = compose(
  // Save for redux middleware
  // applyMiddleware(),
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
