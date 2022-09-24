import type { Interpolation, Styles } from './types';
import hash from '@emotion/hash';
import { isFunction, isObject, isTemplateStringsArray } from './utils';

const css = <Props extends object = {}>(
  styles: Styles<Props>,
  ...interpolations: Interpolation<Props>[]
) => {
  if (isFunction(styles) || isObject(styles)) {
  }

  if (isTemplateStringsArray(styles)) {
  }

  return '';
};

export { css };
