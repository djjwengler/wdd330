import { retrieveTodo, storeTodo } from "./ls.js";
import {
  addRed,
  removeRed,
  enterKey,
  taskCount,
  getIndex,
  removeTodo,
  completed,
} from "./utilities.js";
import { addSection } from "./todos.js";

let toDoList = [];

export default class ToDoList {
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
  }
  getTodos() {
    return toDoList;
  }
  setup() {
    if (localStorage.getItem("toDoList") !== null) {
      toDoList = retrieveTodo("toDoList");
      addSection(toDoList);
    }
    enterKey();
    document.getElementById("todo__submit").addEventListener("click", this.addTodo);
    document.getElementById("all").addEventListener("click", seeAll);
    document.getElementById("active").addEventListener("click", seeActive);
    document.getElementById("complete").addEventListener("click", seeComplete);
    window.clickRemove = this.clickRemove;
    window.strikethrough = strikethrough;
  }
  addTodo() {
    let toDo = {
      id: new Date(),
      content: document.getElementById("todo__add").value,
      completed: false,
    };
    if (localStorage.getItem("toDoList") !== null) {
      toDoList = retrieveTodo("toDoList");
    }
    toDoList.push(toDo);
    storeTodo("toDoList", toDoList);
    document.getElementById("todo__add").value = "";
    addSection(toDoList);
    seeAll();
  }
  clickRemove() {
    let index = event.target.id;
    index = getIndex(index);
    removeTodo(index, toDoList, "toDoList");
    addSection(toDoList);
  }
}

function strikethrough() {
    let index = event.target.id;
    let changed = document.getElementById(index + "l");
    if (changed.classList.contains("todo__item--strike")) {
      changed.classList.remove("todo__item--strike");
    } else {
      changed.classList.add("todo__item--strike");
    }
    completed(toDoList, "toDoList");
    taskCount();
  }
 
  
  function seeAll() {
    retrieveTodo("toDoList");
    removeRed("complete");
    removeRed("active");
    addRed("all");
    addSection(toDoList);
  }
  
  function seeActive() {
    retrieveTodo("toDoList");
    let actives = retrieveTodo("toDoList").filter(
      (item) => item["completed"] == false
    );
    removeRed("all");
    removeRed("complete");
    addRed("active");
    addSection(actives);
  }
  function seeComplete() {
    retrieveTodo("toDoList");
    let completes = retrieveTodo("toDoList").filter(
      (item) => item["completed"] == true
    );
    removeRed("all");
    removeRed("active");
    addRed("complete");
    addSection(completes);
  }
  