const BASE_URL = "https://images-api.nasa.gov/search";

export async function searchImages(searchTerm) { 
    const url = `${BASE_URL}?q=${encodeURIComponent(searchTerm)}&media_type=image`;

    try { 
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data) 
        return data;

    } catch (error) { 
        console.error("Error fetching images:", error);
        return null;
    } 
} 
