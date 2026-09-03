/**
 * Persistence for todos.
 */

const STORAGE_KEY = 'todos';

export function save(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

export function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }
  return JSON.parse(raw);
}
