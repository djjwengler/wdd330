import { retrieveTodo, storeTodo } from "./ls.js";

function removeRed(id) {
  if (document.getElementById(id).classList.contains("todo__button--select")) {
    document.getElementById(id).classList.remove("todo__button--select");
  }
}
function addRed(id) {
  document.getElementById(id).classList.add("todo__button--select");
}

function enterKey() {
  let enter = document.getElementById("todo__add");
  enter.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("todo__submit").click();
    }
  });
}

function taskCount() {
  let actives = retrieveTodo("toDoList").filter(
    (item) => item["completed"] == false
  );
  document.getElementById("todo__count").innerHTML = actives.length;
}

function getIndex(index) {
  index = index.slice(4);
  index = index.slice(0, -8);
  return index;
}

function completed(arr, list) {
  let index = event.target.id;
  index = index.slice(4);
  retrieveTodo(list);
  if (arr[index].completed === false) {
    arr[index].completed = true;
  } else {
    arr[index].completed = false;
  }
  storeTodo(list, arr);
}

function removeTodo(index, arr, item) {
    retrieveTodo(item);
    arr.splice(index, 1);
    storeTodo(item, arr);
  }

export { addRed, removeRed, enterKey, taskCount, getIndex, completed, removeTodo };
