import store from "./store/todoStore";

// 取得 action function
import {addTodo, setVisibilityFilter, completeTodo} from './actions/todo';

// 透過 getState() 取得目前的 state
console.log(store.getState());

// 透過 dispatch() 發送我們剛剛所定義的 action
/**
 * 通常是這樣叫 store.dispatch({type: XXX, value})
 */
store.dispatch(addTodo("你好啊"));

// 看執行後的 state
console.log(store.getState());

store.dispatch(addTodo());
console.log(store.getState());

// 顯示欄為 秀 已完成
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));
console.warn(store.getState());

// 完成 index 1
store.dispatch(completeTodo(1));
console.warn(store.getState());