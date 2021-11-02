import { render } from './framework/index';
import { User } from './src/user';

const firstName = 'Elvin';
const lastName = 'Ciqueira';

render('#app', User({ firstName, lastName }));
