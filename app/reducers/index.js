import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import coaches from './coaches';
import auth from './auth';
import profile from './profile';

const rootReducer = combineReducers({
  coaches,
  auth,
  profile,
  router: routerStateReducer
});

export default rootReducer;
