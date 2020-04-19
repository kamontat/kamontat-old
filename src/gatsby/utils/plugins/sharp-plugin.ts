import { DefaultPluginOption } from "./interface";

export default interface SharpPluginOption extends DefaultPluginOption {
  useMozJpeg?: boolean;
  stripMetadata?: boolean;
  defaultQuality?: number;
}
