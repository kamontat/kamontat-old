import React from "react";
import ExtRedirect from "../components/redirect";

import { DefaultProps } from "../typescript/properties";

interface ExternalLinkProp extends DefaultProps {
  pageContext: {
    link: string;
  };
}

const ExternalRedirectPage = (prop: ExternalLinkProp) => {
  return <ExtRedirect url={prop.pageContext.link} />;
};

export default ExternalRedirectPage;
