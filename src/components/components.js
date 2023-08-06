import { clearHtml, createHtml } from '../utils/createHtml';

function displayMessage(message) {
  const popup = document.querySelector('.player-popup');
  popup.textContent = message;
  popup.classList.add('show-popup');
}
function removeMessage() {
  const popup = document.querySelector('.player-popup');
  popup.classList.remove('show-popup');
}
function displayModal(cb, message) {
  const body = document.querySelector('body');
  const modalContainer = createHtml('div', 'modal-container');
  const modal = createHtml('div', 'modal');
  const modaltext = createHtml('h3', 'modal-text');
  const modalBtn = createHtml('button', 'modal-btn');

  modalBtn.textContent = 'restart game';

  body.appendChild(modalContainer);
  modalContainer.appendChild(modal);

  modalBtn.addEventListener('click', () => {
    cb();
    clearHtml(modalContainer);
    body.removeChild(modalContainer);
  });
  modal.appendChild(modaltext);
  modal.appendChild(modalBtn);
  modaltext.textContent = message;
}
export { displayMessage, removeMessage, displayModal };
