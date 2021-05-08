import React from "react";
import "./styles/App.css";
import { ThemeProvider } from "./lib/styled-components/styled-components";
import { theme } from "./lib/styled-components/theme";
import AppRoutes from "./AppRoutes";
import { Router } from "react-router-dom";
import history from "./lib/history";
import { PilotProvider } from "./contexts/pilot";

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <PilotProvider>
          <AppRoutes />
        </PilotProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
