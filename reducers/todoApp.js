import {combineReducers} from "redux";

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
 * 請注意這完全等同於：
 * export default function todoApp(state = {}, action) {
 *  return {
 *    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
 *    todos: todos(state.todos, action)
 *  }
 *}
 */
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;