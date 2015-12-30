import React, {Component} from 'react';
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            console.warn(text)} />
        <TodoList
          todos={[
            {
              text: 'Use Redux',
              completed: 32
            },
            {
              text: 'Use Sexyoung',
              completed: false
            }
          ]}
          onTodoClick={index=>console.warn("todo click: ",index)} />
        <Footer
          filter="SHOW_ALL"
          onFilterChange={filter=>console.warn(filter)} />
      </div>
    );
  }
}
