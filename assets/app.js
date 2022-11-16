// const options = {

// }

function getRecipeApi() {
  const requestUrl =
    "https://api.edamam.com/api/recipes/v2?type=public&q=alfredo&app_id=287a773f&app_key=080726096a3b8d16c8a969402882bab9";

  fetch(requestUrl).then((res) => {
    console.log("Success", res);
    res.json().then((data) => console.log("JSON", data));
  });
  //     .then((data) => {
  //       console.log(data);
  //     });
}

getRecipeApi();
