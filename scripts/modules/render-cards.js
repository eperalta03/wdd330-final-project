
const cardContainer = document.getElementById("results-section");

export function renderCards(data){
    const items = data.collection.items;
    items.forEach(item => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML= `
            <img src="${item.links[0].href}" alt="${item.data[0].title}" width= "250">
            <div class="buttons">
                <button class="details-btn">More details</button>
                <button class="fav-btn">⭐</button>
            </div>`
        cardContainer.appendChild(card);
    });
}