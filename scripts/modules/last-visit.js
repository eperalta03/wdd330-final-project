export function getLastVisit() {
    const messageBox = document.getElementById('messageBox');
    const closeBtn = document.getElementById('closeBtn');
    const messageEl = document.getElementById('message');
    const now = new Date();

    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {
        messageEl.textContent = "Welcome to the Space Explorer Page!";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const diffMs = now - lastVisitDate; 
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)); 

        if (diffDays < 1) {
            messageEl.textContent = "It's good to have you back";
        } else if (diffDays === 1) {
            messageEl.textContent = "Great, you're back.";
        } 
    }

    localStorage.setItem('lastVisit', now.toISOString());

    closeBtn.addEventListener('click', () => {
    messageBox.style.display = 'none';
    });
}

