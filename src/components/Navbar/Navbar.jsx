/*
A Navbar that displays rankings and contains guidelines.

Sunil Park
*/

import React, { useState, useEffect } from "react";
import Ranking from "./Ranking";
import Helper from "./Helper";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
import { getRank } from "../../database/db";

import styled from "styled-components";
import { StyledButton } from "../Button.styled";
import { StyledModal, StyledModalContent } from "../Modal.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRankingStar,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

const StyledNavbar = styled.header`
  display: flex;
  gap: 0.1rem;
`;

const StyledRecordButtonBox = styled.section`
  display: flex;
  flex: 1 1 100%;
  gap: 1rem;
  justify-content: center;
`;

const StyledBgClr = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #bdbdbdb0;
  cursor: pointer;
`;

const Navbar = ({ hasStarted }) => {
  const [rankTrigger, setRankTrigger] = useState(false);
  const [helperTrigger, setHelperTrigger] = useState(false);
  const [getData, setData] = useState();
  const [getStatus, setStatus] = useState(null);
  const [requestCount, setRequestCount] = useState(0);

  /* Display Modal */
  const displayTrigger = () => {
    // Check Error
    if (rankTrigger && getStatus !== 200) {
      return (
        <StyledModal>
          <StyledModalContent>
            <ErrorPage status={getStatus} />
            <StyledRecordButtonBox>
              <StyledButton
                onClick={() => {
                  setRankTrigger(false);
                  setHelperTrigger(false);
                }}
              >
                CLOSE
              </StyledButton>
            </StyledRecordButtonBox>
          </StyledModalContent>
        </StyledModal>
      );
    }

    if (rankTrigger && getData !== undefined) {
      return (
        <Ranking setClose={(bool) => setRankTrigger(bool)} data={getData} />
      );
    } else if (helperTrigger) {
      // Helper button
      return <Helper setClose={(bool) => setHelperTrigger(bool)} />;
    } else {
      return null;
    }
  };

  /* request new data */
  useEffect(() => {
    if (rankTrigger) {
      getRank(
        (obj) => setData(obj),
        (int) => setStatus(int)
      );
    }
  }, [rankTrigger]);

  /*
    wake up the server
    this may takes up to 1 to 3 min because of free tier
  */
  useEffect(() => {
    if (requestCount > 0 && requestCount < 5) {
      console.log("countered:", requestCount);
      getRank(
        (obj) => setData(obj),
        (int) => setStatus(int)
      );
    }
  }, [requestCount]);

  // request server again when status is not 200
  useEffect(() => {
    if (getStatus !== 200) {
      console.log("getstatus:", requestCount);
      console.log("status is not 200:", getStatus);
      setRequestCount(requestCount + 1);
    }
  }, [getStatus]);

  return (
    <StyledNavbar>
      <Loading data={getData} hasStarted={hasStarted} />
      {displayTrigger()}
      <StyledButton
        onClick={() => {
          setRankTrigger(!rankTrigger);
          setHelperTrigger(false);
        }}
        disabled={getData ? false : true}
        title={getData ? "" : "currently, waiting for the server response"}
      >
        <FontAwesomeIcon icon={faRankingStar} />
      </StyledButton>
      <StyledButton
        onClick={() => {
          setHelperTrigger(!helperTrigger);
          setRankTrigger(false);
        }}
      >
        <FontAwesomeIcon icon={faCircleQuestion} />
      </StyledButton>
      <StyledBgClr
        style={{ display: rankTrigger || helperTrigger ? "block" : "none" }}
        onClick={() => {
          setHelperTrigger(false);
          setRankTrigger(false);
        }}
      />
    </StyledNavbar>
  );
};

export default Navbar;
