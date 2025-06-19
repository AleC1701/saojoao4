const form = document.getElementById('form-comidas');
const resposta = document.getElementById('resposta');
const selectComida = document.getElementById('comida');

// Lista de nomes que já votaram
let nomesQueVotaram = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const comidaSelecionada = selectComida.value;

  // Verifica se o nome já votou
  if (nomesQueVotaram.includes(nome.toLowerCase())) {
    resposta.innerHTML = `⚠️ O nome <strong>${nome}</strong> já enviou a resposta!`;
    resposta.style.display = 'block';
    return; // Impede o envio novamente
  }

  // Verifica se uma comida foi selecionada
  if (comidaSelecionada) {
    resposta.innerHTML = `<strong>${nome}</strong> vai levar <strong>${comidaSelecionada}</strong> para o São João! 🎉`;
    resposta.style.display = 'block';

    // Remove a comida selecionada do menu
    const optionToRemove = selectComida.querySelector(`option[value="${comidaSelecionada}"]`);
    if (optionToRemove) {
      optionToRemove.remove();
    }

    // Adiciona o nome à lista de quem já votou
    nomesQueVotaram.push(nome.toLowerCase());

    form.reset();
  }
});