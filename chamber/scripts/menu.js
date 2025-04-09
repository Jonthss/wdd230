const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");
    const closeButton = document.getElementById("close-banner");

    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    if (today >= 1 && today <= 3) { // Monday to Wednesday
        banner.classList.remove("hidden");
    }

    closeButton.addEventListener("click", () => {
        banner.classList.add("hidden");
    });
});