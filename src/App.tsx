import React from "react";
import "./styles/App.css";

import { ThemeProvider } from "./lib/styled-components/styled-components";
import { theme } from "./lib/styled-components/theme";
import AppRoutes from "./AppRoutes";
import { Router } from "react-router-dom";
import history from "./lib/history";

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
