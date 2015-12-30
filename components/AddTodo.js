import React, {Component, PropTypes} from 'react';

export default class AddTodo extends React.Component {

  handleClick(e){
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = "";
  }

  render() {
    return (
      <form onSubmit={e=>{
              e.preventDefault();
              this.handleClick(e)}}>
        <input type="text" ref="input" />
        <button>Add</button>
      </form>
    );
  }
}

AddTodo.PropTypes = {
  onAddClick: PropTypes.func.isRequired
}