import React, {Component} from 'react';
import './scss/App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

class App extends Component {
  constructor(props) {
    super(props);
    this.nextId = 0;
    this.state = {
      todos: [],
      filter: TodoFilter.SHOW_ALL
    }
  }

  handleAddTodo(todoText) {
    const todo = {id: this.nextId++, text: todoText, isComplete: false};
    this.setState({todos: [...this.state.todos, todo]});
  }

  handleClickTodo(todo) {
    console.log(todo);
    const updatedTodo = Object.assign({}, todo, {isComplete: !todo.isComplete});
    this.setState({
      todos: this.updateTodo(updatedTodo)
    })
  }

  handleRemoveTodo(todo) {
    this.setState({
      todos: this.state.todos.filter(td => td.id !== todo.id)
    });
  }

  updateTodo(newTodo) {
    return this.state.todos.map((td) => {
      if (td.id !== newTodo.id) {
        return td;
      }
      return {
        ...td,
        ...newTodo
      }
    });
  }

  getFilteredTodos() {
    let todoFilter;
    switch (this.state.filter) {
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
    return this.state.todos.filter(todoFilter);
  }

  handleFilter(filter) {
    this.setState({
      filter
    });
  }

  render() {
    return (
      <div>
        <AddTodo handleAddTodo={this.handleAddTodo.bind(this)}/>
        <TodoList items={this.getFilteredTodos()}
                  handleClickTodo={this.handleClickTodo.bind(this)}
                  handleRemoveTodo={this.handleRemoveTodo.bind(this)}
        />
        <TodoFilter handleFilter={this.handleFilter.bind(this)}
                    filter={this.state.filter}/>
      </div>
    );
  }
}

export default App;
