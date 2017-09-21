import React from 'react'
import TodoItem from "./TodoItem";
import {store} from "../index";
import {removeTodo, toggleTodo} from "../actions/todoActions";
import TodoFilter from "./TodoFilter";

class TodoList extends React.Component {

  componentDidMount() {
    this.unsubsribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount() {
    this.unsubsribe();
  }

  handleClickTodo(todo) {
    store.dispatch(toggleTodo(todo.id));
  }

  handleRemoveTodo(todo) {
    store.dispatch(removeTodo(todo.id));
  }


  getFilteredTodos() {
    const state = store.getState();
    let todoFilter;
    switch (state.filter) {
      case TodoFilter.SHOW_ALL:
        todoFilter = todo => todo;
        break;
      case TodoFilter.SHOW_COMPLETE:
        todoFilter = (todo) => todo.isComplete;
        break;
      case TodoFilter.SHOW_NOT_COMPLETE:
        todoFilter = (todo) => !todo.isComplete;
        break;
      default:
        todoFilter = todo => todo;
    }
    return state.todos.filter(todoFilter);
  }

  render() {
    const todos = this.getFilteredTodos();
    return (
      <ul>
        {todos.map(todo => <TodoItem onClick={() => this.handleClickTodo(todo)} key={todo.id}
                                     todo={todo} handleRemoveTodo={this.handleRemoveTodo.bind(this)}/>)}
      </ul>
    );
  }
}

export default TodoList;

