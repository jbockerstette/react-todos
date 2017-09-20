import React, {Component} from 'react';
import './scss/App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import {addTodo, removeTodo, toggleTodo} from "./actions/todoActions";
import {setFilter} from "./actions/filterActions";

let nextId = 0;

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleAddTodo(todoText) {
    this.props.store.dispatch(addTodo(nextId++, todoText));
  }

  handleClickTodo(todo) {
    this.props.store.dispatch(toggleTodo(todo.id));
  }

  handleRemoveTodo(todo) {
    this.props.store.dispatch(removeTodo(todo.id));
  }


  getFilteredTodos() {
    const state = this.props.store.getState();
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

  handleFilter(filter) {
    this.props.store.dispatch(setFilter(filter));
  }

  render() {
    const state = this.props.store.getState();
    return (
      <div>
        <AddTodo handleAddTodo={this.handleAddTodo.bind(this)}/>
        <TodoList items={this.getFilteredTodos()}
                  handleClickTodo={this.handleClickTodo.bind(this)}
                  handleRemoveTodo={this.handleRemoveTodo.bind(this)}
        />
        <TodoFilter handleFilter={this.handleFilter.bind(this)}
                    filter={state.filter}/>
      </div>
    );
  }
}

export default App;
