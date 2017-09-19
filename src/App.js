import React, {Component} from 'react';
import './scss/App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.nextId = 0;
    this.state = {
      todos: []
    }
  }

  handleAddTodo(todoText) {
    console.log(`Adding a new todo: ${todoText}`);
    const todo = {id: this.nextId++, text: todoText, isComplete: false};
    this.setState({todos: [...this.state.todos, todo]});
  }

  handleClickTodo(todo) {
    console.log(todo);
    const updatedTodo = Object.assign({}, todo, {isComplete:!todo.isComplete});
    this.setState({
      todos: this.updateTodo(updatedTodo)
    })
  }

  handleRemoveTodo(todo) {
    this.setState({
      todos: this.state.todos.filter(td => td.id !==todo.id)
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

  render() {
    return (
      <div>
        <AddTodo handleAddTodo={this.handleAddTodo.bind(this)}/>
        <TodoList items={this.state.todos}
                  handleClickTodo={this.handleClickTodo.bind(this)}
                  handleRemoveTodo={this.handleRemoveTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
