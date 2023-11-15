import { recipeMarkup } from "./recipe-data";

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// const RECIPE_ID = "5ed6604591c37cdc054bc886"
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886

async function showRecipe(id) {
  return await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    .then((response) => response.json())
    .then((response) => response.data)
    .then((data) => data.recipe)
    .then((recipe) => recipe)
    .catch((razon) => { throw new Error(razon.message) })
}

showRecipe('5ed6604591c37cdc054bc886')
  .then((recipe) => {
    console.log(recipe);
    // Cambiar contenido de recipe
    let parentElement = document.querySelector('.recipe')
    parentElement.insertAdjacentHTML('afterbegin', recipeMarkup(recipe))
  })
  .catch((error) => {
    console.error(error.message);
  })




