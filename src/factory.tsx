import type { ParentComponent, ValidComponent } from 'solid-js';
import type { StyledComponent } from './types';
import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

const createStyledComponent: StyledComponent = (component: ValidComponent) => {
  return (...args) => {
    const StyledComponent: ParentComponent = (props) => {
      const [local, others] = splitProps(props, ['children']);

      return (
        <Dynamic component={component} {...others}>
          {local.children}
        </Dynamic>
      );
    };

    return StyledComponent;
  };
};

export default createStyledComponent;
