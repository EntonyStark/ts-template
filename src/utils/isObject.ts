import { isNullOrUndefined } from './isNullOrUndefined';
import { isArray } from './isArray';

export const isObjectType = (value: any) => typeof value === 'object';

export const isObject = (v: any): v is object =>
  !isNullOrUndefined(v) && !isArray(v) && isObjectType(v);
