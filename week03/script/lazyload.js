document.addEventListener("DOMContentLoaded", function () {
    // Atualiza o ano atual no footer
    const currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    } else {
        console.warn("Elemento 'currentYear' não encontrado!");
    }

    // Atualiza a data da última modificação no footer
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        const lastModified = document.lastModified || "Not Available";
        console.log("Última modificação:", lastModified); // Para depuração
        lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    } else {
        console.warn("Elemento 'lastModified' não encontrado!");
    }
});
