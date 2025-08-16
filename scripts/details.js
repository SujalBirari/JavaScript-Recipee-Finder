// Get the ID from query string
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

const imgEl = document.getElementById("recipe-img");
const nameEl = document.getElementById("recipe-name");
const ingredientsList = document.getElementById("ingredients-list");
const instructionsEl = document.getElementById("recipe-instructions");
const youtubeLink = document.getElementById("youtube-link");

async function fetchRecipeDetails() {
    if (!recipeId) {
        nameEl.textContent = "No recipe selected.";
        return;
    }

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
    const res = await fetch(url);
    const data = await res.json();
    const recipe = data.meals[0];

    // Populate details
    imgEl.src = recipe.strMealThumb;
    nameEl.textContent = recipe.strMeal;
    instructionsEl.textContent = recipe.strInstructions;
    youtubeLink.href = recipe.strYoutube;

    // Ingredients + measures
    ingredientsList.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            const li = document.createElement("li");
            li.textContent = `${ingredient} - ${measure}`;
            ingredientsList.appendChild(li);
        }
    }
}

fetchRecipeDetails();
