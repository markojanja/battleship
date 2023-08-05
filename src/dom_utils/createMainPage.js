import { createHtml } from '../utils/createHtml';
import app from '../App';

export default function loadMainPage() {
  // create main page
  const main = document.querySelector('.main');
  const container = createHtml('div', 'container');
  const pageTitle = createHtml('h1', 'page-title');
  const btn = createHtml('button', 'start-game');
  btn.textContent = 'start game';
  pageTitle.textContent = 'BATTLESHIP';
  container.appendChild(pageTitle);
  container.appendChild(btn);
  main.appendChild(container);

  btn.addEventListener('click', app);
}
