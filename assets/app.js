const appId = "&app_id=287a773f";
const appKey = "&app_key=080726096a3b8d16c8a969402882bab9";
const mealForm = document.querySelector("#mealSearchForm");

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
      // for (let i = 0; i <= data.hits.length; i++) {
      const img = document.createElement("img");
      img.src = data.hits[1].recipe.image;
      let img_div = document.getElementById("search-img");
      img_div.append(img);

      event.target.reset();
      
      // document.body.append(img);
      // }
      return;

    });
});

const getRecipeApi = function () {
  const requestUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=alfredo${appId}${appKey}`;

  fetch(requestUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("JSON", data);
    });
};

const getCocktailApi = function () {
  const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};

// uncomment to see api calls in the console
// getCocktailApi();
// getRecipeApi();
