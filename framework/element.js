import { h } from 'snabbdom';

const initialState = {
  template: '',
  on: {},
};

const createReducer = (args) => (acc, currentString, index) => {
  const currentArg = args[index];

  console.log(currentArg);

  if (currentArg && currentArg.type === 'event') {
    return { ...acc, on: { ...currentArg.event } };
  }

  return {
    ...acc,
    template: acc.template + currentString + (args[index] || ''),
  };
};

const createElement = (tagName) => (strings, ...args) => {
  const { template, on } = strings.reduce(createReducer(args), initialState);

  return {
    type: 'element',
    template: h(tagName, { on }, template),
  };
};

export const div = createElement('div');
export const span = createElement('span');
