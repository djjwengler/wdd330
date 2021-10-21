// start with two...may add more later
// /
// read a value from local storage and parse it as JSON @param {string} key The key under which the value is stored under in LS
// @return {array} The value as an array of objects /
function retrieveTodo(list) {
return JSON.parse(localStorage.getItem(list) || []);
 }
// /
// write an array of objects to local storage under the provided key @param {string} key The key under which the value is stored under in LS
// * @param {array} data The information to be stored as an array of objects. Must be serialized.

// */
function storeTodo(listkey, listdata) { 
  localStorage.setItem(listkey, JSON.stringify(listdata));
}

export { retrieveTodo, storeTodo };


// function storeTodo() {
//   localStorage.setItem("toDoList", JSON.stringify(toDoList));
// }

// function retrieveTodo() {
//   toDoList = JSON.parse(localStorage.getItem("toDoList") || []);
//   return toDoList;
// }
