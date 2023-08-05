export default function getRandomPosition(size) {
  return {
    row: Math.floor(Math.random() * size),
    col: Math.floor(Math.random() * size),
  };
}

function clckHandler(cb) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      cb();
    });
  });
}

function displayMessage(message) {
  console.log(message);
}

export { clckHandler, displayMessage };
