import type { ValidComponent } from 'solid-js';
import type { StyledComponent } from './types';
import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

const createStyledComponent: StyledComponent = (component) => {
  return (...args) => {
    return (props) => {
      const [local, others] = splitProps(props, ['children'] as const);

      return (
        <Dynamic component={component as ValidComponent} {...others}>
          {local.children}
        </Dynamic>
      );
    };
  };
};

export default createStyledComponent;
