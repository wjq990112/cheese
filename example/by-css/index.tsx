import type { Component, ParentComponent } from 'solid-js';
import { css } from '@holiday-lab/cheese';

interface Props {
  primary?: boolean;
}

const Button: ParentComponent = (props) => (
  <button
    class={css`
      color: palevioletred;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    `}
  >
    {props.children}
  </button>
);

const ButtonWithProps: ParentComponent<Props> = (props) => (
  <button
    class={css<Props>`
      /* Adapt the colors based on primary prop */
      background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
      color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    `}
  >
    {props.children}
  </button>
);

const ByCss: Component = () => {
  return (
    <div>
      <Button>Normal Button</Button>
      <ButtonWithProps>Normal Button With Props</ButtonWithProps>
      <ButtonWithProps primary>Primary Button With Props</ButtonWithProps>
    </div>
  );
};

export default ByCss;
