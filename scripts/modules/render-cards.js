import { toggleFavorite } from "./favorites.js";

const cardContainer = document.getElementById("results-section");

export function renderCards(data){
    const items = data.collection.items;
    items.forEach(item => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML= `
            <img src="${item.links[0].href}" alt="${item.data[0].title}" loading="lazy">
            <div class="buttons">
                <button class="details-btn">View Details</button>
                <button class="fav-btn">❤</button>
            </div>`
        cardContainer.appendChild(card);
        card.querySelector(".details-btn").addEventListener("click", () => {
            diplayImgInfo(item);
        });
        const favBtn = card.querySelector(".fav-btn");
        favBtn.addEventListener("click", () => {
            toggleFavorite(item.data[0].nasa_id);
            favBtn.classList.toggle("active");
        });
        const favs = JSON.parse(localStorage.getItem("favs")) || [];
        if (favs.includes(item.data[0].nasa_id)) {
            favBtn.classList.add("active");
        }
    });
}

const imgInfo= document.getElementById("img-info");
export function diplayImgInfo(img){
    imgInfo.innerHTML= "";
    imgInfo.innerHTML= `
        <button id="close-modal">✖</button>
        <div class="dialog-container">
            <img src="${img.links[0].href}" alt="${img.data[0].title}" loading="lazy">
            <div class="info-container">
                <h2><strong>${img.data[0].title}</strong></h2>
                <p><strong>NASA ID: </strong>${img.data[0].nasa_id}</p>
                <p>${img.data[0].description}</p>
                <p><strong>Date Created: </strong>${img.data[0].date_created}</p>
                <p><strong>Center: </strong>${img.data[0].center}</p>
            </div>
        </div>`
    imgInfo.showModal();
    const closeModal = document.querySelector("#close-modal");
    closeModal.addEventListener("click", () =>{
        imgInfo.close();
    });
    
}

