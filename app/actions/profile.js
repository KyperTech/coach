export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_FOCUS_AREAS = 'UPDATE_FOCUS_AREAS';
export const UPDATE_DATE_OF_BIRTH = 'UPDATE_DATE_OF_BIRTH';
export const UPDATE_CONTACT_METHODS = 'UPDATE_CONTACT_METHODS';
export const UPDATE_AVAILABILITY = 'UPDATE_AVAILABILITY';
export const UPDATE_SERVICE_DESCRIPTION = 'UPDATE_SERVICE_DESCRIPTION';
export const ATTEMPT_ADD_COACH = 'ATTEMPT_ADD_COACH';
export const RECEIVE_ADD_COACH = 'RECEIVE_ADD_COACH';

import mainRef from '../helpers/firebaseClient';
var coachesRef = mainRef.child('coaches');

export function attemptAddCoach(coach) {
  console.log('AttemptAddCoach');
  return {
    type: ATTEMPT_ADD_COACH,
    payload: coach
  };
}

export function addCoach(coach) {
  return (dispatch, getState) => {
    dispatch(attemptAddCoach(coach));
    console.log('distpatch function running.');
    return coachesRef.child(coach.name).set(coach, (err) => {
      if(err){
        return dispatch(handleError(err));
      }
      console.log('coach successfully added to firebase', coach);
      return dispatch(receiveAdd(coach));
    });
  }
}

export function receiveAdd(coach) {
  return {
    type: RECEIVE_ADD_COACH,
    payload: coach
  }
}

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
export function loadProfile(login, requiredFields = []) {
  return (dispatch, getState) => {
    const user = getState().account;
    if (user) {
      return null;
    }
  };
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
