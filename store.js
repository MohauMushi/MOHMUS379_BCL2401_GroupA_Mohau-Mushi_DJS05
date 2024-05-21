import { initialState } from "./initialState.js";

/**
 * An array to hold the current state object (initialState)
 * @type {Array<Object>}
 */
export const states = [initialState];

/**
 * An array to hold observer functions (subscribers)
 * @type {Array<Function>}
 */
export const subscribers = [];

/**
 * Dispatch a function to update the state by calling an action creator and notifying all subscribers
 * @param {Function} action - Execute the action function and get the next state
 * @returns {void}
 */
export const dispatch = (action) => {
  const prev = states[0];

  const next = action();

  // Notify all subscribers with the previous and next states
  subscribers.forEach((notify) => notify(prev, next));

  // Update the states array with the new state
  states.unshift(next);
};

/**
 * A function to register an observer function that will be called on state changes
 * @param {Function} notify - The callback function to be called on state changes.
 * @returns {Function} The unsubscribe function.
 */
export const subscribe = (notify) => {
  // Add the subscriber to the subscribers array
  subscribers.push(notify);

  // Unsubscribe from state changes.
  const unsubscribe = () => {
    // Remove the subscriber from the subscribers array
    const result = subscribers.filter((current) => current !== notify);
    subscribers = result;
  };

  return unsubscribe;
};
