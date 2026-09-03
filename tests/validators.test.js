import { test } from 'node:test';
import assert from 'node:assert';
import { validateTitle, validateDueDate, validateTodo } from '../src/validators.js';

test('validateTitle accepts a normal title', () => {
  assert.deepStrictEqual(validateTitle('buy milk'), { valid: true, error: null });
});

test('validateTitle rejects an empty string', () => {
  assert.strictEqual(validateTitle('').valid, false);
});

test('validateTitle rejects whitespace only', () => {
  assert.strictEqual(validateTitle('   ').valid, false);
});

test('validateTitle rejects a non-string', () => {
  assert.strictEqual(validateTitle(42).valid, false);
});

test('validateTitle rejects titles over 200 characters', () => {
  assert.strictEqual(validateTitle('a'.repeat(201)).valid, false);
});

test('validateTitle accepts exactly 200 characters', () => {
  assert.strictEqual(validateTitle('a'.repeat(200)).valid, true);
});

test('validateDueDate treats null as valid', () => {
  assert.strictEqual(validateDueDate(null).valid, true);
});

test('validateDueDate rejects nonsense', () => {
  assert.strictEqual(validateDueDate('not-a-date').valid, false);
});

test('validateTodo reports the title error first', () => {
  const result = validateTodo({ title: '', dueDate: 'not-a-date' });
  assert.strictEqual(result.error, 'Title cannot be empty');
});
