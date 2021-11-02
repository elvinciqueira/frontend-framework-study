export const createEventListener = (name) => (f) => ({
  type: 'event',
  event: { [name]: f },
});

export const onClick = createEventListener('click');
