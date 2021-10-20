let toDoList = [];
function storeTodo() {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

function retrieveTodo() {
  toDoList = JSON.parse(localStorage.getItem("toDoList") || []);
  return toDoList;
}

export { toDoList, storeTodo, retrieveTodo };