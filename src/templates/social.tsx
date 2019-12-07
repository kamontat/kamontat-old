import React from "react";
import ExtRedirect from "../components/redirect";

import { DefaultProps } from "../typescript/properties";

interface SocialProp extends DefaultProps {
  pageContext: {
    social: string;
  };
}

const SocialPage = (prop: SocialProp) => {
  return <ExtRedirect url={prop.pageContext.social} />;
};

export default SocialPage;
