let computerNumber;
let userNumbers = [];
let attemps = 0;
let maxJogadas = 10;

// Carregar os sons
const musicaFundo = new Audio('merx-market-song-33936.mp3');
const somAcerto = new Audio('collect-points-190037.mp3');

// Configurar a música de fundo
musicaFundo.loop = true;
musicaFundo.volume = 0.3; // Ajuste o volume conforme necessário

// Função para iniciar a música de fundo
function iniciarMusica() {
  musicaFundo.play();
}

// Função para tocar o som de acerto
function tocarSomAcerto() {
  somAcerto.play();
}

// Função de inicialização
function init() {
  computerNumber = Math.floor(Math.random() * 100 + 1);
  iniciarMusica(); // Começar a música de fundo ao iniciar o jogo
}

// Função para comparar os números
function compareNumbers() {
  const userNumber = Number(document.getElementById('inputBox').value);
  userNumbers.push(' ' + userNumber);
  document.getElementById('guesses').innerHTML = userNumbers;

  if (attemps < maxJogadas) {
    if (userNumber > computerNumber) {
      document.getElementById('textOutput').innerHTML = 'Seu número está muito maior';
      document.getElementById('inputBox').value = '';
      attemps++;
      document.getElementById('attempts').innerHTML = attemps;
    }
    else if (userNumber < computerNumber) {
      document.getElementById('textOutput').innerHTML = 'Seu número está muito menor';
      document.getElementById('inputBox').value = '';
      attemps++;
      document.getElementById('attempts').innerHTML = attemps;
    }
    else {
      document.getElementById('textOutput').innerHTML = 'Parabéns! Você acertou!! 🎉';
      tocarSomAcerto(); // Tocar o som de acerto
      attemps++;
      document.getElementById('attempts').innerHTML = attemps;
    }
  } else {
    document.getElementById('textOutput').innerHTML = 'Você perdeu! 😪 O número correto era: ' + computerNumber;
  }
}
