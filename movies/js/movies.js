import { buildSearchResults, getSearchValue, getCategory, filterMovies } from "./utilities.js";

let targetID = 0;
let targetName = "Movie";
let targetGenre = "Genre";
let targetDesc = "Sorry, no description could be found";
let targetImg = "images/no-image.png";
let targetYear = "";
let targetFormat = "Format";

function resetTargets() {
  targetName = "Movie";
  targetGenre = "Genre";
  targetDesc = "Sorry, no description could be found";
  targetImg = "images/no-image.png";
  targetYear = "";
  targetFormat = "Format";
}
function displayMovie() {
  document.getElementById("detail__title").innerHTML = targetName;
  document.getElementById("detail__year").innerHTML = targetYear;
  document.getElementById("detail__format").innerHTML = targetFormat;
  document.getElementById("detail__genre").innerHTML = targetGenre;
  document.getElementById("detail__img").setAttribute("src", targetImg);
  document.getElementById("detail__desc").innerHTML = targetDesc;
}

function getJSON(url) {
  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getMovies(url) {
  return getJSON(url);
}

let moviedbURL =
  "https://api.themoviedb.org/3/search/movie?api_key=af59e0636be329b2b86aa5e89182d8bb&query=";
  function mdbURL(searchInput) {
    let inputURL1 = searchInput.replace(/\s/g, "+");
    let newURL = moviedbURL + inputURL1 + "&page=1";
    return newURL;
  }
let imdbURLPartial =
  "https://movie-database-imdb-alternative.p.rapidapi.com/?s=";
  function rapidURL(searchInput) {
    let inputURL2 = searchInput.replace(/\s/g, "%20");
    let newURL = imdbURLPartial + inputURL2 + "&r=json";
    return newURL;
  }
function getmdbAPI(search){
  getMovies(mdbURL(search)).then(function (data) {
      console.log(data.results);
      let results = data.results;
      if (results[0]){
      targetDesc = results[0].overview;}
      console.log(targetDesc);
  })}

function getRapidAPI(search){
async function makeRequest(url) {
    let options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key":
          "dd5d52b15cmshcbbd06022186b27p15ee94jsn4e078cca84a1",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`${data.status}: ${data.message}`);
    } else return data.Search;
  }

  let imdbData = "";

  async function searchIMDB() {
    try {
      const data = await makeRequest(rapidURL(search));
      if(data.length>0){
        if (data[0].Title === search){
          targetYear = data[0].Year;
      targetImg = data[0].Poster;
        } else {
          for(let i= 0; i<data.length; i++){
            if (data[i].Title === search){
              targetYear = data[i].Year;
          targetImg = data[i].Poster;
          break;
        }}}

       if (targetYear ==='') {
      targetYear = data[0].Year;
      targetImg = data[0].Poster;}
      
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  searchIMDB();
}


function getTargets(targetID) {
  let target = document.getElementById(targetID);
  targetName = target.innerHTML;
  targetGenre = target.getAttribute("data-genre");
  targetFormat = target.getAttribute("data-format");
}

function toggleX() {
  document.getElementById("detail").classList.toggle("hidden");
  document.getElementById("search").classList.toggle("hidden");
}
window.toggleX = toggleX;

function toggleHide(el) {
  resetTargets();
  targetID = el.id;
  getTargets(targetID);
  getRapidAPI(targetName);
  getmdbAPI(targetName);
  setTimeout(function () {
    displayMovie();
    toggleX();
  }, 900);
}

window.toggleHide = toggleHide;

function showMovies(url = "js/movies.json") {
  getMovies(url).then(function (wMovies) {
    //wMovies contains the array
    let category = getCategory();

    let searchInput = getSearchValue();

    let wMoviesResults = filterMovies(wMovies, searchInput, category);

    buildSearchResults(wMoviesResults);
  });
}

if (document.getElementById("submitSearch")) {
  document.getElementById("submitSearch").addEventListener("click", () => {
    showMovies();
  });
}
