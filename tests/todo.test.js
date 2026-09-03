import { test } from 'node:test';
import assert from 'node:assert';
import { addTodo, completeTodo, activeTodos } from '../src/todo.js';

test('addTodo appends a todo', () => {
  const todos = [];
  addTodo(todos, 'buy milk', null);
  assert.strictEqual(todos.length, 1);
});

test('addTodo rejects an empty title', () => {
  const todos = [];
  assert.throws(() => addTodo(todos, '', null), /Title is required/);
});

test('completeTodo marks a todo complete', () => {
  const todos = [];
  const t = addTodo(todos, 'walk dog', null);
  completeTodo(todos, t.id);
  assert.strictEqual(todos[0].completed, true);
});
