export const ADD_CAR = 'ADD_CAR';

export function addCar(car) {
  console.log('action with car', car);
  return {
    type: ADD_CAR,
    payload: car
  };
}
