const appId = "&app_id=287a773f";
const appKey = "&app_key=080726096a3b8d16c8a969402882bab9";
const mealForm = document.querySelector("#mealSearchForm");
// const mealImg = carouselLi.querySelectorAll("#mealImg");
const mealImg1 = document.querySelector("#mealImg1");
const mealImg2 = document.querySelector("#mealImg2");
const mealImg3 = document.querySelector("#mealImg3");
const mealImg4 = document.querySelector("#mealImg4");
const mealImg5 = document.querySelector("#mealImg5");

const randRecipe = document.querySelector('#random-list')
const randButton = document.querySelector('#get-random-recipe')
const menuContentEl = document.querySelector('#randomMealData')

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
      console.log(data);
      // const mealSrc = data.hits[0].recipe.image;
      // mealImg.setAttribute("src", mealSrc);
      event.target.reset();
      showRecipeCarousel(data);
      showMealRecipe(data);
      showRandomRecipe(data);
      return;
      // for (let i = 0; i <= data.hits.length; i++) {
      // const img = document.createElement("img");
      // img_div.append(img);
      // document.body.append(img);
      // }
    });
});

const showRandomRecipe = function (data) {
  const largeImg1 = data.hits[0].recipe.image;
  const largeImg2 = data.hits[1].recipe.image;
  const largeImg3 = data.hits[2].recipe.image;
  const largeImg4 = data.hits[3].recipe.image;
  const largeImg5 = data.hits[4].recipe.image;
  
  mealImg1.setAttribute("src", largeImg1);
  mealImg2.setAttribute("src", largeImg2);
  mealImg3.setAttribute("src", largeImg3);
  mealImg4.setAttribute("src", largeImg4);
  mealImg5.setAttribute("src", largeImg5);
  
}

const showRecipeCarousel = function (data) {
  const largeImg1 = data.hits[0].recipe.image;
  const largeImg2 = data.hits[1].recipe.image;
  const largeImg3 = data.hits[2].recipe.image;
  const largeImg4 = data.hits[3].recipe.image;
  const largeImg5 = data.hits[4].recipe.image;
  mealImg1.setAttribute("src", largeImg1);
  mealImg2.setAttribute("src", largeImg2);
  mealImg3.setAttribute("src", largeImg3);
  mealImg4.setAttribute("src", largeImg4);
  mealImg5.setAttribute("src", largeImg5);
};

const showMealRecipe = function (data) {
  console.log(data.hits);
  for (let i = 0; i < data.hits.length; i++) {
    const mealDataUl = document.querySelector("#mealData");
    const div = document.createElement("div");
    const labelP = document.createElement("p");
    const img = document.createElement("img");
    const aTag = document.createElement("a");

    const drpdwnDivParent = document.createElement("div");
    const drpdwnDivChild = document.createElement("div");
    const drpdwnUl = document.createElement("ul");
    const drpdwnLi = document.createElement("li");
    const drpdwnBtn = document.createElement("button");

    // const li1 = document.createElement("li");
    // const li2 = document.createElement("li");
    // const li3 = document.createElement("li");

    const recipeUrl = data.hits[i].recipe.url;
    const recipeLabel = data.hits[i].recipe.label;
    const thumbImg = data.hits[i].recipe.images.THUMBNAIL.url;

    const calories = Math.round(data.hits[i].recipe.calories);
    const cautions = data.hits[i].recipe.cautions;
    const recipeWarning = "This recipe contains" + " " + cautions;

    // ul.classList.add("new-ul");
    drpdwnDivParent.classList.add("uk-inline");
    drpdwnBtn.classList.add("uk-button", "uk-button-default");
    drpdwnBtn.setAttribute("type", "button");
    drpdwnDivChild.setAttribute("uk-dropdown", "mode: hover");
    // li2.classList.add("new-li");
    img.classList.add("img");
    aTag.classList.add("uk-align-center", "meal-anchor", "meal-anchor:hover");
    labelP.classList.add("label-p");
    //Use these to populate results onto page.
    div.classList.add( 
      "meal-list",
      "uk-card",
      "uk-card-default",
      "uk-card-body"
    ); 

    aTag.href = recipeUrl;
    img.src = thumbImg;

    aTag.textContent = "Get Recipe!";
    // li1.textContent = "Calories:" + " " + calories;
    // li2.textContent = recipeWarning;
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
    // div.append(ul);

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
      const cocktailDataUl = document.querySelector("#cocktailData");
      const div = document.createElement("div");
      const img = document.createElement("img");
      const aTag = document.createElement("a");
      const ul = document.createElement("ul");
      const li1 = document.createElement("li");
      const li2 = document.createElement("li");
      const li3 = document.createElement("li");
      const labelP = document.createElement("p");

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

      // aTag.href = recipeUrl;
      // img.src = thumbImg;
      // aTag.textContent = "Get Recipe!";
      
      // labelP.textContent = recipeLabel;
      

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
      for (let i = 1; i < drinkList.length; i++) {
        // console.log(i);

        ingredient = data.drinks[0][`strIngredient${i}`];

        console.log(ingredient);
        $('#drinkIngredient').append(' ' + ingredient + '');
      }

      for (let i = 1; i < drinkList.length; i++) {
        //console.log(i);
        thumbNail = data.drinks[i].strDrinkThumb;
        $('#cocktailImage').attr('src', thumbNail);
        console.log(thumbNail)
        // console.log(ingredient1);
      }

      // for (let i = 1; i < drinkList.length; i++) {
      //   //console.log(i);
      //   ingredient2 = data.drinks[2][`strIngredient${i}`];
      //   console.log(ingredient2);
      // }

      // for (let i = 1; i < drinkList.length; i++) {
      //   //console.log(i);
      //   ingredient3 = data.drinks[3][`strIngredient${i}`];
      //   console.log(ingredient3);
      // }

      // for (let i = 1; i < drinkList.length; i++) {
      //   //console.log(i);
      //   ingredient4 = data.drinks[4][`strIngredient${i}`];
      //   console.log(ingredient4);
      // }

    
    // console.log(ingredient);
    // cocktailDirections.append(drinkDirections[0]);
    $('#drinkName').append('Drink: ' + drinkList[0]);
    $('#drinkName1').append('Drink: ' + drinkList[1]);
    $('#drinkName2').append('Drink: ' + drinkList[2]);
    $('#drinkName3').append('Drink: ' + drinkList[3]);
    $('#drinkName4').append('Drink: ' + drinkList[4]);
    $('#drinkInstructions').append(drinkDirections[0]);
    $('#drinkInstructions1').append(drinkDirections[1]);
    $('#drinkInstructions2').append(drinkDirections[2]);
    // $('#cocktailImage').attr('src', drinkImg[0]);
    // $('#cocktailImage2').attr('src', drinkImg[1]);
    // $('#cocktailImage3').attr('src', drinkImg[2]);
    // $('#cocktailImage4').attr('src', drinkImg[3]);
    // $('#cocktailImage5').attr('src', drinkImg[4]);

    // li1.textContent = drinkList[0]
    // li2.textContent = drinkDirections[0];
    // div.append(labelP);
    // div.append(img);
    // // div.append(aTag);
    // div.append(ul);

    // cocktailData.append(div);
    // cocktailData.append(drinkList[0])
    // cocktailData.append(drinkDirections[0])
    
 
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

randButton.addEventListener('click', function(){
  const randParam = randRecipe.selectedOptions[0].value
    
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public${appId}${appKey}&cuisineType=${randParam}&random=true`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        showRandomRecipe(data);
        console.log("foodRandom", data);
        return
      })
})