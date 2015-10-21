import {
  UPDATE_PROFILE_IMAGE,
  UPDATE_NAME,
  UPDATE_FOCUS_AREAS,
  UPDATE_DATE_OF_BIRTH,
  UPDATE_CONTACT_METHODS,
  UPDATE_AVAILABILITY,
  UPDATE_SERVICE_DESCRIPTION,
  ADD_COACH,
  ATTEMPT_ADD_COACH,
  RECEIVE_ADD_COACH
} from '../actions/profile';
// import merge from 'lodash/object/merge';
// import _ from 'lodash';

export function profile(state = {
  profileImage: '',
  name: '',
  focusAreas: [],
  dateOfBirth: '',
  contactMethods: [],
  availabilities: [],
  serviceDescription: '',
  created: false
}, action) {
  console.log('action', action);
  switch (action.type) {
    case UPDATE_PROFILE_IMAGE:
      state.profileImage = action.payload;
      return state;
    case UPDATE_NAME:
      state.name = action.payload;
      return state;
    case UPDATE_FOCUS_AREAS:
      state.focusAreas = [...state.focusAreas, action.payload];
      return state;
    case UPDATE_DATE_OF_BIRTH:
      state.dateOfBirth = action.payload;
      return state;
    case UPDATE_CONTACT_METHODS:
      state.contactMethods = action.payload;
      return state;
    case UPDATE_AVAILABILITY:
      state.availabilities = [...state.availabilities, action.payload];
      return state;
    case UPDATE_SERVICE_DESCRIPTION:
      state.serviceDescription = action.payload;
      return state;
    case ADD_COACH:
      return action.payload;
    case ATTEMPT_ADD_COACH:
      return action.payload;
    case RECEIVE_ADD_COACH:
      console.log('added');
      state.created = true;
      return state;
    default:
      return state;
    }
}

export function profileCreated(state = false, action) {
  switch (action.type) {
    case RECEIVE_ADD_COACH:
      return true;
    default:
      return state;
  }
}
