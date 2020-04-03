import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { CookiesProvider } from "react-cookie";
import CookieConsent from "react-cookie-consent";

import { DefaultProps } from "../typescript/ui/models/properties";

import { GlobalStyles } from "../styles/global";

import { Container } from "../styles/layout/Container";
import darkTheme from "../styles/themes/dark";
import lightTheme from "../styles/themes/light";

import { ThemeProvider } from "styled-components";
import { useThemeMode } from "../typescript/ui/hooks/toggleThemeMode";

const Layout = (props: DefaultProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [theme, _, componentMounted] = useThemeMode();

  if (!componentMounted) {
    return <div />;
  }

  return (
    <React.Fragment>
      <CookiesProvider>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />

          <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap" rel="stylesheet" />
          </Helmet>

          <Container>{props.children}</Container>

          <CookieConsent
            location="bottom"
            buttonText="I understand"
            style={{ background: "#000000" }}
            cookieName="is-analytics-enabled"
            enableDeclineButton
          >
            This website uses cookies to enhance the user experience.
          </CookieConsent>
        </ThemeProvider>
      </CookiesProvider>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
