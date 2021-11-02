import { init, eventListenersModule } from 'snabbdom';
const patch = init([eventListenersModule]);

export const render = (selector, component) => {
  console.log('component', component);
  const $app = document.querySelector(selector);
  patch($app, component.template);
};
