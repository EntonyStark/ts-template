import { makeObjectReadOnly } from './utils/readOnly';

const person = {
  name: 'Tony',
  age: 28,
};
const myself = makeObjectReadOnly(person);
console.log(
  `Hello World from index.ts i am ${myself.name} and me ${myself.age} years old`,
);
