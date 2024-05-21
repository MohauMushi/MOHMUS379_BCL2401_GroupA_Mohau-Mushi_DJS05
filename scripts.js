import {dispatch } from "./store.js";
import {getState, addAction, subtractAction, resetAction } from "./actions.js";


getState();


dispatch(addAction);
dispatch(addAction);

getState();

dispatch(subtractAction);

getState();

dispatch(resetAction);

getState();