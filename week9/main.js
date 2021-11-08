var ships = [];
let apiUrl = "https://swapi.dev/api/starships";


function createList(array) {
    let ul = document.getElementById("ships");
  for (let i = 0; i < array.results.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = array.results[i].name;
    ul.appendChild(li);
  }
}

function useApi(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      createList(data);
      let prev = data.prev;
      let next = data.next;
      function button(url){
          useApi(url);
      }
      document.getElementById('next').addEventListener('click', button(next));
      document.getElementById('prev').addEventListener('click', button(prev));
    });
}

useApi(apiUrl);

// fetch("https://swapi.dev/api/starships")
//   .then((response) => response.json())
//   .then((data) => {
//     for (let i = 0; i < data.results.length; i++) {
//       let li = document.createElement("li");
//       li.innerHTML = data.results[i].name;
//       document.getElementById("ships").appendChild(li);
//     }
//   });
