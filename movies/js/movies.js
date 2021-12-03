fetch("js/movies.json")
  .then((response) => response.json())
  .then((wMovies) => {
    function fetchAll() {
      let moviedbURL =
        "https://api.themoviedb.org/3/search/movie?api_key=af59e0636be329b2b86aa5e89182d8bb&query=";
      let imdbURLPartial =
        "https://movie-database-imdb-alternative.p.rapidapi.com/?s=";

      let searchInput = document.getElementById("searchInput").value;

      console.log(searchInput);

      let wMoviesResults = wMovies.filter((x) => x.title.includes(searchInput));

      var ul = document.getElementById("output");
      ul.innerHTML = "";
      for (var i = 0; i < wMoviesResults.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(wMoviesResults[i].title));
        ul.appendChild(li);
      }

      function createURL1() {
        let inputURL1 = searchInput.replace(/\s/g, "+");
        let newURL = moviedbURL + inputURL1 + "&page=1";
        return newURL;
      }

      function createURL2() {
        let inputURL2 = searchInput.replace(/\s/g, "%20");
        let newURL = imdbURLPartial + inputURL2 + "&r=json";
        return newURL;
      }

      fetch(createURL1())
        .then((response) => response.json())
        .then((data) => {
          let results = data.results;
          // var ul = document.getElementById("output2");
          // ul.innerHTML = "";
          // for (var i = 0; i < results.length; i++) {
          //   var li = document.createElement("li");
          //   li.appendChild(document.createTextNode(results[i].title));
          //   ul.appendChild(li);
          // }
        });

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
          // console.log(response);
          throw new Error(`${data.status}: ${data.message}`);
        } else return data.Search;
      }

      let imdbData = "";

      async function searchIMDB() {
        try {
          const data = await makeRequest(createURL2());
          // var ul = document.getElementById("output");
          // ul.innerHTML = "";
          // for (var i = 0; i < data.length; i++) {
          //   var li = document.createElement("li");
          //   li.appendChild(document.createTextNode(data[i].Title));
          //   ul.appendChild(li);
          // }
        } catch (error) {
          console.log(error);
        }
      }
      searchIMDB();
    }

    document.getElementById("submitSearch").addEventListener("click", () => {
      console.log('working');
      fetchAll();
    });

    // let wenglerMovies = require('./movies.json');
    // console.log(wenglerMovies);
  });