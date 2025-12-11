import { setupNavigation } from "./modules/nav.js";
import { setupFooter } from "./modules/footer.js";
import { getResults } from "./modules/search.js";
import { searchImages } from "./modules/api-nasa.js";
import { renderCards } from "./modules/render-cards.js";

setupNavigation();
setupFooter();

async function main() {
    const input = document.getElementById("search-input");  
    
    let last = localStorage.getItem("lastSearch");

    if (!last) {
        last = "galaxy";  
    }

    input.value = last;  

    const results = await searchImages(last);
    renderCards(results);
}

document.addEventListener("DOMContentLoaded", main);

const searchBtn = document.getElementById("search-btn");
const inputEl = document.getElementById("search-input");

searchBtn.addEventListener("click", getResults);
inputEl.addEventListener("keypress", e => {
    if (e.key === "Enter") getResults();
});






