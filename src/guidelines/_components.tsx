import React from "react";

import PropTypes from "prop-types";

import { DefaultProps } from "../typescript/ui/models/properties";

interface NameProps extends DefaultProps {
  test: string;
}

const Name = (props: NameProps) => {
  return <div>{props.test}</div>;
};

Name.defaultProps = {
  test: `testing`,
} as NameProps;

Name.propTypes = {
  test: PropTypes.string.isRequired,
};

export default Name;
