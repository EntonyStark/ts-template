export const isBoolean = (v: any): v is boolean => {
  return v instanceof Boolean || v === true || v === false;
};
