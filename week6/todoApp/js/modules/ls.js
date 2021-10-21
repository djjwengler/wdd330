function retrieveTodo(list) {
  return JSON.parse(localStorage.getItem(list) || []);
   }

  function storeTodo(listkey, listdata) { 
    localStorage.setItem(listkey, JSON.stringify(listdata));
  }
  
  export { retrieveTodo, storeTodo };

