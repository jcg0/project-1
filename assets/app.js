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
    const div = document.createElement("div");
    const img = document.createElement("img");
    const aTag = document.createElement("a");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const labelP = document.createElement("p");
    const recipeUrl = data.hits[i].recipe.url;
    const recipeLabel = data.hits[i].recipe.label;
    const thumbImg = data.hits[i].recipe.images.THUMBNAIL.url;

    const calories = Math.round(data.hits[i].recipe.calories);
    const cautions = data.hits[i].recipe.cautions;
    const recipeWarning = "This recipe contains" + " " + cautions;

    ul.classList.add("new-ul");
    li2.classList.add("new-li");
    img.classList.add("img");
    aTag.classList.add("uk-align-center", "meal-anchor", "meal-anchor:hover");
    labelP.classList.add("label-p");
    div.classList.add(
      "meal-list",
      "uk-card",
      "uk-card-default",
      "uk-card-body"
    );

    aTag.href = recipeUrl;
    img.src = thumbImg;
    aTag.textContent = "Get Recipe!";
    li1.textContent = "Calories:" + " " + calories;
    li2.textContent = recipeWarning;
    labelP.textContent = recipeLabel;

    aTag.setAttribute("target", "_blank");

    // ul.append(li1);
    // ul.append(li2);
    // if (li2.textContent === cautions) {
    //   li2.textContent = recipeWarning;
    //   ul.append(li2);
    // } else {
    //   li2.textContent = "";
    // }

    div.append(labelP);
    div.append(img);
    div.append(aTag);
    div.append(ul);

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


    // console.log(ingredient);
    // cocktailDirections.append(drinkDirections[0]);
    $('#cocktailImage').attr('src', drinkImg[0]);
    $('#cocktailImage2').attr('src', drinkImg[1]);
    $('#cocktailImage3').attr('src', drinkImg[2]);
    $('#cocktailImage4').attr('src', drinkImg[3]);
    $('#cocktailImage5').attr('src', drinkImg[4]);
    
    // cocktailList2.append(drinkList[1]);

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
