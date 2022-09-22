import type { Component, ComponentProps, JSX, ParentComponent } from 'solid-js';

export type ValidComponent<P extends object = {}> =
  | keyof JSX.IntrinsicElements
  | Component<P>
  | (string & {});

export type DefaultTheme = {};

export type ExecutionContext = { theme: DefaultTheme };

export type Keyframes = {
  id: string;
  name: string;
  rules: string;
};

export type StyleFunction<Props = {}> = (
  executionContext: ExecutionContext & Props
) => Interpolation<Props>;

export type StyleObject<Props = {}> = {
  [P in keyof JSX.CSSProperties]: JSX.CSSProperties[P] | StyleFunction<Props>;
};

export type Interpolation<Props> =
  | TemplateStringsArray
  | StyleFunction<Props>
  | StyleObject<Props>
  | Keyframes
  | string
  | number;

export type StyledComponentFactory<InnerProps extends object = {}> = <
  OuterProps extends object = {},
  Props extends object = InnerProps & OuterProps
>(
  ...args: Interpolation<Props>[]
) => ParentComponent<Props>;

export type StyledComponent = <
  Tag extends ValidComponent<Props> = ValidComponent,
  InnerProps extends object = ComponentProps<Tag>,
  OuterProps extends object = {},
  Props extends object = InnerProps & OuterProps
>(
  tag: Tag
) => StyledComponentFactory<Props>;

export type StyledComponentWithTag = {
  [Tag in keyof JSX.IntrinsicElements]: StyledComponentFactory<
    JSX.IntrinsicElements[Tag]
  >;
};

export type Styled = StyledComponent & StyledComponentWithTag;
