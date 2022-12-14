/*
A Navbar that displays rankings and contains guidelines.

Sunil Park
*/

import React, { useState, useEffect } from "react";
import Ranking from "./Ranking";
import Helper from "./Helper";
import { getRank } from "../../database/db";

import styled from "styled-components";
import { StyledButton } from "../Button.styled";

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

const Navbar = () => {
  const [rankTrigger, setRankTrigger] = useState(false);
  const [helperTrigger, setHelperTrigger] = useState(false);
  const [getData, setData] = useState();

  /* Display Modal */
  const displayTrigger = () => {
    if (rankTrigger && getData != undefined) {
      return (
        <Ranking setClose={(bool) => setRankTrigger(bool)} data={getData} />
      );
    } else if (helperTrigger) {
      return <Helper setClose={(bool) => setHelperTrigger(bool)} />;
    } else {
      return null;
    }
  };

  /* Request server to get datas */
  useEffect(() => {
    if (rankTrigger) {
      getRank((obj) => setData(obj));
    }
  }, [rankTrigger]);

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
