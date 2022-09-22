import type { Interpolation, Styles } from './types';
import hash from '@emotion/hash';

const css = <Props extends object = {}>(
  styles: Styles<Props>,
  ...interpolations: Interpolation<Props>[]
) => {};

export default css;
