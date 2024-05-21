import { dispatch } from "./store.js";
import { getState, addAction, subtractAction, resetAction } from "./actions.js";

// Get the initial state
getState();

// Dispatch the addAction twice
dispatch(addAction);
dispatch(addAction);

// Get the updated state after adding
getState();

// Dispatch the subtractAction
dispatch(subtractAction);

// Get the updated state after subtracting
getState();

// Dispatch the resetAction
dispatch(resetAction);

// Get the state after resetting
getState();
