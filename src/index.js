import store from "./customStore";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("Store changed!");
});
store.dispatch(actions.bugAdd("Bug 1"));

console.log(store.getState());
