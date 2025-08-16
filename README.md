# Recipe Finder - Ingredient Search Tool

Recipe Finder is a multi-page web application that helps users discover recipes by searching with various criteria such as meal name, ingredient, category, area, or even a single letter. Built with vanilla JavaScript, HTML, and CSS, it leverages the [TheMealDB API](https://www.themealdb.com/) to fetch and display recipe data dynamically.

## Features

- **Multiple Pages:**  
  Includes a main search page and a detailed recipe view page for a seamless browsing experience.

- **Dynamic Search:**  
  JavaScript detects the selected search type and constructs the appropriate API query for meal, ingredient, category, area, or letter.

- **API Integration:**  
  Fetches recipes and detailed information from TheMealDB using asynchronous JavaScript functions.

- **Interactive UI:**  
  Renders recipe cards and details dynamically with DOM manipulation.

- **Recipe Details:**  
  Displays images, ingredients, instructions, and YouTube links for each recipe on a dedicated details page.

- **Responsive Design:**  
  Styled for usability across devices.

## Project Structure

```
Recipe Finder - Ingredient Search Tool/
│
├── index.html                # Main search page
├── recipee.html              # Recipe details page
├── scripts/
│   ├── script.js             # Main page logic (JavaScript)
│   └── details.js            # Details page logic (JavaScript)
├── styles/
│   ├── style.css             # Main page styling (CSS)
│   └── details.css           # Details page styling (CSS)
```

## JavaScript Highlights

- **State Management:**  
  Maintains search results and user queries in JS variables.

- **Event Handling:**  
  Handles user interactions for searching and viewing recipe details.

- **DOM Manipulation:**  
  Dynamically creates and updates recipe cards and details.

- **Routing:**  
  Navigates between pages using query parameters and JavaScript.

## How to Run

1. Clone the repository.
2. Open `index.html` in your browser.
3. Search for recipes and click "View Recipee" to see details—no build steps or dependencies required!

## Customization

- Easily add more search types or enhance the UI by editing the JavaScript and CSS files.
- Change the default category or styling as desired.

## Credits

- Powered by [TheMealDB API](https://www.themealdb.com/).
- Built with vanilla JavaScript, HTML, and CSS.

---

Discover new recipes and cooking inspiration with
