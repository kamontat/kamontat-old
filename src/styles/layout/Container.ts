import * as styled from "styled-components";
import { ThemedProps } from "../themes/interface";

import { screen } from "../utils/screen";

const s = (styled as styled.ThemedStyledComponentsModule<ThemedProps>).default;

export const Container = s.div`
  margin: 30px;

  ${screen.sm`
    margin: 50px;
  `}
`;

export const ContainerFluid = s(Container)``;
