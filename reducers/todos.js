import {
  ADD_TODO,
  COMPLETE_TODO} from "../actions/todo";

/**
 * 專門在處理 todos 的 reducer
 */
export default function todos(state = [], action){
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