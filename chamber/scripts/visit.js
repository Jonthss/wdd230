document.addEventListener("DOMContentLoaded", function () {
    const lastVisitKey = "lastVisit";
    const daysElement = document.querySelector("#Days");

    // Obtém a data atual e a última visita armazenada
    const now = Date.now();
    const lastVisit = localStorage.getItem(lastVisitKey);

    if (!lastVisit) {
        // Primeira visita
        daysElement.innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        const msToDays = 86400000;
        const daysPassed = Math.floor((now - lastVisit) / msToDays);

        if (daysPassed < 1) {
            daysElement.innerHTML = "Back so soon! Awesome!";
        } else {
            const dayText = daysPassed === 1 ? "day" : "days";
            daysElement.innerHTML = `You last visited ${daysPassed} ${dayText} ago.`;
        }
    }

    // Atualiza o localStorage com a data da visita atual
    localStorage.setItem(lastVisitKey, now);
});