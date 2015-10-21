import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import search from './search';
import auth from './auth';
import profile from './profile';

const rootReducer = combineReducers({
  search,
  auth,
  profile,
  router: routerStateReducer
});

export default rootReducer;
