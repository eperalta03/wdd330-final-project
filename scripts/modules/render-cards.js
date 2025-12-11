
const cards = document.getElementById("results-section");

export function renderCards(data){
    const items = data.collection.items;
    items.forEach(item => {
        const img = document.createElement("img");
        img.src = item.links[0].href;
        img.alt = item.data[0].title;

        cards.appendChild(img);
    });
}