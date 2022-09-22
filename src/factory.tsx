import type { ValidComponent } from 'solid-js';
import type { Rules, StyledComponent } from './types';
import { splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { isTemplateStringsArray } from './utils';

const createClassNames = (rules: Rules) => {
  return () => {
    const classNames: string[] = [];
    if (isTemplateStringsArray(rules)) {
      // TODO
    }

    return classNames.join('');
  };
};

const createStyledComponent: StyledComponent = (component) => {
  return (...args) => {
    return (props) => {
      const className = createClassNames(args[0] as Rules);
      const [local, others] = splitProps(props, ['children'] as const);

      return (
        <Dynamic
          component={component as ValidComponent}
          class={className()}
          {...others}
        >
          {local.children}
        </Dynamic>
      );
    };
  };
};

export default createStyledComponent;
