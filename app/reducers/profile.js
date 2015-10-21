import {
  UPDATE_PROFILE_IMAGE,
  UPDATE_NAME,
  UPDATE_FOCUS_AREAS,
  UPDATE_DATE_OF_BIRTH,
  UPDATE_CONTACT_METHODS,
  UPDATE_AVAILABILITY,
  UPDATE_SERVICE_DESCRIPTION
} from '../actions/profile';
// import merge from 'lodash/object/merge';
// import _ from 'lodash';

export default function profile(state = {
  profileImage: '',
  name: '',
  focusAreas: [],
  dateOfBirth: '',
  contactMethods: [],
  availabilities: [],
  serviceDescription: ''
}, action) {
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
    default:
      return state;
    }
}
