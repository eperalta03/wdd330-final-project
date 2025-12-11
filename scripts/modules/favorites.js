export function toggleFavorite(id) {
    if (!id) return;
    
    let favs = JSON.parse(localStorage.getItem("favs")) || [];

    if (favs.includes(id)) {
        favs = favs.filter(fav => fav !== id); 
    } else {
        favs.push(id);  
    }

    localStorage.setItem("favs", JSON.stringify(favs));
}

export function removeFavorite(id) {
    let favs = JSON.parse(localStorage.getItem("favs")) || [];

    favs = favs.filter(fav => fav !== id); 

    localStorage.setItem("favs", JSON.stringify(favs));
}

