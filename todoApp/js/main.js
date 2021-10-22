import ToDoList from "./modules/class.js";

const myTodos = new ToDoList("todo__list");

window.addEventListener('load', () => {
  myTodos.setup();
})
