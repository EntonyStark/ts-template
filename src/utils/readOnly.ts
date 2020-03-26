interface Person {
  name: string;
}

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

// export const makeObjectReadOnly = (obj: Person): Readonly<Person> => Object.freeze(obj);
export const makeObjectReadOnly = (obj: Person): ReadOnly<Person> =>
  Object.freeze(obj);
