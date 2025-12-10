import { setupNavigation } from "./modules/nav.js";
import { setupFooter } from "./modules/footer.js";

setupNavigation();
setupFooter();

const url = "https://api.nasa.gov/planetary/apod?api_key=fIbBkBayfxKNssigQ5vxyemdDrKlXG9bNZ3ULnQd";
async function apiFetch() { 
    try{ 
        const response= await fetch(url); 
        if(response.ok){ 
            const data = await response.json(); 
            console.log(data); 
        } else{ 
            throw Error(await response.text()); 
        } 
    } catch (error){ 
        console.log(error); } 
} 
apiFetch();