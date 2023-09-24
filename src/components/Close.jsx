/*
Close component that closes the modal when the modal is opened.

Sunil Park
*/

import React from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const StyledClose = styled.div`
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Close = ({ setClose }) => {
  return (
    <StyledClose onClick={() => setClose(false)}>
      <FontAwesomeIcon icon={faClose} />
    </StyledClose>
  );
};

export default Close;
