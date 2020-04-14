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

// Styled components

const Container = styled.main`
  ${tw`flex flex-col float-left w-screen mx-auto px-4 md:px-10 py-6 md:py-6`}
`;

const Header = styled.header`
  ${tw`flex justify-end`}
`;

const HiddenTitle = styled.h1`
  visibility: hidden;
  display: none;
`;

const Button = styled.button`
  ${tw`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-lg capitalize`}
`;

const Search = styled.input`
  background-color: ${(props) => props.theme.body};
  ${tw`appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 mx-4 leading-tight focus:outline-none focus:border-purple-500`};
`;

const Section = styled.div``;

const Footer = styled.div``;

interface LayoutProps extends DefaultProps {
  search: boolean;
  onSearch: (value: string) => void;
}

const Layout = (props: LayoutProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_i, themeName, theme, togglingTheme, componentMounted] = useThemeMode(
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

          <Container id="main" aria-labelledby="layout-title">
            <HiddenTitle id="layout-title">Main layout</HiddenTitle>
            <Header>
              {props.search ? (
                <Search
                  onChange={(event) => props.onSearch(event.target.value)}
                  type="text"
                  placeholder="Searching..."
                />
              ) : (
                <div />
              )}
              <Button onClick={togglingTheme as () => void}>{themeName}</Button>
            </Header>
            <Section aria-labelledby="page-title">{props.children}</Section>
            <Footer>
              <p></p>
            </Footer>
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

Layout.defaultProps = {
  search: false,
  onSearch: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
} as LayoutProps;

Layout.propTypes = {
  search: PropTypes.bool,
  onSearch: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Layout;
