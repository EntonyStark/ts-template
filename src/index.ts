import { makeObjectReadOnly } from './utils/readOnly';
import { isBoolean } from './utils/isBoolean';

const person = {
  name: 'Tony',
};
const myself = makeObjectReadOnly(person);
console.log(`Hello World from index.ts i am ${myself.name}`);

export default {
  isBoolean
};