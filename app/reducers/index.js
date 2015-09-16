import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-react-router';
import cars from './cars';


const rootReducer = combineReducers({
  cars,
  router: routerStateReducer
});

export default rootReducer;
