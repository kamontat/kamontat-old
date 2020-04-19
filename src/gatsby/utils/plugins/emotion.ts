import { DefaultPluginOption } from "./interface";

export default interface EmotionOption extends DefaultPluginOption {
  sourceMap?: boolean;
  autoLabel?: boolean;
  labelFormat?: string;
  instances?: Array<string>;
  cssPropOptimization?: boolean;
}
