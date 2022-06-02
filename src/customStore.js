import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach((listener) => {
      listener();
    });
  }

  function getState() {
    return state;
  }
  return {
    subscribe,
    getState,
    dispatch,
  };
}

export default createStore(reducer);
