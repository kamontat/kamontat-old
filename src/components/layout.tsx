import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { CookiesProvider } from "react-cookie";
import CookieConsent from "react-cookie-consent";

import { DefaultProps } from "../typescript/ui/models/properties";

import { gstyles } from "../styles/global";

import { Container } from "../styles/layout/Container";
import { DarkTheme, LightTheme } from "../styles/themes";

import { ThemeProvider } from "emotion-theming";
import { Global } from "@emotion/core";
import { useThemeMode } from "../typescript/ui/hooks/toggleThemeMode";

const Layout = (props: DefaultProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_i, _n, theme, togglingTheme, componentMounted] = useThemeMode(
    {
      name: "light",
      props: LightTheme,
    },
    { name: "dark", props: DarkTheme },
  );

  if (!componentMounted) {
    return <div />;
  }

  return (
    <React.Fragment>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <Global styles={gstyles(theme)} />

          <button onClick={togglingTheme as () => void}>Hello</button>

          <Container id="main-container">{props.children}</Container>

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
