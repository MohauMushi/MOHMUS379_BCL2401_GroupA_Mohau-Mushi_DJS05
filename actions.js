import { states } from "./store.js";
import { initialState } from "./initialState.js";

export const addAction = () => {
  return {
    ...states[0],
    value: states[0].value + 1,
  };
};

export const subtractAction = () => {
  return {
    ...states[0],
    value: states[0].value - 1,
  };
};

export const resetAction = () => {
  return {
    ...initialState,
  };
};

export const getState = (index) => {
  console.log(states[0]);
};
