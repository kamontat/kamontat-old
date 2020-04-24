import { DefaultPluginOption } from "./plugins/interface";

import NetlifyOption from "./plugins/netlify";
import SentryOption from "./plugins/sentry";
import SiteMapOption from "./plugins/sitemap";
import ContentfulOption from "./plugins/contentful";
import HelmetOption from "./plugins/helmet";
import FileSystemOption from "./plugins/filesystem";
import SharpPluginOption from "./plugins/sharp-plugin";
import SharpTransformerOption from "./plugins/sharp-transformer";
import ManifestPluginOption from "./plugins/manifest";
import TypescriptOption from "./plugins/typescript";
import EmotionOption from "./plugins/emotion";
import GDPRCookiesOption from "./plugins/gdpr-cookies";
import OfflineOption from "./plugins/offline";

export type Mapper<N extends string, O extends DefaultPluginOption> = {
  [key in N]: O;
};

export type Mapping = {
  "gatsby-plugin-netlify": NetlifyOption;
  "gatsby-plugin-sentry": SentryOption;
  "gatsby-plugin-sitemap": SiteMapOption;
  "gatsby-source-contentful": ContentfulOption;
  "gatsby-plugin-react-helmet": HelmetOption;
  "gatsby-source-filesystem": FileSystemOption;
  "gatsby-plugin-sharp": SharpPluginOption;
  "gatsby-transformer-sharp": SharpTransformerOption;
  "gatsby-plugin-manifest": ManifestPluginOption;
  "gatsby-plugin-typescript": TypescriptOption;
  "gatsby-plugin-emotion": EmotionOption;
  "gatsby-plugin-gdpr-cookies": GDPRCookiesOption;
  "gatsby-plugin-offline": OfflineOption;
};
