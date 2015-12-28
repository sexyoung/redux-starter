import {createStore} from "redux";

// 定義 constant (常數)
const INCREMENT = 'INCREMENT';

/**
 * 定義 reducer
 * 它好像是 store 的一部分,
 * 只有 reducer 會改變整個 store 的內容
 */
function counter(state=0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  default:
    return state;
  }
}

// 把 reducer 做成 store (未來也可能會有多個 reducer)
let store = createStore(counter);

// 透過 getState() 取得目前的 state
console.log(store.getState());

// 透過 dispatch() 發送我們剛剛所定義的 action
store.dispatch({
  type: 'INCREMENT'
});


// 看執行後的 state
console.log(store.getState());
