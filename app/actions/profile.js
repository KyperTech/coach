export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_FOCUS_AREAS = 'UPDATE_FOCUS_AREAS';
export const UPDATE_DATE_OF_BIRTH = 'UPDATE_DATE_OF_BIRTH';
export const UPDATE_CONTACT_METHODS = 'UPDATE_CONTACT_METHODS';
export const UPDATE_AVAILABILITY = 'UPDATE_AVAILABILITY';
export const UPDATE_SERVICE_DESCRIPTION = 'UPDATE_SERVICE_DESCRIPTION';

import logger from '../helpers/logger';
import Matter from 'kyper-matter';
let matter = new Matter('exampleApp');

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
export function signup(signupData) {
  logger.log({
    description: 'Login response.',
    response: loginRes,
    func: 'signup',
    obj: 'ProfileAction'
  });
  return dispatch => {
    distpatch(attemptSignup(signupData));
    logger.log({
      description: 'Signup action called.',
      data: signupData,
      func: 'signup',
      obj: 'ProfileAction'
    });
    return matter.signup(action.payload)
    .then((signupRes) => {
      logger.log({
        description: 'Signup successful.',
        response: signupRes,
        func: 'signup',
        obj: 'ProfileAction'
      });
      dispatch(receiveSignup(signupData, loginRes));
    }, (err) => {
      return {type: AUTH_ERR, payload: err};
    });
  }
}
export function attemptLogin(loginData) {
 return {
   type: LOGIN_ATTEMPT,
   payload: loginData
 };
}
//Requires react-thunk
export function login(loginData) {
  logger.log({
    description: 'login action called',
    loginData: loginData,
    func: 'login',
    obj: 'ProfileAction'
  });
  return (dispatch, getState) => {
    dispatch(attemptLogin(loginData));
    return matter.login(loginData)
    .then(loginRes => {
      logger.log({
        description: 'Login response.',
        response: loginRes,
        func: 'login',
        obj: 'ProfileAction'
      });
      return dispatch(receiveLogin(loginData, loginRes));
    });
  }
}
export function receiveLogin(loginData, res) {
  logger.log({
    description: 'Receive login called.',
    data: loginData,
    response: res,
    func: 'receive',
    obj: 'ProfileAction'
  });
 return {
   type: LOGIN_RESPONSE,
   loginData: loginData,
   account: res,
   receivedAt: Date.now()
 };
}
