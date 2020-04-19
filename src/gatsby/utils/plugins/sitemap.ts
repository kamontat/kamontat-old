import { DefaultPluginOption } from "./interface";

export type SerializeOptions = Record<string, string>;
export type SerializeResponse = {
  url: string;
  changefreq: "daily";
  priority: number;
};

export type SerializeFn = (opt: SerializeOptions) => SerializeResponse;
export type ResolveSiteUrlFn = (opt: SerializeOptions) => string;

export default interface SiteMapOption extends DefaultPluginOption {
  query?: string;
  output?: string;
  exclude?: Array<string>;
  createLinkInHead?: boolean;
  serialize?: SerializeFn;
  resolveSiteUrl?: ResolveSiteUrlFn;
}
