// script.js
const botao = document.getElementById('meuBotao');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', () => {
  resultado.textContent = 'Você clicou no botão!';
});