const appId = "&app_id=287a773f";
const appKey = "&app_key=080726096a3b8d16c8a969402882bab9";
const mealForm = document.querySelector("#mealSearchForm");
const mealImg = document.querySelector("#mealImg");
const mealCrsl = document.querySelector("#mealCrsl");
// let img_div = document.getElementById("search-img");

mealForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.dir is a way to see all the properties of a javascript object.
  // in this case i use console.dir(form) to find the value for the input
  console.dir(mealForm.elements.query.value);
  const mealSearchTerm = mealForm.elements.query.value;
  fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${mealSearchTerm}${appId}${appKey}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.hits);

      const mealSrc = data.hits[0].recipe.image;
      mealImg.setAttribute("src", mealSrc);
      event.target.reset();
      showMealRecipe(data);
      return;
      // for (let i = 0; i <= data.hits.length; i++) {
      // const img = document.createElement("img");
      // img_div.append(img);
      // document.body.append(img);
      // }
    });
});

const showMealRecipe = function (data) {
  console.log(data.hits);
  for (let i = 0; i < data.hits.length; i++) {
    const mealDataUl = document.querySelector("#mealData");
    const li = document.createElement("li");
    const img = document.createElement("img");
    const aTag = document.createElement("a");
    const recipeUrl = data.hits[i].recipe.url;
    const recipeLabel = data.hits[i].recipe.label;
    const thumbImg = data.hits[i].recipe.images.THUMBNAIL.url;

    aTag.href = recipeUrl;
    console.log(recipeUrl);
    aTag.textContent = recipeLabel;
    aTag.classList.add("uk-align-center", "meal-anchor", "meal-anchor:hover");

    li.textContent = "Recipe Link:";

    li.classList.add("meal-list");

    img.src = thumbImg;
    li.append(aTag);
    li.append(img);
    mealDataUl.append(li);
  }
};

const showMealData = function (data) {};

$("#cocktailSearchForm").on("submit", function (event) {
  event.preventDefault();
  //getApi(textBox.value)
  //var box = document.getElementById(inputValue).value
  //console.log(box)
  var cocktailSearch = $("#inputValue").val().trim();
  console.log(cocktailSearch);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a1e0ee4284mshd4935eda2ae1e5bp1efdf4jsnf6a5c60bb746",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  fetch(
    "https://the-cocktail-db.p.rapidapi.com/search.php?s=" + cocktailSearch,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
});

// const cocktailForm = document.querySelector("#cocktailSearchForm");

// cocktailForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   // console.dir is a way to see all the properties of a javascript object.
//   // in this case i use console.dir(form) to find the value for the input
//  // console.dir(cocktailForm.elements.query.value);
//   const cocktailSearchTerm = cocktailForm.elements.query.value;
//   console.log(cocktailSearchTerm)
//   fetch(
//     `https://api.edamam.com/api/recipes/v2?type=public&q=${cocktailSearchTerm}${appId}${appKey}`
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.hits);
//       // for (let i = 0; i <= data.hits.length; i++) {

//       event.target.reset();

//       // document.body.append(img);
//       // }
//       return;

//     });
// });

// const getCocktailApi = function () {
//   const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
//   fetch(apiUrl)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// };

// const getRecipeApi = function () {
//   const requestUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=alfredo${appId}${appKey}`;

//   fetch(requestUrl)
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log("JSON", data);
//     });
// };

// uncomment to see api calls in the console
// getCocktailApi();
// getRecipeApi();
