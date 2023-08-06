import { createHtml, clearHtml } from '../utils/createHtml';

export default function createGamePage() {
  const main = document.querySelector('.main');
  const boards = createHtml('div', 'boards-container', 'boards');
  const playerCont = createHtml('div', 'player', 'player');
  const cpuCont = createHtml('div', 'computer', 'computer');
  boards.appendChild(playerCont);
  boards.appendChild(cpuCont);
  clearHtml(main);
  main.appendChild(boards);
}
