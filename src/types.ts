import type {
  ComponentProps,
  JSX,
  ParentComponent,
  ValidComponent,
} from 'solid-js';

export type DefaultTheme = {};

export type ExecutionContext = { theme?: DefaultTheme };

export type Keyframes = {
  id: string;
  name: string;
  rules: string;
};

export type StyleFunction<Props extends object = {}> = (
  executionContext: ExecutionContext & Props
) => Interpolation<Props>;

export type StyleObject<Props extends object = {}> = {
  /** @see https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/types.ts#L217-L221 */
  // [key: string]: string | number | StyleObject<Props> | StyleFunction<Props>;
  [K in keyof JSX.CSSProperties]:
    | JSX.CSSProperties[K]
    | ((...args: unknown[]) => JSX.CSSProperties[K]);
};

export type Interpolation<Props extends object = {}> =
  | TemplateStringsArray
  | StyleFunction<Props>
  | StyleObject<Props>
  | Keyframes
  | string
  | number;

export type StyledComponent<Props extends object = {}> =
  ParentComponent<Props> & {
    className: string;
    classList: string[];
  };

export type StyledComponentFactory<InnerProps extends object = {}> = <
  OuterProps extends object = {},
  Props extends object = InnerProps & OuterProps
>(
  styles: Styles<Props>,
  ...interpolations: Interpolation<Props>[]
) => StyledComponent<Props>;

export type StyleComponent = <Comp extends ValidComponent = ValidComponent>(
  component: Comp
) => StyledComponentFactory<ComponentProps<Comp>>;

export type StyleComponentWithTag = {
  [Tag in keyof JSX.IntrinsicElements]: StyledComponentFactory<
    ComponentProps<Tag>
  >;
};

export type Styled = StyleComponent & StyleComponentWithTag;

export type Styles<Props extends object = {}> =
  | TemplateStringsArray
  | StyleObject<Props>
  | StyleFunction<Props>;
