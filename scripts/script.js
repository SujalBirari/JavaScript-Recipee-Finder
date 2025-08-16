console.log("Hello World");

const queryText = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchType = document.getElementById("searchType");
const resultsSection = document.getElementById("results");

let recipees = { meals: [] };
let letter = "";

// Detect search type and set API parameter
function updateLetter() {
    if (searchType.value == "meal") letter = "s";
    else if (searchType.value == "ingredient") letter = "i";
    else if (searchType.value == "category") letter = "c";
    else if (searchType.value == "area") letter = "a";
    else if (searchType.value == "letter") letter = "f";
}
updateLetter();
searchType.addEventListener("change", updateLetter);

// Fetch recipes from API
async function fetchRecipe(userQuery = "") {
    let url;
    if (!letter) {
        // fallback random
        url = "https://www.themealdb.com/api/json/v1/1/random.php";
    } else if (letter === "s" || letter === "f") {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?${letter}=${userQuery}`;
    } else {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?${letter}=${userQuery}`;
    }

    const res = await fetch(url);
    const recipeeObj = await res.json();
    recipees.meals = recipeeObj.meals || [];
}

// Render recipe cards
function loadLayout() {
    resultsSection.innerHTML = "";

    recipees.meals.forEach(recipee => {
        const card = document.createElement("div");
        card.classList.add("result-card");

        const img = document.createElement("img");
        img.src = recipee.strMealThumb;
        img.alt = recipee.strMeal;

        const title = document.createElement("h3");
        title.textContent = recipee.strMeal;

        const recipeeBtn = document.createElement("button");
        recipeeBtn.textContent = "View Recipee";
        recipeeBtn.addEventListener("click", () => {
            window.location.href = `recipee.html?id=${recipee.idMeal}`;
        });

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(recipeeBtn);

        resultsSection.appendChild(card);
    });
}

// Load some default recipes on page load
async function loadDefaultRecipes() {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
    const data = await res.json();
    recipees.meals = data.meals || [];
    loadLayout();
}

// Search button click
searchBtn.addEventListener("click", async () => {
    await fetchRecipe(queryText.value.trim());
    loadLayout();
});

// Initial load
loadDefaultRecipes();
