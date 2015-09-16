import { ADD_CAR } from '../actions';

export default function cars(state = [{name:'hola',hp: 210}], action) {
  switch (action.type) {
  case ADD_CAR:
    return [...state, action.payload];
  default:
    return state;
  }
}
