export const ATTEMPT_ADD_COACH = 'ATTEMPT_ADD_COACH';
export const ADD_COACH = 'ADD_COACH';
export const RECIEVE_ADD_COACH = 'ADD_COACH_RES';
export const ATTEMPT_SEARCH = 'ATTEMPT_SEARCH';
export const RECIEVE_SEARCH = 'RECIEVE_SEARCH';
export const COACH_ERR = 'COACH_ERR';

import Firebase from 'firebase/lib/firebase-web';

var mainRef = new Firebase('https://kyper-coach.firebaseIO.com/');
var coachesRef = mainRef.child('coaches');

export function attemptAddCoach(coach) {
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
      return distpatch(receiveAdd(coach));
    });
  }
}
export function receiveAdd(coach) {
  return {
    type: RECEIVE_ADD_COACH,
    payload: coach
  }
}
export function attemptSearch(query) {
  return {
    type: ATTEMPT_SEARCH,
    payload: query
  };
}
export function handleError(error) {
  return {
    type: COACH_ERR,
    payload: error
  };
}
//Requires react-thunk
export function searchCoaches(query) {
  console.log('search coaches action called', query);
  return (dispatch, getState) => {
    console.log('distpatch function running.');
    dispatch(attemptSearch(query));
    return mainRef.child('coaches').orderByKey().on('value', (snap) => {
      console.log('firebase response:', snap.val());
      let finalArray = [];
      snap.forEach((coachSnap) => {
        let coach = coachSnap.val();
        console.log('checking coach:', coach);
        if(!_.has(coach, 'focusAreas')){
          return;
        }
        let matchingAreas = _.filter(coach.focusAreas, (area) => {
          return area.indexOf(query) !== -1;
        });
        console.log('matching areas', matchingAreas);
        if(matchingAreas.length > 0){
          finalArray.push(coach);
        }
      });
      return dispatch(receiveSearch(finalArray));
    });
  }
}
export function receiveSearch(searchRes) {
  console.log('receive search called', searchRes);
  return {
     type: RECIEVE_SEARCH,
     payload: searchRes,
     receivedAt: Date.now()
   };
}
