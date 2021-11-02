import { init, eventListenersModule } from 'snabbdom';
const patch = init([eventListenersModule]);

export const render = (selector, component) => {
  const $app = document.querySelector(selector);
  patch($app, component.template);
};

export const createComponent = ({
  template,
  state = {},
  methods = {},
  initialState = {},
}) => {
  state = initialState;
  let previous;

  const mappedMethods = (props) =>
    Object.keys(methods).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (...args) => {
          state = methods[key](state, ...args);
          const nextNode = template({
            ...props,
            ...state,
            methods: mappedMethods(props),
          });
          patch(previous.template, nextNode.template);
          previous = nextNode;
          return state;
        },
      }),
      {}
    );

  return (props) => {
    const methods = mappedMethods(props);
    previous = template({ ...props, ...state, methods });
    return previous;
  };
};
