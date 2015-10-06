import { ADD_COACH } from '../actions';

export default function coaches(state = [], action) {
  switch (action.type) {
  case ADD_COACH:
    return [...state, action.payload];
  default:
    return state;
  }
}
