import type { ValidComponent } from 'solid-js';
import type { StyleComponent, StyledComponent } from './types';
import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

const createStyledComponent: StyleComponent = (component) => {
  return (styles, ...interpolations) => {
    const Comp = ((props) => {
      Comp.className = '';
      Comp.classList = [];
      const [local, others] = splitProps(props, ['children'] as const);

      return (
        <Dynamic component={component as ValidComponent} {...others}>
          {local.children}
        </Dynamic>
      );
    }) as StyledComponent;

    return Comp;
  };
};

export default createStyledComponent;
