import TodoFilter from "../components/TodoFilter";

export function filter(state = TodoFilter.SHOW_ALL, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
}