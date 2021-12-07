function filterMovies(arr, searchInput, category) {
    let wMoviesResults;
    if (category == "genre") {
      wMoviesResults = arr.filter((x) => x.genre.includes(searchInput));
    } else if (category == "format") {
      wMoviesResults = arr.filter((x) => x.format.includes(searchInput));
    } else if (category == "title") {
      wMoviesResults = arr.filter((x) => x.title.includes(searchInput));
    }
    return wMoviesResults;
  }
  
  function getCategory() {
    let category = document.getElementById("searchInput").name;
    return category;
  }
  
  function getSearchValue() {
    let searchInput = document.getElementById("searchInput").value;
    return searchInput;
  }
  
  function buildSearchResults(arr) {
    if (arr.length < 1) {
    }
    var ul = document.getElementById("output");
    ul.setAttribute("class", "result__list");
    if (arr.length < 1) {
      ul.innerHTML = "There are no results";
    } else {
      ul.innerHTML = "";
      for (var i = 0; i < arr.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(arr[i].title));
        li.setAttribute("id", i);
        li.setAttribute("onclick", "toggleHide(this)");
        li.setAttribute("data-genre", arr[i].genre);
        li.setAttribute("data-format", arr[i].format);
        li.setAttribute("class", "result__item");
        ul.appendChild(li);
      }
    }
  }

  export { buildSearchResults, getSearchValue, getCategory, filterMovies };