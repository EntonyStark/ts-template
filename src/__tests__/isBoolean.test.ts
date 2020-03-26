import { isBoolean } from '../utils/isBoolean';

describe('isBoolean()', () => {
  it('isBoolean utility function tests', () => {
    expect(isBoolean(new Boolean())).toBe(true);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(123)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(null)).toBe(false);
  });
});
