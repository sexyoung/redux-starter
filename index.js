/**
 * libs
 */
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import store from "./store/todoStore";
import App from "./containers/App";

// 取得 action function
import {addTodo, setVisibilityFilter, completeTodo} from './actions/todo';

// 透過 getState() 取得目前的 state
console.log(store.getState());

// 每次 store 有更動就 console 它
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)


store.dispatch(addTodo("你好啊"));

// 新增項目
store.dispatch(addTodo());

// 顯示欄為 秀 已完成
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

// 完成 index 1
store.dispatch(completeTodo(1));

unsubscribe();
store.dispatch(completeTodo(0));

render(
  <App />,
  document.getElementById("root")
);