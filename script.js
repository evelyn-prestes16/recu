// Selecionando elementos
const addButton = document.getElementById('add-button');
const newItemInput = document.getElementById('new-item');
const activityList = document.getElementById('activity-list');
const errorMessage = document.getElementById('error-message');

// Adicionando evento ao botão
addButton.addEventListener('click', () => {
  const newItemText = newItemInput.value.trim(); // Remove espaços extras

  // Validação
  if (newItemText === '') {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Por favor, insira uma atividade válida.';
  } else {
    // Escondendo a mensagem de erro
    errorMessage.style.display = 'none';

    // Criando novo item
    const newItem = document.createElement('li');
    newItem.textContent = newItemText;

    // Adicionando à lista
    activityList.appendChild(newItem);

    // Limpando o campo de entrada
    newItemInput.value = '';
  }
});
    