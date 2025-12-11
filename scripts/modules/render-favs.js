import { diplayImgInfo } from "./render-cards.js";
import { removeFavorite } from "./favorites.js";


async function getItemById(id) {
    const url = `https://images-api.nasa.gov/search?nasa_id=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.collection.items[0]; 
}

export async function renderFavorites() {
    const container = document.getElementById("favorites-container");

    const favIds = JSON.parse(localStorage.getItem("favs")) || [];

    if (favIds.length === 0) {
        container.innerHTML = "<p> You don't have favorites yet :(</p>";
        return;
    }

    for (const id of favIds) {
        const item = await getItemById(id);

        const card = document.createElement("div");
        card.classList.add("card");  

        card.innerHTML = `
            <img src="${item.links[0].href}" alt="${item.data[0].title}">
            <div class="buttons">
                <button class="details-btn">View Details</button>
                <button class="fav-btn active">❤</button>
            </div>
        `;

        container.appendChild(card);
        card.querySelector(".details-btn").addEventListener("click", () => {
            diplayImgInfo(item);
        });
        const removeBtn = card.querySelector(".fav-btn");

        removeBtn.addEventListener("click", () => {
            removeFavorite(item.data[0].nasa_id);
            card.remove();
        });
        
    }
}
