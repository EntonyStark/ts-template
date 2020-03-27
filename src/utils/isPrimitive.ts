import { isNullOrUndefined } from './isNullOrUndefined';
import { isObjectType } from './isObject';
import { Primitive } from '../types';

export const isPrimitive = (v: any): v is Primitive =>
  isNullOrUndefined(v) || !isObjectType(v);
