import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import search from './search';
import auth from './auth';
import { profile, profileCreated } from './profile';

const rootReducer = combineReducers({
  search,
  auth,
  profile,
  profileCreated,
  router: routerStateReducer
});

export default rootReducer;
