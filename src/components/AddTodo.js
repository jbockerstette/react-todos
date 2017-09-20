import React from "react";
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  handleSubmit() {
    this.props.handleAddTodo(this.state.input);
    this.refs.todoInput.value = '';
  }

  render() {
    return (
      <div>
        <input type="text" ref="todoInput" onChange={this.handleChange.bind(this)}/>
        <button onClick={this.handleSubmit.bind(this)}>Add Todo
        </button>
      </div>
    );
  }
}

AddTodo.PropTypes = {
  handleAddTodo: PropTypes.func,
};

export default AddTodo;

