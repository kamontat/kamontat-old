import { DefaultPluginOption } from "./interface";

export default interface Option extends DefaultPluginOption {
  isTSX?: boolean;
  allExtensions?: boolean;
  jsxPragma?: `jsx` | "React";
}
