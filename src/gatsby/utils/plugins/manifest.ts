import { DefaultPluginOption } from "./interface";

export type DisplayOption = "fullscreen" | "standalone" | "minimal-ui" | "browser";
export type CacheBusting = "query" | "name" | "none";
export type CrossOrigin = "use-credentials" | "anonymous";

export type Icon = {
  src: string;
  sizes: string;
  type: `image/png` | `image/jpg` | `image/svc`;
};

export interface ManifestOptions {
  name: string;
  short_name: string;
  description: string;
  icon: string;
  icons?: Array<Icon>;
  lang?: string;
  display?: DisplayOption;
  start_url?: string;
  scope?: string;
  background_color?: string;
  theme_color?: string;
}

export default interface ManifestPluginOption extends DefaultPluginOption, ManifestOptions {
  localize?: Array<ManifestOptions>;
  legacy?: boolean; // this will not add apple-touch-icon links to <head>
  include_favicon?: boolean; // This will exclude favicon link tag
  theme_color_in_head?: boolean; // This will avoid adding theme-color meta tag.
  cache_busting_mode?: CacheBusting;
  crossOrigin?: CrossOrigin;
  icon_options?: {
    // For all the options available, please see:
    // https://developer.mozilla.org/en-US/docs/Web/Manifest
    // https://w3c.github.io/manifest/#purpose-member
    purpose?: string;
  };
}
