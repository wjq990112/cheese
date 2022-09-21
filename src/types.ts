import type {
  ComponentProps,
  JSX,
  ParentComponent,
  ValidComponent,
} from 'solid-js';

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

export type StyledComponentFactory<Props = {}> = (
  ...args: Interpolation<Props>[]
) => ParentComponent<Props>;
export type StyledComponent<
  Comp extends ValidComponent = ValidComponent,
  Props = {}
> = (component: Comp) => StyledComponentFactory<ComponentProps<Comp> & Props>;
export type StyledComponentWithTag<Props = {}> = {
  [Tag in keyof JSX.IntrinsicElements]: StyledComponentFactory<
    JSX.IntrinsicElements[Tag] & Props
  >;
};

export type Styled = StyledComponent & StyledComponentWithTag;
