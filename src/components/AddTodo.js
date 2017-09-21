import React from "react";
import {store} from '../index';
import {addTodo} from "../actions/todoActions";

let nextId = 0;

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }

  componentDidMount() {
    this.unsubsribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubsribe();
  }

  handleAddTodo(todoText) {
    store.dispatch(addTodo(nextId++, todoText));
  }


  handleChange(e) {
    this.setState({input: e.target.value});
  }

  handleSubmit() {
    this.handleAddTodo(this.state.input);
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


export default AddTodo;

