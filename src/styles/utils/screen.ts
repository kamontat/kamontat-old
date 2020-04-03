import { breakpoints } from "../variables/breakpoints";
import { css, FlattenSimpleInterpolation, CSSObject, SimpleInterpolation } from "styled-components";

type KeyType = keyof typeof breakpoints;
type ScreenType = {
  [key in KeyType]: (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
};

export const screen: ScreenType = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label as KeyType] = (first, ...args) => css`
    @media (min-width: ${breakpoints[label as KeyType]}) {
      ${css(first, ...args)};
    }
  `;
  return accumulator;
}, {} as ScreenType);
