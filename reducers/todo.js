import {
  ADD_TODO,
  COMPLETE_TODO} from "../actions/todo";

export default function todo(state = undefined, action){
  switch(action.type){
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case COMPLETE_TODO:
      if(state.id !== action.index){
        return state;
      }

      return {
        ...state,
        completed: true
      }
    default:
      return state;
  }
}