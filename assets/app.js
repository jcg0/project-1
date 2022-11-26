const appId = "&app_id=287a773f";
const appKey = "&app_key=080726096a3b8d16c8a969402882bab9";
const mealForm = document.querySelector("#mealSearchForm");
const mealImg = document.querySelector("#mealImg");
let img_div = document.getElementById("search-img");

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
    // const li = document.createElement("li");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const aTag = document.createElement("a");
    const recipeUrl = data.hits[i].recipe.url;
    const recipeLabel = data.hits[i].recipe.label;
    const thumbImg = data.hits[i].recipe.images.THUMBNAIL.url;

    aTag.href = recipeUrl;
    console.log(recipeUrl);
    aTag.textContent = recipeLabel;
    aTag.classList.add("uk-align-center", "meal-anchor", "meal-anchor:hover");
    aTag.setAttribute("target", "_blank");

    div.textContent = "Recipe Link:";

    div.classList.add(
      "meal-list",
      "uk-card",
      "uk-card-default",
      "uk-card-body"
    );

    img.src = thumbImg;
    div.append(aTag);
    div.append(img);
    mealDataUl.append(div);
  }
};

// cocktail search function.

$("#cocktailSearchForm").on("submit", function (event) {
  event.preventDefault();
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
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const drinkList = [
        data.drinks[0].strDrink,
        data.drinks[1].strDrink,
        data.drinks[2].strDrink,
        data.drinks[3].strDrink,
        data.drinks[4].strDrink,
      ];

      const drinkImg = [
        data.drinks[0].strDrinkThumb,
        data.drinks[1].strDrinkThumb,
        data.drinks[2].strDrinkThumb,
        data.drinks[3].strDrinkThumb,
        data.drinks[4].strDrinkThumb,
      ];

      const drinkDirections = [
        data.drinks[0].strInstructions,
        data.drinks[1].strInstructions,
        data.drinks[2].strInstructions,
        data.drinks[3].strInstructions,
        data.drinks[4].strInstructions,
      ];

      //This loop will run through the ingredients needed for the drink.
      for (let i = 1; i < 16; i++) {
        //console.log(i);
        ingredient = data.drinks[0][`strIngredient${i}`];
        console.log(ingredient);
      }

      for (let i = 1; i < 16; i++) {
        //console.log(i);
        ingredient1 = data.drinks[1][`strIngredient${i}`];
        console.log(ingredient1);
      }

      for (let i = 1; i < 16; i++) {
        //console.log(i);
        ingredient2 = data.drinks[2][`strIngredient${i}`];
        console.log(ingredient2);
      }

      for (let i = 1; i < 16; i++) {
        //console.log(i);
        ingredient3 = data.drinks[3][`strIngredient${i}`];
        console.log(ingredient3);
      }

      for (let i = 1; i < 16; i++) {
        //console.log(i);
        ingredient4 = data.drinks[4][`strIngredient${i}`];
        console.log(ingredient4);
      }

      // this loop is only bring back null, not sure why yet.
      // for (let i = 1; i < 16; i++) {
      //   //console.log(i);
      //   measure = data.drinks[0][`strMeasure${i}`];
      //   console.log(measure);
      // };

      // const imgDrink = document.createElement("img");
      // imgDrink.src = data.drinks[1].strDrinkThumb;
      // let img_Drink = document.getElementById("cocktailImg");
      // img_Drink.append(imgDrink);

      // cocktailSearchForm.append(element)
    });
});
