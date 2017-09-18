import React from "react";
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({input: e.target.value});
  }

  handleSubmit() {
    console.log(this.state.input);
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

