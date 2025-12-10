import { getAPOD } from "./api-apod.js";

export async function loadAPOD(){
    const data= await getAPOD();
    if (!data) return;

    const div = document.getElementById("apod-container");
    const apod = document.createElement("img");
    apod.classList.add("apod");
    apod.setAttribute("src", data.url);
    apod.setAttribute("alt", data.title);
    div.appendChild(apod);
}