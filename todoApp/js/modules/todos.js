import { retrieveTodo, storeTodo } from './modules/ls.js';

// // // in the constructor you should set a variable with the element our todo list will be built in, and the key we will use to read/write from localStorage

// //;

export default class ToDos{
    constructor(elementId){
        this.parentElement = document.getElementById(elementId);
        this.key = toDoList;
    }

}

let todolist = null;
function addTodo() {
  let toDo = {
    id: new Date(),
    content: document.getElementById("todo__add").value,
    completed: false,
  };
  retrieveTodo();
  toDoList.push(toDo);
  storeTodo();
  document.getElementById("todo__add").value = "";
  addSection(toDoList);
  seeAll();
}

export { ToDos };


// let enter = document.getElementById("todo__add");
// enter.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     event.preventDefault();
//     document.getElementById("todo__submit").click();
//   }
// });

// let toDoList = [];
// function storeTodo() {
//   localStorage.setItem("toDoList", JSON.stringify(toDoList));
// }

// function retrieveTodo() {
//   toDoList = JSON.parse(localStorage.getItem("toDoList") || []);
//   return toDoList;
// }
// retrieveTodo();
// addSection(toDoList);

// function taskCount() {
//   let actives = retrieveTodo().filter((item) => item["completed"] == false);
//   document.getElementById("todo__count").innerHTML = actives.length;
// }

// function removeTodo(index) {
//   retrieveTodo();
//   toDoList.splice(index, 1);
//   storeTodo();
// }

// function getIndex(index) {
//   index = index.slice(4);
//   index = index.slice(0, -8);
//   return index;
// }

// function clickRemove() {
//   let index = event.target.id;
//   index = getIndex(index);
//   removeTodo(index);
//   addSection(toDoList);
// }

// function strikethrough() {
//   let index = event.target.id;
//   let changed = document.getElementById(index + "l");
//   if (changed.classList.contains("todo__item--strike")) {
//     changed.classList.remove("todo__item--strike");
//   } else {
//     changed.classList.add("todo__item--strike");
//   }
//   completed();
//   taskCount();
// }

// function completed() {
//   let index = event.target.id;
//   index = index.slice(4);
//   retrieveTodo();
//   if (toDoList[index].completed === false) {
//     toDoList[index].completed = true;
//   } else {
//     toDoList[index].completed = false;
//   }
//   storeTodo();
// }

// function addTodo() {
//   let toDo = {
//     id: new Date(),
//     content: document.getElementById("todo__add").value,
//     completed: false,
//   };
//   retrieveTodo();
//   toDoList.push(toDo);
//   storeTodo();
//   document.getElementById("todo__add").value = "";
//   addSection(toDoList);
//   seeAll();
// }

// function addSection(arr) {
//   if (arr.length<1){
//     document.getElementById("todo__list").innerHTML = "This list is empty!";
//   }else{
//   document.getElementById("todo__list").innerHTML = "";
//   let list = document.getElementById("todo__list");
//   for (let i = 0; i < arr.length; i++) {
//     let section = document.createElement("section");
//     section.innerHTML =
//       "<input type='checkbox' id='item" +
//       i +
//       "' name='item" +
//       i +
//       "' onclick='strikethrough()'><label class='todo__label' id='item" +
//       i +
//       "l' for='item" +
//       i +
//       "'>" +
//       arr[i].content +
//       "</label><button onclick='clickRemove()' class='todo__item--remove' id='item" +
//       i +
//       "--remove'>X</button><br>";
//     section.setAttribute("class", "todo__item");
//     list.appendChild(section);
//     if (arr[i].completed === true) {
//       document
//         .getElementById("item" + i + "l")
//         .classList.add("todo__item--strike");
//       document.getElementById("item" + i).setAttribute("checked", "true");
//     }
//   }}
//   taskCount();
// }

// function removeRed(id) {
//   if (document.getElementById(id).classList.contains("todo__button--select")) {
//     document.getElementById(id).classList.remove("todo__button--select");
//   }
// }
// function addRed(id) {
//   document.getElementById(id).classList.add("todo__button--select");
// }
// function seeAll() {
//   retrieveTodo();
//   removeRed("complete");
//   removeRed("active");
//   addRed("all");
//   addSection(toDoList);
// }

// function seeActive() {
//   retrieveTodo();
//   let actives = retrieveTodo().filter((item) => item["completed"] == false);
//   removeRed("all");
//   removeRed("complete");
//   addRed("active");
//   addSection(actives);
// }
// function seeComplete() {
//   retrieveTodo();
//   let completes = retrieveTodo().filter((item) => item["completed"] == true);
//   removeRed("all");
//   removeRed("active");
//   addRed("complete");
//   addSection(completes);
// }

