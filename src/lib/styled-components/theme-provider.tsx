import * as React from "react";

import { Theme } from "./theme";
import { ThemeProvider } from "./styled-components";

type ThemeStyledProviderProps = {
  theme: Theme;
};

export const ThemeStyledProvider: React.FC<ThemeStyledProviderProps> = ({
  theme,
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
