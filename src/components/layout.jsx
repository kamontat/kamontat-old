import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import layout from "../scss/bulma.module.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className={layout.container}>{children}</div>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
