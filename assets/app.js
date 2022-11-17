const appId = "&app_id=287a773f";
const appKey = "&app_key=080726096a3b8d16c8a969402882bab9";

const getRecipeApi = async function () {
  try {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=alfredo${appId}${appKey}`
    );
    console.log(response.data);
  } catch (error) {
    console.log("Error", error);
  }
};

const getCocktailApi = async function () {
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );
    console.log(response.data);
  } catch (error) {
    console.log("error", error);
  }
};

getCocktailApi();
getRecipeApi();
// const options = {

// }

// function getRecipeApi() {
//   const requestUrl =
//     "https://api.edamam.com/api/recipes/v2?type=public&q=alfredo&app_id=287a773f&app_key=080726096a3b8d16c8a969402882bab9";

//   fetch(requestUrl)
//     .then((res) => {
//       console.log("Success", res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log("JSON", data);
//     });
//     .then((data) => {
//       console.log(data);
//     });
//}
