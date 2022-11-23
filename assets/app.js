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
      for (let i = 0; i < data.hits.length; i++) {
      const img = document.createElement("img");
      const mealLi = document.createElement("li");
      const mealSrc = data.hits[i].recipe.image;
      img.setAttribute("src", mealSrc,"uk-cover");
      mealCrsl.append(mealLi);
      mealLi.classList.add("uk-cover-continer");
      mealLi.append(img)

      // img_div.append(img);
      }
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


$('#cocktailSearchForm').on('submit', function(event){
  event.preventDefault()
  //getApi(textBox.value)
  //var box = document.getElementById(inputValue).value
  //console.log(box)
  var cocktailSearch = $("#inputValue").val().trim();
  console.log(cocktailSearch)

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a1e0ee4284mshd4935eda2ae1e5bp1efdf4jsnf6a5c60bb746',
      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
    }
  };
  
  fetch('https://the-cocktail-db.p.rapidapi.com/search.php?s='+ cocktailSearch, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

})
  



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

// uncomment to see api calls in the console
getCocktailApi();
getRecipeApi();
