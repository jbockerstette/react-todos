
export function addTodo(id, text) {
  return {
    type: 'ADD_TODO',
    id,
    text
  }
}

export function removeTodo(id) {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

