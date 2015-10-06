import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import coaches from './coaches';
import auth from './auth';

const rootReducer = combineReducers({
  coaches,
  auth,
  router: routerStateReducer
});

export default rootReducer;
