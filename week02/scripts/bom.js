const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const chapter = input.value.trim(); // Remove espaços extras

    if (chapter === '') {
        alert('Please enter a book and chapter.'); // Mensagem para o usuário
        input.focus(); // Retorna o foco para o input
        return;
    }

    // Criar um novo item de lista (li)
    const li = document.createElement('li');
    li.textContent = chapter;

    // Criar um botão de exclusão
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // Evento para remover o item da lista ao clicar no botão ❌
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus(); // Retorna o foco para o input
    });

    // Adicionar o botão ao item da lista
    li.append(deleteButton);
    list.append(li);

    // Limpar o campo de entrada e focar novamente nele
    input.value = '';
    input.focus();
});