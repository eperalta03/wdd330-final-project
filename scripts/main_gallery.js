import { setupNavigation } from "./modules/nav.js";
import { setupFooter } from "./modules/footer.js";
import { getResults } from "./modules/search.js";
import { searchImages } from "./modules/api-nasa.js";
import { renderCards } from "./modules/render-cards.js";

setupNavigation();
setupFooter();

async function main() {
    input.disabled = true;
    searchBtn.disabled = true;

    const results = await searchImages("mars");
    renderCards(results);

    input.disabled = false;
    searchBtn.disabled = false;
}


main();

const searchBtn = document.getElementById("search-btn")
const input = document.getElementById("search-input")

searchBtn.addEventListener("click", getResults);
input.addEventListener("keypress", e => {
    if (e.key === "Enter"){
        getResults();
    }
});





