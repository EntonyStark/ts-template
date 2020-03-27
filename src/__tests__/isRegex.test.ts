import { isRegex } from '../utils/isRegex';

describe('isRegex()', () => {
  it('should return true when value is a instanceof Regexp', () => {
    expect(isRegex(new RegExp('ab+c', 'i'))).toBeTruthy();
  });

  it('should return false when value is not an instanceof Regexp', () => {
    expect(isRegex(null)).toBeFalsy();
    expect(isRegex(undefined)).toBeFalsy();
    expect(isRegex(-1)).toBeFalsy();
    expect(isRegex(0)).toBeFalsy();
    expect(isRegex(1)).toBeFalsy();
    expect(isRegex({})).toBeFalsy();
    expect(isRegex([])).toBeFalsy();
    expect(isRegex(new String('test'))).toBeFalsy();
    expect(isRegex(() => null)).toBeFalsy();
  });
});
