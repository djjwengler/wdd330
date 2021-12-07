fetch("js/movies.json")
  .then((response) => response.json())
  .then((wMovies) => {
    const alphaArray = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
let count = 0;
    for (let i = 0; i < alphaArray.length; i++) {
      let resultArr = wMovies.filter(
        (x) => x.title.substring(0, 1) == alphaArray[i]
      );

      var ul = document.getElementById(alphaArray[i]);
      ul.innerHTML = "";
      for (var j = 0; j < resultArr.length; j++) {
        count++;
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(resultArr[j].title));
        li.setAttribute("id", count);
        li.setAttribute("onclick", "toggleHide(this)");
        li.setAttribute("data-genre", resultArr[j].genre);
        li.setAttribute("data-format", resultArr[j].format);
        li.setAttribute("class", "all__movies")
        ul.appendChild(li);
      }
    }

  });

  function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 150);
    }
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor)
