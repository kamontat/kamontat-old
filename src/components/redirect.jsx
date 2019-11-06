import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const ExtRedirect = ({ url, second }) => {
  if (url === "")
    return (
      <Helmet meta={[{ error: "true", content: `cannot build refresh page because cannot get redirect url` }]}></Helmet>
    );
  else return <Helmet meta={[{ "http-equiv": "refresh", content: `${second}; url=${url}` }]}></Helmet>;
};

ExtRedirect.defaultProps = {
  url: ``,
  second: 0,
};

ExtRedirect.propTypes = {
  url: PropTypes.string.isRequired,
  second: PropTypes.number,
};

export default ExtRedirect;
