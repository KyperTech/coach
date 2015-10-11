export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_FOCUS_AREAS = 'UPDATE_FOCUS_AREAS';
export const UPDATE_DATE_OF_BIRTH = 'UPDATE_DATE_OF_BIRTH';
export const UPDATE_CONTACT_METHODS = 'UPDATE_CONTACT_METHODS';
export const UPDATE_AVAILABILITY = 'UPDATE_AVAILABILITY';
export const UPDATE_SERVICE_DESCRIPTION = 'UPDATE_SERVICE_DESCRIPTION';

export function updateProfileImage(image) {
  return {
    type: UPDATE_PROFILE_IMAGE,
    payload: image
  }
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  }
}

export function updateFocusAreas(focusAreas) {
  return {
    type: UPDATE_FOCUS_AREAS,
    payload: focusAreas
  }
}

export function updateDOB(dob) {
  return {
    type: UPDATE_DATE_OF_BIRTH,
    payload: dob
  }
}

export function updateContactMethods(methods) {
  return {
    type: UPDATE_CONTACT_METHODS,
    payload: methods
  }
}

export function updateAvailability(availability) {
  return {
    type: UPDATE_AVAILABILITY,
    payload: availability
  }
}

export function updateServiceDescription(description) {
  return {
    type: UPDATE_SERVICE_DESCRIPTION,
    payload: description
  }
}

// export function signup(signupData) {
//   return dispatch => {
//     distpatch(attemptSignup(signupData));
//     return matter.signup(action.payload)
//     .then((loginRes) => {
//       dispatch(receiveSignup(signupData, loginRes));
//     }, (err) => {
//       return {type: AUTH_ERR, payload: err};
//     });
//   }
// }
