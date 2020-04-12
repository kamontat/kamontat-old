import { css } from "@emotion/core";
import { Properties } from "./themes";

export const gstyles = (theme: Properties) => css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /* Reset margin and padding */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${theme.body};
    color: ${theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  /* Reset font size and weight */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  /* Reset unorder list style */
  ul {
    list-style: none;
  }

  /* Reset all input margin */
  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  /* Reset media width and height */
  img,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  /* Reset table and table components */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  td:not([align]),
  th:not([align]) {
    text-align: left;
  }
`;
// `;
