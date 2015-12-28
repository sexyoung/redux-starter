import {createStore} from "redux";

// const
const INCREMENT = 'INCREMENT';

// reducer
function counter(state=0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  default:
    return state;
  }
}

let store = createStore(counter);

// 透過 getState() 取得目前的 state
console.log(store.getState());

// 透過 dispatch() 發送我們剛剛所定義的 action
store.dispatch({
  type: 'INCREMENT'
});


// 看執行後的 state
console.log(store.getState());
