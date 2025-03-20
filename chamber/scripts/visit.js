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


// Lazy loading images

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as imagens com o atributo 'data-src'
    const images = document.querySelectorAll('img[data-src]');
    
    const config = {
        rootMargin: '200px 0px', // Distância do topo e do fundo para carregar as imagens
        threshold: 0.01 // A imagem será carregada quando 1% da imagem estiver visível
    };

    // Cria o IntersectionObserver para detectar quando a imagem estiver visível
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                // Substitui o atributo 'data-src' pelo 'src' para carregar a imagem
                image.src = image.dataset.src;
                image.onload = () => image.classList.add('loaded'); // Opcional: classe para estilizar após o carregamento
                observer.unobserve(image); // Para de observar a imagem após o carregamento
            }
        });
    }, config);

    // Observa todas as imagens
    images.forEach(image => {
        imageObserver.observe(image);
    });
});