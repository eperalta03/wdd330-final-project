const url = "https://api.nasa.gov/planetary/apod?api_key=fIbBkBayfxKNssigQ5vxyemdDrKlXG9bNZ3ULnQd";

export async function getAPOD() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(await response.text());
        return await response.json();
    } catch (err) {
        console.error("APOD fetch error:", err);
        return null;
    }
}