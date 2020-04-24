import { DefaultPluginOption } from "./interface";

export type Headers = Array<string>;

export interface HeadersOption {
  [key: string]: Headers;
}

export type HeadersTransformFn = (headers: Headers, path: string) => Headers;

export default interface NetlifyOption extends DefaultPluginOption {
  headers?: HeadersOption;
  allPageHeaders?: Headers; // option to add headers for all pages. `Link` headers are transformed by the below criteria
  mergeSecurityHeaders?: boolean; // boolean to turn off the default security headers
  mergeLinkHeaders?: boolean; // boolean to turn off the default gatsby js headers
  mergeCachingHeaders?: boolean; // boolean to turn off the default caching headers
  transformHeaders?: HeadersTransformFn; // optional transform for manipulating headers under each path (e.g.sorting), etc.
  generateMatchPathRewrites?: boolean; // boolean to turn off automatic creation of redirect rules for client only paths
}
