import {
  ADD_COACH,
  ATTEMPT_ADD_COACH,
  RECIEVE_ADD_COACH,
  ATTEMPT_SEARCH,
  RECIEVE_SEARCH,
  COACH_ERR
} from '../actions/coach';
import merge from 'lodash/object/merge';
import _ from 'lodash';

export default function coaches(state = {
  coaches: []
}, action) {
  switch (action.type) {
    case ADD_COACH:
      return merge([], state, action.payload);
    case ATTEMPT_ADD_COACH:
      return merge([], state, action.payload);
    case ATTEMPT_SEARCH:
      console.log('attempting search...', action);
      return state;
    case RECIEVE_SEARCH:
      console.log('receving search...', action, state);
      return merge([], action.payload);
    case COACH_ERR:
      return merge({}, state, action.payload);
    default:
      return state;
    }
}
