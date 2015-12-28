import store from "./store/counterStore";
import {increment} from './actions/coutner.js';

// 透過 getState() 取得目前的 state
console.log(store.getState());

// 透過 dispatch() 發送我們剛剛所定義的 action
store.dispatch(increment());

// 看執行後的 state
console.log(store.getState());

store.dispatch(increment());
console.log(store.getState());