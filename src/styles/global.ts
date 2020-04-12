import { css } from "@emotion/core";
import { Properties } from "./themes";

export const gstyles = (theme: Properties) => css`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");

  body {
    background: ${theme.body};
    color: ${theme.text};
    display: flex;
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
  }
`;
// `;
