import { retrieveTodo, storeTodo } from "./modules/ls.js";
import {
  addRed,
  removeRed,
  enterKey,
  taskCount,
  getIndex,
  removeTodo, 
  completed
} from "./modules/utilities.js";

let toDoList = [];

if (localStorage.getItem("toDoList") !== null) {
  toDoList = retrieveTodo("toDoList");
  addSection(toDoList);
}
enterKey();
document.getElementById("todo__submit").addEventListener("click", addTodo);
document.getElementById("all").addEventListener("click", seeAll);
document.getElementById("active").addEventListener("click", seeActive);
document.getElementById("complete").addEventListener("click", seeComplete);

function addTodo() {
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

function clickRemove() {
  let index = event.target.id;
  index = getIndex(index);
  removeTodo(index, toDoList, "toDoList");
  addSection(toDoList);
}
window.clickRemove = clickRemove;

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
window.strikethrough = strikethrough;

function addSection(arr) {
  if (arr.length < 1) {
    document.getElementById("todo__list").innerHTML = "This list is empty!";
  } else {
    document.getElementById("todo__list").innerHTML = "";
    let list = document.getElementById("todo__list");
    for (let i = 0; i < arr.length; i++) {
      let section = document.createElement("section");
      section.innerHTML =
        "<input type='checkbox' id='item" +
        i +
        "' name='item" +
        i +
        "' onclick='strikethrough()'><label class='todo__label' id='item" +
        i +
        "l' for='item" +
        i +
        "'>" +
        arr[i].content +
        "</label><button class='todo__item--remove' id='item" +
        i +
        "--remove' onclick='clickRemove()'>X</button><br>";
      section.setAttribute("class", "todo__item");
      list.appendChild(section);
      if (arr[i].completed === true) {
        document
          .getElementById("item" + i + "l")
          .classList.add("todo__item--strike");
        document.getElementById("item" + i).setAttribute("checked", "true");
      }
    }
  }
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
