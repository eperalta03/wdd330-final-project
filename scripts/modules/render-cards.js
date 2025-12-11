
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
                <button class="fav-btn">❤</button>
            </div>`
        cardContainer.appendChild(card);
        card.querySelector(".details-btn").addEventListener("click", () => {
            diplayImgInfo(item);
        })
    });
}

const imgInfo= document.getElementById("img-info");
function diplayImgInfo(img){
    imgInfo.innerHTML= "";
    imgInfo.innerHTML= `
        <button id="close-modal">x</button>
        <img src="${img.links[0].href}" alt="${img.data[0].title}" width= "350" height="auto">
        <h2><strong>${img.data[0].title}</strong></h2>
        <p><strong>NASA ID: </strong>${img.data[0].nasa_id}</p>
        <p>${img.data[0].description_508}</p>
        <p><strong>Date Created: </strong>${img.data[0].date_created}</p>
        <p><strong>Center: </strong>${img.data[0].center}</p>`
    imgInfo.showModal();
    const closeModal = document.querySelector("#close-modal");
    closeModal.addEventListener("click", () =>{
        imgInfo.close();
    })
}