import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters} from "../actions/todo";

/**
 * 專門在處理 todos 的 reducer
 */
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
 * visibilityFilter
 */
function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action){
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state;
  }
}

/**
 * 它也不再需要知道完整的初始 state 了。
 * 子 reducers 們在它們一開始被給予 
 * `undefined 的時候只要回傳它們的初始 state 就足夠了。
 */
export default function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}