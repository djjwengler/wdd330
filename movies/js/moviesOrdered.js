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

    for (let i = 0; i < alphaArray.length; i++) {
      var resultArr = wMovies.filter(
        (x) => x.title.substring(0, 1) == alphaArray[i]
      );

      var ul = document.getElementById(alphaArray[i]);
      ul.innerHTML = "";
      for (var j = 0; j < resultArr.length; j++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(resultArr[j].title));
        ul.appendChild(li);
      }
    }

    var newArr = wMovies.filter((x) => x.title.substring(0, 1) == "A");
    console.log(newArr);
    // function(rate){
    //     return rate.name && rate.name.substring(0,4) === "Slow";
    //   let wMoviesResults = wMovies.filter(x => x.title.includes(searchInput));
  });

