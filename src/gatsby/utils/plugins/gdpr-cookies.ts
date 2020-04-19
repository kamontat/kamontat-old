import { DefaultPluginOption } from "./interface";

export type DefaultDataLayerValue = Record<string, string>;
export type DefaultDataLayerFn = () => DefaultDataLayerValue;
export type DefaultDataLayer = DefaultDataLayerValue | DefaultDataLayerFn;

export type GAOption = {
  trackingId?: string;
  cookieName?: string;
  anonymize?: boolean;
};

export type GTMOption = {
  trackingId?: string;
  cookieName?: string;
  dataLayerName?: string;
  gtmAuth?: string;
  gtmPreview?: string;
  defaultDataLayer?: DefaultDataLayer;
};

export type FPOption = {
  pixelId?: string;
  cookieName?: string;
};

export default interface GDPRCookiesOption extends DefaultPluginOption {
  googleTagManager?: GTMOption;
  googleAnalytics?: GAOption;
  facebookPixel?: FPOption;
  environments: Array<string>;
}
