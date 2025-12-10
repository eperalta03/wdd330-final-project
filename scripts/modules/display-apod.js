import { getAPOD } from "./api-apod.js";


export async function loadAPOD(){
    const data= await getAPOD();
    if (!data) return;

    const div = document.getElementById("apod-container");
    const apod = document.createElement("img");
    const info = document.createElement("div");

    apod.classList.add("apod");
    apod.setAttribute("src", data.url);
    apod.setAttribute("alt", data.title);

    info.classList.add("info")
    info.innerHTML= `
        <p><strong>Title: </strong>${data.title}</p>
        <p><strong>Image Credit & Copyright: </strong>${data.copyright}</p>
        <p><strong>Date: </strong>${data.date}</p>
        <p><strong>Explanation: </strong>${data.explanation}</p>`
    div.appendChild(apod);
    div.appendChild(info);
}