import {todos} from "./todos";
import {filter} from "./filter";
import {combineReducers} from "redux";

export const todoApp = combineReducers({
  todos,
  filter
});

// Same thing as the combineReducers above ^^^^^
//
// export function todoApp(state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     filter: filter(state.filter, action)
//   };
// }