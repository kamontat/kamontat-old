import { DefaultPluginOption } from "./interface";

export type Environment = "production" | "staging" | "development" | "testing" | "test";

// Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
// New settings, https://docs.sentry.io/error-reporting/configuration/?platform=javascript
export default interface SentryOption extends DefaultPluginOption {
  dsn: string;
  enabled?: boolean;
  debug?: boolean;
  environment?: Environment;
  release?: string;
  sampleRate?: number;
  maxBreadcrumbs?: number;
  attachStacktrace?: boolean;
  serverName?: string;
}
