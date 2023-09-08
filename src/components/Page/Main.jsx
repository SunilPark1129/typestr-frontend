/*
This is the space where all pages are displayed in the client app.

Sunil Park
*/

import React, { useEffect } from "react";
import Board from "../Board/Board";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import { getRank } from "../../database/db";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 0.3rem;
`;

const Main = ({ hasStarted, setStarted }) => {
  useEffect(() => {
    // to wake up the server when opened this website
    // it takes around 1 to 3 min.
    getRank(
      () => {},
      () => {}
    );
  }, []);
  return (
    <StyledMain>
      <Navbar />
      <Board setStarted={(bool) => setStarted(bool)} hasStarted={hasStarted} />
    </StyledMain>
  );
};

export default Main;
