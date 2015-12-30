import React, {Component} from 'react';
import { connect } from 'react-redux'
import {
  addTodo,
  completeTodo,
  VisibilityFilters,
  setVisibilityFilter} from '../actions/todo';

import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    const {dispatch, visibilityTodos, visibilityFilter} = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))} />
        <TodoList
          todos={visibilityTodos}
          onTodoClick={index=>dispatch(completeTodo(index))} />
        <Footer
          filter={visibilityFilter}
          onFilterChange={filter=>dispatch(setVisibilityFilter(filter))} />
      </div>
    );
  }
}

function selectTodo(todos, filter){
  switch(filter){
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
  }
}

// 我們想要從給定的全域 state 注入哪些 props？
function select(state){
  return {
    visibilityTodos: selectTodo(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App);