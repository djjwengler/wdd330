let genreArray = [
  "Action",
  "Animated",
  "Children",
  "Christmas",
  "Church",
  "Comedy",
  "Drama/Mystery",
  "Holidays",
  "Home Movies",
  "Jane Austenesque",
  "Marvel/DC",
  "Musicals",
  "Nonfiction",
  "Period/Chick Flick",
  "SciFi/Fantasy",
  "Teen",
  "Thanksgiving",
  "TV Shows",
  "Workout",
];

function selectOption() {
    document.getElementById("output").innerHTML = '';
  let dropValue = document.getElementById("category").value;
  if (dropValue == "format") {
    document.getElementById("inputType").innerHTML =
      "<select class='search__input' name='format' id='searchInput' onchange='clearHTML()'><option selected disabled label='--select an option--'></option><option value='Blu-ray'>Blu-ray</option><option value='DVD'>DVD</option></select> ";
  } else if (dropValue == "genre") {
    let select =
      "<select class='search__input' name='genre' id='searchInput' onchange='clearHTML()'><option selected disabled label='--select an option--'></option>";
    for (let i = 0; i < genreArray.length; i++) {
      select += `<option value=${genreArray[i]}>${genreArray[i]}</option>`;
    }
    document.getElementById("inputType").innerHTML = select;
  } else if (dropValue == "title") {
    document.getElementById("inputType").innerHTML =
      "<label class='search__label' for='searchInput'>Title: (can be partial but is case sensitive)</label><input class='search__input' type='text' id='searchInput' name='title' />";
  }
}

function clearHTML(){
    document.getElementById("output").innerHTML = '';
}