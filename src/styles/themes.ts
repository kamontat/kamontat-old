import { ThemedProps } from "./themes/interface";
import { VariableProps } from "./variables/interface";

import LightTheme from "./themes/light";
import DarkTheme from "./themes/dark";

export interface Properties extends ThemedProps, VariableProps {}

export { LightTheme, DarkTheme, ThemedProps, VariableProps };
