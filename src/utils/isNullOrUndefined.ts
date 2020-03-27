export const isNullOrUndefined = (v: any): v is null | undefined =>
  v === null || v === undefined;
