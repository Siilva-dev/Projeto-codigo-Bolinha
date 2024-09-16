// Seleciona todas as bolinhas
const balls = document.querySelectorAll('.ball');

// Define variáveis para o tamanho, opacidade e posição horizontal aleatória das bolinhas
balls.forEach((ball, index) => {
  ball.style.setProperty('--randX', Math.random()); // Define uma posição horizontal aleatória entre 0 e 1
  ball.style.setProperty('--duration', `${index + 1}s`); // Define a duração da animação com base no índice
});

// Adiciona um evento de toque à tela para afastar as bolinhas
document.addEventListener('touchstart', handleTouchStart);

// Função para afastar as bolinhas após o toque na tela
function handleTouchStart(event) {
  const touchX = event.touches[0].clientX;
  const touchY = event.touches[0].clientY;

  balls.forEach(ball => {
    const ballX = ball.offsetLeft + ball.offsetWidth / 2;
    const ballY = ball.offsetTop + ball.offsetHeight / 2;
    const distanceX = touchX - ballX;
    const distanceY = touchY - ballY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = 200; // Define a distância máxima de afastamento

    if (distance < maxDistance) {
      const angle = Math.atan2(distanceY, distanceX);
      const newX = ballX - Math.cos(angle) * maxDistance;
      const newY = ballY - Math.sin(angle) * maxDistance;

      ball.style.left = `${newX - ball.offsetWidth / 2}px`;
      ball.style.top = `${newY - ball.offsetHeight / 2}px`;
    }
  });
}