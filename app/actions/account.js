export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_COACH_TYPE = 'UPDATE_COACH_TYPE';
export const UPDATE_DATE_OF_BIRTH = 'UPDATE_DATE_OF_BIRTH';
export const UPDATE_CONTACT_METHODS = 'UPDATE_CONTACT_METHODS';
export const UPDATE_AVAILABILITY = 'UPDATE_AVAILABILITY';
export const UPDATE_SERVICE_DESCRIPTION = 'UPDATE_SERVICE_DESCRIPTION';

// export function attemptSignup(signupData) {
//  return {
//    type: SIGNUP_ATTEMPT,
//    payload: signupData
//  };
// }
//
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
