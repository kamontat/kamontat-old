import React from "react";
import ExtRedirect from "../components/redirect";

import { DefaultProps } from "../typescript/ui/models/properties";

type ExternalLinkProp = DefaultProps<{
  link: string;
}>;

const ExternalRedirectPage = (prop: ExternalLinkProp) => {
  return <ExtRedirect url={prop.pageContext?.link} second={prop.pageContext?.second} />;
};

export default ExternalRedirectPage;
