import { states } from "./store.js";
import { initialState } from "./initialState.js";

/**
 * Incrementing the value in the current state.
 * @returns {Object} A new state object with an incremented value.
 */
export const addAction = () => {
  return {
    ...states[0],
    value: states[0].value + 1,
  };
};

/**
 * Decrementing the value in the current state.
 * @returns {Object} A new state object with a decremented value.
 */
export const subtractAction = () => {
  return {
    ...states[0],
    value: states[0].value - 1,
  };
};

/**
 * Resetting the state to its initial value.
 * @returns {Object} The initial state object.
 */
export const resetAction = () => {
  return {
    ...initialState,
  };
};

/**
 * Get the state at the specified index.
 * @param {number} index - The index of the state to retrieve.
 * @returns {void} Logs the state object to the console.
 */
export const getState = (index) => {
  console.log(states[0]);
};
