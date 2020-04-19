import { DefaultPluginOption } from "./interface";

export type RuntimeCaching = {
  urlPattern: RegExp;
  handler: string;
};

export type WorkboxOption = {
  importWorkboxFrom?: "local";
  globDirectory?: string;
  globPatterns?: Array<string>;
  modifyURLPrefix?: Record<string, string>;
  cacheId?: string;
  // Don't cache-bust JS or CSS files, and anything in the static directory,
  // since these files have unique URLs and their contents will never change
  dontCacheBustURLsMatching?: RegExp;
  runtimeCaching?: Array<RuntimeCaching>;
  skipWaiting?: boolean;
  clientsClaim?: boolean;
};

export default interface OfflineOption extends DefaultPluginOption {
  precachePages?: Array<string>;
  appendScript?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  debug?: boolean;
  workboxConfig?: WorkboxOption;
}
