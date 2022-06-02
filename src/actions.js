import * as actions from "./actionTypes";

export const bugAdd = (description) => ({
  type: actions.BUG_ADD,
  payload: {
    description: description,
  },
});

export const bugResolve = (id) => ({
  type: actions.BUG_RESOLVE,
  payload: {
    id: id,
  },
});
