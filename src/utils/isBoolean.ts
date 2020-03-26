export const isBoolean = (val: any): val is boolean => {
  return val instanceof Boolean || val === true || val === false;
};
