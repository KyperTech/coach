export const ADD_COACH = 'ADD_COACH';

export function addCoach(coach) {
  return {
    type: ADD_COACH,
    payload: coach
  };
}
