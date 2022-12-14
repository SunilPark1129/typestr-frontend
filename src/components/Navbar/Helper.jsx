/*
This component is a modal that describes the rules of the game.

Sunil Park
*/

import React from "react";
import Close from "../Close";

import styled from "styled-components";
import { StyledModal, StyledModalContent } from "../Modal.styled";
import { StyledButton } from "../Button.styled";

const StyledHelper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 0.5rem;
  padding: 1rem 0;

  ul {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    list-style: upper-roman;
    gap: 1rem;
  }

  li {
    span {
      font-weight: bolder;
      text-decoration: underline;
    }
  }

  h4 {
    margin-left: auto;
  }
`;

const Helper = ({ setClose }) => {
  return (
    <StyledModal>
      <StyledModalContent>
        <StyledHelper>
          <h3>RULES</h3>
          <ul>
            <li>
              When starting the game, make sure you are typing in{" "}
              <span>English</span>.
            </li>
            <li>
              You must complete <span>30 alphabets</span> without typos to
              successfully complete the game.
            </li>
            <li>
              At the start of the game, <span>record the time</span> from
              entering the first letter.
            </li>
            <li>
              The <span>total time</span> taken in the result will be your
              ranking.
            </li>
            <li>
              The rankings are up to 10th, and if you are slower than 10th, your
              record will be <span>automatically deleted</span>.
            </li>
          </ul>
          <h4>Developed by Sunil Park</h4>
          <StyledButton
            style={{ margin: "auto" }}
            onClick={() => setClose(false)}
          >
            CLOSE
          </StyledButton>
        </StyledHelper>
      </StyledModalContent>
      <Close setClose={(bool) => setClose(bool)} />
    </StyledModal>
  );
};

export default Helper;
