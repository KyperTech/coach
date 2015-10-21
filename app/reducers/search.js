import {
  ATTEMPT_SEARCH,
  RECIEVE_SEARCH,
  COACH_ERR
} from '../actions/search';
import merge from 'lodash/object/merge';
import _ from 'lodash';

export default function search(state = {
  coaches: []
}, action) {
  switch (action.type) {
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
