/*
This is the space where all pages are displayed in the client app.

Sunil Park
*/

import React from "react";
import Board from "../Board/Board";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 0.3rem;
`;

const Main = ({ hasStarted, setStarted }) => {
  return (
    <StyledMain>
      <Navbar />
      <Board setStarted={(bool) => setStarted(bool)} hasStarted={hasStarted} />
    </StyledMain>
  );
};

export default Main;
