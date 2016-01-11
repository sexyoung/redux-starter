import {
  ADD_TODO,
  COMPLETE_TODO} from "../actions/todo";


import todo from "./todo";

/**
 * 專門在處理 todos 的 reducer
 */
export default function todos(state = [], action){
  switch(action.type){
    case ADD_TODO:
      return [
          ...state,
          todo(undefined, action)
        ];

    case COMPLETE_TODO:
      return state.map(t => 
        todo(t, action));
    default:
      return state;
  }
}