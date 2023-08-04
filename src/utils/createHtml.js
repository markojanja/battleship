function createHtml(el, nameClass = '', idName = '') {
  const element = document.createElement(el);
  if (nameClass) {
    element.className = nameClass;
  }
  if (idName) {
    element.setAttribute('id', idName);
  }

  return element;
}
function clearHtml(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
export { createHtml, clearHtml };
