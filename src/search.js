// Search functionality for todos

export function searchTodos(todos, query) {
  var results = [];
  for (var i = 0; i < todos.length; i++) {
    var t = todos[i];
    if (t.title.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
      results.push(t);
    }
  }
  return results;
}

export function filterByStatus(todos, status) {
  if (status == 'all') {
    return todos;
  }
  if (status == 'active') {
    return todos.filter(function (t) { return !t.completed; });
  }
  if (status == 'done') {
    return todos.filter(function (t) { return t.completed; });
  }
  return todos;
}

export function sortResults(results, sortBy) {
  var sorted = results;
  if (sortBy === 'title') {
    sorted.sort(function (a, b) {
      if (a.title < b.title) { return -1; }
      if (a.title > b.title) { return 1; }
      return 0;
    });
  } else if (sortBy === 'date') {
    sorted.sort(function (a, b) {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
  }
  return sorted;
}

export function search(todos, query, status, sortBy) {
  var matched = searchTodos(todos, query);
  var filtered = filterByStatus(matched, status);
  var sorted = sortResults(filtered, sortBy);
  return sorted;
}

export function highlightMatch(title, query) {
  var re = new RegExp(query, 'gi');
  return title.replace(re, '<mark>$&</mark>');
}
