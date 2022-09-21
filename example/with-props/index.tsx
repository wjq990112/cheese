import type { Component } from 'solid-js';
import styled from '@holiday-lab/cheese';

interface Props {
  primary?: boolean;
}

const Button = styled.button<Props>`
  /* Adapt the colors based on primary prop */
  background: ${(props: Props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props: Props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const WithProps: Component = () => (
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);

export default WithProps;
