export const render = (selector, component) => {
  const $app = document.querySelector(selector);
  const $element = document.createElement(component.type);
  const $textContent = document.createTextNode(component.template);
  $element.appendChild($textContent);
  $app.appendChild($element);
};
