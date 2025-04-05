document.getElementById('currentYear').textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');

    if (hamButton.classList.contains('open')) {
        hamButton.textContent = '✖'; // Close icon
    } else {
        hamButton.textContent = '☰'; // Menu icon
    }
});


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setThemeIcon(isDark) {
  themeToggle.textContent = isDark ? '☀️' : '🌙';
}

// Verifica tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  setThemeIcon(true);
} else {
  setThemeIcon(false);
}

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  setThemeIcon(isDark);
});
