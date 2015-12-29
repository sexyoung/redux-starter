import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters} from "../actions/todo";

/**
 * 初始化狀態
 */
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todos(state = [], action){
  switch(action.type){
    case ADD_TODO:
      return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ];

    /**
     * 這種寫法好屌 @_@
     */
    case COMPLETE_TODO:
      return [
          ...state.slice(0, action.index),
          Object.assign({}, state[action.index], {
            completed: true
          }),
          ...state.slice(action.index + 1)
        ];
    default:
      return state;
  }
}

/**
 * 定義 reducer
 * 它好像是 store 的一部分,
 * 只有 reducer 會改變整個 store 的內容
 * 另外 default 的意思就是專指回傳這個
 * 有人 import a from "./counter.js"
 * a 指的就是 counter()
 *
 * 但如果沒有寫 default
 * 那就要寫 import {counter} from "./counter.js"
 */
export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      /**
       * Object.assign() 是 ES6 的一部分
       * 不過大部份瀏覽器尚未實作。
       * 你會需要使用一個 polyfill
       */
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case ADD_TODO:
    case COMPLETE_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      })

    default:
      return state;
  }
}