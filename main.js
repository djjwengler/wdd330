const links = [
    {label: "Week1 notes",
    url: "week1/index.html"}
]

let list = document.getElementById('list');

for (let i=0; i<links.length; i++){
let li = document.createElement('li');
let label = links[i].label;
let url = links[i].url;
li.innerHTML = "<a href='" + url + "'>" + label + "</a>";
list.appendChild(li);
}

