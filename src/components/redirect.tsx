import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { DefaultProps } from "../typescript/ui/models/properties";

interface RedirectProps extends DefaultProps {
  url: string;
  second: number | string;
}

const ExtRedirect = (props: RedirectProps) => {
  if (props.url === "")
    return (
      <Helmet
        meta={[{ error: "true", content: `cannot build refresh page because cannot get redirect url` } as any]} // eslint-disable-line @typescript-eslint/no-explicit-any
      ></Helmet>
    );
  else
    return <Helmet meta={[{ "http-equiv": "refresh", content: `${props.second}; url=${props.url}` } as any]}></Helmet>; // eslint-disable-line @typescript-eslint/no-explicit-any
};

ExtRedirect.defaultProps = {
  url: ``,
  second: 0,
} as RedirectProps;

ExtRedirect.propTypes = {
  url: PropTypes.string.isRequired,
  second: PropTypes.number,
};

export default ExtRedirect;
