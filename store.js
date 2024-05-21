import { initialState } from "./initialState.js";

export const states = [initialState];
  
export const subscribers = [];

export const dispatch = (action) => {
	const prev = states[0];
  
	const next = action();
  
	subscribers.forEach((notify) => notify(prev, next));
  
	states.unshift(next);
  };

  export const subscribe = (notify) => {
	subscribers.push(notify);
  
	const unsubscribe = () => {
	  const result = subscribers.filter((current) => current !== notify);
	  subscribers = result;
	};
  
	return unsubscribe;
  };