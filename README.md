# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

## Project Overview

In this project, the objective was to create a minimalistic, Redux-inspired store to manage the state of a simple Tally App. The focus was on managing state changes efficiently, specifically for core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, the implementation involved subscribing to state updates and logging them to the console, demonstrating the power of state management in applications.

## Objective

The primary objective was to create a Redux-inspired store that could manage and log the state of a counting Tally App. The implementation did not involve UI rendering; instead, it utilized console logs to effectively demonstrate state management.

## User Stories (Gherkin Syntax)

### SCENARIO 1: Initial State Verification

```
GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
```

### SCENARIO 2: Incrementing the Counter

```
GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
```

### SCENARIO 3: Decrementing the Counter

```
GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
```

### SCENARIO 4: Resetting the Counter

```
GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0
```

## Requirements

- **Implement a Global Store**: Create a Redux-inspired store that holds the state of the tally counter. The store should have the ability to dispatch actions and subscribe to state changes.
- **State Management Functions**:
  - **getState**: Returns the current state.
  - **dispatch**: Takes an action (e.g., ADD, SUBTRACT, RESET) and updates the state accordingly.
  - **subscribe**: Accepts a function that gets called whenever the state changes. This function should log the new state to the console.
- **No UI Rendering**: This challenge focuses on state management without the complexity of UI rendering. All state changes should be observable through console logs.
- **Functional Programming Principles**: Draw upon functional programming concepts as illustrated in the reference videos. While Redux is the inspiration, you're encouraged to apply these principles creatively in your implementation.

## How to run code

## A brief overview of the approach

1. **initialSate.js**: This file defines the initial state object with a single property value initialized to 0.
2. **actions.js**: This file contains action creator functions that return new state objects based on the current state. The actions includes `addAction` (increments `value`), `subtractAction` (decrements `value`), `resetAction` (resets `value` to the initial state), and `getState` (logs the current state)
3. **store.js**: This file contains the core functionality tally app.

- `states` is an array that holds the current state object (initially set to `initialState`).
- `subscribers `is an array that holds observer functions (`subscribers`).
- `dispatch` is a function that takes an action creator function as an argument, executes it to get the next state, and notifies all subscribers with the previous and next states.
- `subscribe` is a function that allows registering an observer function (subscriber) to be called on state changes. It returns an `unsubscribe` function to remove the subscriber if needed

4. **scripts.js**:This file demonstrates the usage of the state management system.

- It imports the necessary functions from `store.js` and `actions.js`.
- It logs the initial state using `getState`.
- It dispatches `addAction` twice, updating the state by incrementing `1`.
- It logs the updated state after adding.
- It dispatches `subtractAction`, updating the state by decrementing `1`.
- It logs the updated state after subtracting.
- It dispatches `resetAction`, resetting the state to its initial value.
- It logs the state after resetting.

## challenges and how they were overcome

First challenges, the video that schalk was doing functional programming: state management, using a store pattern, was very confusing as i didn't understand anything, but watching the videos again and slowing the pace of the videos, it became clear on how to do functional programming: state management, using a store pattern.

1. **Managing State Complexity**: As i was building the state management using store pattern, the code started to be become complicated and confusing, and not understanding the store, But looking again to the videos, it helped make things clear and understandable and complete the project.

- Challenge: As applications grow, managing state became complex, making it difficult for me to maintain and reason about the state changes.
- Solution: The implementation followed the principles of state management by separating concerns and organizing the codebase into different files (initialState.js, actions.js, store.js). This separation promotes code organization and maintainability, making it easier to manage the state as the application grows.

## what I learned from this project:

I've gained a valuable insights into state management principles and the observer pattern, also i've implemented a basic state management system inspired by Redux.
Learned about the observer pattern, which allows subscribing to state changes and notifying subscribers when the state is updated, also learned the flow of state management, including dispatching actions, updating the state based on the action, and notifying subscribers of state changes.
