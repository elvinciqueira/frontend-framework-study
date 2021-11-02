const createElement = (tagName) => (string, ...args) => ({
  type: tagName,
  template: string.reduce(
    (acc, currentString, index) => acc + currentString + (args[index] || ''),
    ''
  ),
});

export const div = createElement('div');
export const span = createElement('span');
