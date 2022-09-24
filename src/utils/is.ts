export const { toString } = Object.prototype;

export const isObject = (value: unknown): value is object => {
  return toString.call(value) === '[object Object]';
};

export const isFunction = (value: unknown): value is Function => {
  return typeof value === 'function';
};

export const isTemplateStringsArray = (
  value: unknown
): value is TemplateStringsArray => {
  const val = value as TemplateStringsArray;
  return Boolean(val.length && val.raw && val.raw.length);
};
