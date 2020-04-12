import React from "react";
import PropTypes from "prop-types";

import { CookiesProvider } from "react-cookie";
import CookieConsent from "react-cookie-consent";

import { DefaultProps } from "../typescript/ui/models/properties";

// Styled import

import tw from "twin.macro";
import styled from "../styles/styled";

import { Global } from "@emotion/core";
import { gstyles } from "../styles/global";

// Theming import

import { ThemeProvider } from "emotion-theming";
import { DarkTheme, LightTheme } from "../styles/themes";

import { useThemeMode } from "../typescript/ui/hooks/toggleThemeMode";

const Button = styled.button`
  ${tw`text-lg px-8 py-2 rounded`}
`;

const Container = styled.div`
  ${tw`flex flex-col float-left w-screen mx-auto px-4 md:px-10 py-6 md:py-6`}
`;

const Header = styled.div``;
const Main = styled.div``;

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

          <Container id="main-container">
            <Header>
              <Button onClick={togglingTheme as () => void}>Hello</Button>
            </Header>
            <Main>{props.children}</Main>
          </Container>

          <CookieConsent
            location="bottom"
            buttonText="I understand"
            style={{ background: theme.text, color: theme.body }}
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
