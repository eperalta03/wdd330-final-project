import { searchImages } from "./api-nasa.js";
import { renderCards } from "./render-cards.js";

const cards = document.getElementById("results-section");
const searchInput = document.getElementById("search-input");

export async function getResults() {
    const query = searchInput.value.trim();

    localStorage.setItem("lastSearch", query);

    if (!query) {
        cards.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

    cards.innerHTML = ""; 

    const results = await searchImages(query);

    if (!results) {
        cards.innerHTML = "<p>No results found.</p>";
        return;
    }

    renderCards(results);
}
