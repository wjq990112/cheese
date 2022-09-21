import type { StyledComponent } from './types';
import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

const createStyledComponent: StyledComponent = (component) => {
  return (...args) =>
    (props) => {
      const [local, others] = splitProps(props, ['children'] as const);

      return (
        <Dynamic component={component} {...others}>
          {/* @ts-ignore */}
          {local.children}
        </Dynamic>
      );
    };
};

export default createStyledComponent;
