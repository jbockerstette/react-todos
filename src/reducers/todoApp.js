import {todos} from "./todos";
import {filter} from "./filter";

export function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    filter: filter(state.filter, action)
  };
}