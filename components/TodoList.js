import React, {PropTypes} from 'react';
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => 
          <Todo
            {...todo}
            key={index}
            onClick={()=> this.props.onTodoClick(index)}/>
        )}
      </ul>
    );
  }
}

TodoList.PropTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired
}