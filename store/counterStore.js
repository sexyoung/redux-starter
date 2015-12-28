import {createStore} from "redux";
import counter from "../reducers/counter";

// 把 reducer 做成 store (未來也可能會有多個 reducer)
let store = createStore(counter);
export default store;