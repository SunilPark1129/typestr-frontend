/*
This page is the client page.

Sunil Park
*/

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { startValue, defaultValue } from "./components/Theme";
import "./font.css";
import { GlobalStyles } from "./components/GlobalStyles";
import { StyledWarpper } from "./components/Wrapper.styled";

import Main from "./components/Page/Main";

function App() {
  /* Change Theme */
  // TRUE when the game starts.
  const [hasStarted, setStarted] = useState(false);

  return (
    <ThemeProvider theme={hasStarted ? startValue : defaultValue}>
      <GlobalStyles />
      <StyledWarpper>
        <Main setStarted={(bool) => setStarted(bool)} hasStarted={hasStarted} />
      </StyledWarpper>
    </ThemeProvider>
  );
}

export default App;
