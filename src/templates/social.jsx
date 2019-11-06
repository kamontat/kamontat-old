import React from "react";
import ExtRedirect from "../components/redirect";

const SocialPage = ({ pageContext }) => {
  return <ExtRedirect url={pageContext.social} />;
};

export default SocialPage;
