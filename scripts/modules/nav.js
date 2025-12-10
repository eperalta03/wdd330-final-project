export function setupNavigation() {
    const navButton = document.getElementById("ham-btn");
    const navMenu = document.getElementById("nav");

    navButton.addEventListener("click", () => {
        navButton.classList.toggle("show");
        navMenu.classList.toggle("show");
    });

    document.addEventListener("click", e => {
        if (navMenu.classList.contains("show") &&
            !navMenu.contains(e.target) &&
            e.target !== navButton) {
            navMenu.classList.remove("show");
            navButton.classList.remove("show");
        }
    });
}