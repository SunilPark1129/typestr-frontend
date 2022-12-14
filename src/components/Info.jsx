/*
This component organizes and lists the scores and displays.

Sunil Park
*/

import React, { useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./Button.styled";

const StyledInfo = styled.section`
  margin: auto;
`;

const StyledInfoContent = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StyledInfoList = styled.article`
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
    box-shadow: 0px 5px 10px -5px ${({ theme }) => theme.colors.shadow};
    background-color: ${({ theme }) => theme.colors.mild};
    border-radius: 0.5rem;
  }
`;

const StyledInfoResult = styled.article`
  flex: 1 1 30%;
  text-align: center;
  padding: 0.5rem;
  box-shadow: 0px 5px 10px -5px ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 0.5rem;
`;

const Info = (props) => {
  // if TRUE => displays the scores.
  const [displayList, setDisplayList] = useState(false);

  function getDisplay() {
    if (displayList) {
      return (
        <StyledInfoContent>
          {Object.values(props).map((list, idx) => {
            if (idx === 0) {
              return (
                <StyledInfoList key={idx}>
                  {list.map((item, idx) => {
                    return (
                      <div key={idx}>
                        <h4>{idx + 1}</h4>
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </StyledInfoList>
              );
            } else {
              return (
                <StyledInfoResult key={idx}>
                  <h4>{list[0]}</h4>
                  <p>{list[1]}</p>
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
