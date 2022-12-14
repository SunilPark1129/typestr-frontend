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
  margin-left: auto;
  gap: 0.1rem;
`;

const StyledRecordButtonBox = styled.section`
  display: flex;
  flex: 1 1 100%;
  gap: 1rem;
  justify-content: center;
`;

const Navbar = () => {
  const [rankTrigger, setRankTrigger] = useState(false);
  const [helperTrigger, setHelperTrigger] = useState(false);
  const [getData, setData] = useState();
  const [getStatus, setStatus] = useState(200);

  /* Display Modal */
  const displayTrigger = () => {
    /* Server Side Handler */
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
    } else if (rankTrigger && getData === undefined) {
      // While waiting the request
      return <Loading />;
    }

    /* Client Side Handler */
    if (rankTrigger && getData !== undefined) {
      // Ranking list button
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

  /* Request server to get datas */
  useEffect(() => {
    if (rankTrigger) {
      getRank(
        (obj) => setData(obj),
        (int) => setStatus(int)
      );
    }
  }, [rankTrigger]);

  useEffect(() => {}, [getStatus]);

  return (
    <StyledNavbar>
      {displayTrigger()}
      <StyledButton
        onClick={() => {
          setRankTrigger(!rankTrigger);
          setHelperTrigger(false);
        }}
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
    </StyledNavbar>
  );
};

export default Navbar;
