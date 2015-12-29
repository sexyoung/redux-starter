import {createStore} from "redux";
import todoApp from '../reducers/';

// 把 reducer 做成 store (未來也可能會有多個 reducer)
let store = createStore(todoApp);
export default store;