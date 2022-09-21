import type {
  ComponentProps,
  JSX,
  ParentComponent,
  ValidComponent,
} from 'solid-js';

export type DefaultTheme = {};

export type StyledComponentFactory<C extends ValidComponent = ValidComponent> =
  (rules: TemplateStringsArray) => ParentComponent<ComponentProps<C>>;

export type StyledComponent<C extends ValidComponent = ValidComponent> = (
  component: C
) => StyledComponentFactory<C>;

export type StyledComponentWithTag = {
  [Tag in keyof JSX.IntrinsicElements]: StyledComponentFactory<Tag>;
};

export type Styled = StyledComponent & StyledComponentWithTag;
