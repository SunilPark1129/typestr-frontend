/*
When a page is requested from the server, the loading page is displayed while waiting.

Sunil Park
*/

import React from "react";
import styled, { keyframes } from "styled-components";

const StyledLoading = styled.section`
  position: fixed;
  display: flex;
  background-color: ${({ theme }) => theme.colors.mild};
  box-shadow: 0px 5px 10px -5px ${({ theme }) => theme.colors.shadow};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  flex-direction: column;
  padding: 1rem;
`;

const StyledLoadingCircle = styled.div`
  display: relative;
  width: 4rem;
  height: 4rem;
  margin: auto;
  display: flex;
`;

const LoadingAnimation = keyframes`
    0% {        
        transform: translate(-50%, -50%) rotateZ(0deg) translate3d(0rem, -1rem, 0);
        width: .5rem;
        height: .5rem;
    }

    20% {        
        width: .5rem;
        height: .5rem;
    }

    50% {        
        transform: translate(-50%, -50%) rotateZ(280deg) translate3d(0rem, -1rem, 0);
        width: .8rem;
        height: .8rem;
    }

    70% {        
        width: .5rem;
        height: .5rem;
    }

    100% {
        transform: translate(-50%, -50%) rotateZ(360deg) translate3d(0rem, -1rem, 0);
        width: .5rem;
        height: .5rem;
    }
`;

const StyledLoadingCircleAni = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  margin: auto;
  border-radius: 50%;
  perspective: 800px;

  span {
    position: absolute;
    content: "";
    left: 50%;
    top: 50%;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.shadow};
    transform: translate(-50%, -50%) translate3d(0rem, -1rem, 0);
    animation: 1s ${LoadingAnimation} infinite linear;

    &:nth-of-type(1) {
      animation-delay: 0s;
    }
    &:nth-of-type(2) {
      animation-delay: -0.2s;
    }
    &:nth-of-type(1) {
      animation-delay: 0.2s;
    }
  }
`;

const StyledLoadingText = styled.div`
  padding: 1rem;
`;

const Loading = () => {
  return (
    <StyledLoading>
      <StyledLoadingCircle>
        <StyledLoadingCircleAni>
          <span></span>
          <span></span>
          <span></span>
        </StyledLoadingCircleAni>
      </StyledLoadingCircle>
      <StyledLoadingText>
        <p>Loading . . .</p>
        <p>We are waking up the server.</p>
      </StyledLoadingText>
    </StyledLoading>
  );
};

export default Loading;
