/**
 * Input validation helpers for todo entries.
 *
 * Each validator returns { valid: boolean, error: string | null } so callers
 * can surface a specific message rather than a generic failure.
 */

const MAX_TITLE_LENGTH = 200;

export function validateTitle(title) {
  if (typeof title !== 'string') {
    return { valid: false, error: 'Title must be a string' };
  }

  const trimmed = title.trim();

  if (trimmed.length === 0) {
    return { valid: false, error: 'Title cannot be empty' };
  }

  if (trimmed.length > MAX_TITLE_LENGTH) {
    return { valid: false, error: `Title cannot exceed ${MAX_TITLE_LENGTH} characters` };
  }

  return { valid: true, error: null };
}

export function validateDueDate(dueDate) {
  if (dueDate === null || dueDate === undefined) {
    return { valid: true, error: null };
  }

  const parsed = new Date(dueDate);

  if (Number.isNaN(parsed.getTime())) {
    return { valid: false, error: 'Due date is not a valid date' };
  }

  return { valid: true, error: null };
}

export function validateTodo({ title, dueDate }) {
  const titleResult = validateTitle(title);
  if (!titleResult.valid) {
    return titleResult;
  }

  return validateDueDate(dueDate);
}
