function retrieveTodo(list) {
  return JSON.parse(window.localStorage.getItem(list) || []);
}

function storeTodo(listkey, listdata) {
  window.localStorage.setItem(listkey, JSON.stringify(listdata));
}

export { retrieveTodo, storeTodo };
