import { render } from './framework/index';
import { div } from './framework/element';

const firstName = 'Elvin';
const lastName = 'Ciqueira';

render('#app', div`Hello ${firstName} ${lastName}!`);
