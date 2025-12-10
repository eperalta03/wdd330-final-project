export function setupFooter() {
    const yearSpan = document.getElementById('currentyear');
    yearSpan.textContent = new Date().getFullYear();

    const lastModifiedEl = document.getElementById('lastModified');
    lastModifiedEl.textContent = `Last modified: ${document.lastModified}`;
}