/*
When a page is requested from the server, the loading page is displayed while waiting.

Sunil Park
*/

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const StyledLoading = styled.section`
  display: flex;
  margin-right: auto;
  align-items: center;
  z-index: 99;
  padding: 0 0.2rem;
  gap: 0.25rem;

  p {
    color: #645555;
    font-size: 0.8rem;
  }
`;

const LoadingAnimation = keyframes`
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: .5;
  }
`;

const StyledLoadingCircle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  cursor: pointer;

  animation: 1s ${LoadingAnimation} infinite linear alternate;
`;

const StyledLoadingText = styled.div`
  padding: 1rem;
  max-width: 20rem;
`;

const Loading = ({ data }) => {
  const [hasClicked, setHasClicked] = useState(true);
  return (
    <StyledLoading title="Using a free tier to request the server may take up to 30 seconds">
      <StyledLoadingCircle
        onClick={() => setHasClicked((prev) => !prev)}
        style={{ backgroundColor: `${data ? "#1518f1" : "#990000"}` }}
      />
      {hasClicked ? (
        <p>{data ? "Server is ready to use" : "Waiting for the server..."}</p>
      ) : null}
    </StyledLoading>
  );
};

export default Loading;
