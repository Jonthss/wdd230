const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Recupera a lista do localStorage ou inicia um array vazio
let chaptersArray = getChapterList() || [];

// Exibe a lista ao carregar a página
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value.trim() !== '') { // Verifica se o input não está vazio
    displayList(input.value.trim()); // Adiciona à interface
    chaptersArray.push(input.value.trim()); // Adiciona ao array
    setChapterList(); // Atualiza localStorage
    input.value = ''; // Limpa o campo de entrada
    input.focus(); // Retorna o foco ao input
  }
});

function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');

  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); // Remove do array e do localStorage
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // Remove ❌
  chaptersArray = chaptersArray.filter(item => item !== chapter); // Filtra o array
  setChapterList(); // Atualiza localStorage
}
