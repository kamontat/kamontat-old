import { GatsbyConfig } from "gatsby";
import { getenv } from "./index";
import { BuilderProps } from "./constants";
import { Mapping } from "./plugins";

export class ConfigBuilder {
  private config: GatsbyConfig;

  constructor() {
    this.config = {
      siteMetadata: {},
      plugins: [],
    };
  }

  addMetaEnv(name: string, props: BuilderProps) {
    if (this.config.siteMetadata) this.config.siteMetadata[name] = getenv(props);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addMeta(name: string, props: any) {
    if (this.config.siteMetadata) this.config.siteMetadata[name] = props;
  }

  addPlugin<K extends keyof Mapping>(name: K, options: Mapping[K]) {
    if (this.config.plugins !== undefined) {
      console.info(`[info] add '${name}' to plugins list`);
      this.config.plugins.push({
        resolve: name,
        options: options,
      });
    }
  }

  build() {
    return this.config;
  }
}
