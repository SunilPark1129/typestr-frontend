/*
This component organizes and lists the scores and displays.

Sunil Park
*/

import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./Button.styled";
import Close from "./Close";

const StyledInfo = styled.div``;

const StyledInfoContent = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: 2rem 1rem;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  box-shadow: 0px 5px 10px -5px ${({ theme }) => theme.colors.shadow};
  z-index: 9;
  overflow: auto;
  max-height: 30rem;

  > .detail {
    width: 100%;
    text-align: center;
    font-weight: bold;
  }

  > .user {
    width: 100%;
    text-align: center;
  }
`;

const StyledInfoList = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  flex-wrap: wrap;

  > div {
    flex: 1 1 30%;
    min-width: 3rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    width: 4rem;
    text-align: center;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.shadow};
    background-color: #f1f1f1;
    border-radius: 0.5rem;
  }
`;

const StyledInfoResult = styled.div`
  flex: 1 1 30%;
  text-align: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.shadow};
`;

const Info = (props) => {
  const [displayList, setDisplayList] = useState(false);

  function getDisplay() {
    if (displayList) {
      return (
        <StyledInfoContent>
          <div className="detail">DETAIL</div>
          <div className="user">{props.result.title}</div>
          <Close setClose={(bool) => setDisplayList(bool)} />
          {Object.values(props).map((result, idx) => {
            if (idx === 0) {
              return (
                <StyledInfoList key={idx}>
                  {result.lists.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <p>{idx + 1}</p>
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </StyledInfoList>
              );
            } else {
              return (
                <StyledInfoResult key={idx}>
                  <p>{result[0]}</p>
                  <p>{result[1]}</p>
                </StyledInfoResult>
              );
            }
          })}
        </StyledInfoContent>
      );
    } else {
      return null;
    }
  }
  return (
    <StyledInfo>
      <StyledButton onClick={() => setDisplayList(!displayList)}>
        Details
      </StyledButton>
      {getDisplay()}
    </StyledInfo>
  );
};

export default Info;
