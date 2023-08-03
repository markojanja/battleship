export default function getRandomPosition(size) {
  return {
    row: Math.floor(Math.random() * size),
    col: Math.floor(Math.random() * size),
  };
}
