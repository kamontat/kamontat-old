import { DefaultPluginOption } from "./interface";

export default interface FileSystemOption extends DefaultPluginOption {
  name: string;
  path: string;
  ignore?: Array<string>;
}
