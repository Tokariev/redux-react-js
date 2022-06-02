import { createStore } from "redux";
import reducer from "./reducer";
import * as actions from "./actionTypes";

const store = createStore(reducer);

export default store;
