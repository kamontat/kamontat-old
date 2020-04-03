import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { CookiesProvider } from "react-cookie";
import CookieConsent from "react-cookie-consent";

import layout from "../scss/bulma.module.scss";

import { DefaultProps } from "../typescript/src/models/properties";

const Layout = (props: DefaultProps) => {
  return (
    <React.Fragment>
      <CookiesProvider>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
        </Helmet>

        <div className={layout.container}>{props.children}</div>

        <CookieConsent
          location="bottom"
          buttonText="I understand"
          style={{ background: "#000000" }}
          cookieName="is-analytics-enabled"
          enableDeclineButton
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </CookiesProvider>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
