import {createStore} from "redux";
import todo from "../reducers/todoApp";

// 把 reducer 做成 store (未來也可能會有多個 reducer)
let store = createStore(todo);
export default store;