function taskCount() {
    let actives = retrieveTodo().filter((item) => item["completed"] == false);
    document.getElementById("todo__count").innerHTML = actives.length;
  }

  export { taskCount };