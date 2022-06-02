import store from "./store";
import * as action from "./actions";

store.dispatch(action.bugAdd("Bug 1"));
store.dispatch(action.bugAdd("Bug 2"));
store.dispatch(action.bugResolve(1));

console.log(store.getState());
