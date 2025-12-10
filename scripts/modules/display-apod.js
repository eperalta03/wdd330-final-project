import { getAPOD } from "./api-apod.js";

export async function loadAPOD(){
    const data= await getAPOD();
    if (!data) return;

    document.getElementById("apod-img").innerHTML= `
        <img src= "${data.url}" alt= "${data.title}" loading= "lazy" width="200" height="280">`;
}