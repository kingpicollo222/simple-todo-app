/**
 * Core todo list operations.
 */

let nextId = 1;

export function createTodo(title, dueDate) {
  return {
    id: nextId++,
    title: title,
    dueDate: dueDate,
    completed: false,
    createdAt: new Date().toISOString()
  };
}

export function addTodo(todos, title, dueDate) {
  if (!title || title.trim().length === 0) {
    throw new Error('Title is required');
  }
  var todo = createTodo(title.trim(), dueDate);
  todos.push(todo);
  return todo;
}

export function completeTodo(todos, id) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].completed = true;
      return todos[i];
    }
  }
  return null;
}

export function removeTodo(todos, id) {
  var index = -1;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      index = i;
    }
  }
  if (index === -1) {
    return false;
  }
  todos.splice(index, 1);
  return true;
}

export function activeTodos(todos) {
  return todos.filter(function (t) { return t.completed === false; });
}

export function overdueTodos(todos, now) {
  var result = [];
  for (var i = 0; i < todos.length; i++) {
    if (!todos[i].completed && todos[i].dueDate) {
      if (new Date(todos[i].dueDate).getTime() < now.getTime()) {
        result.push(todos[i]);
      }
    }
  }
  return result;
}
