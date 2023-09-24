/*
This component shows the scores stored on the server.

Sunil Park
*/

import React from "react";
import Close from "../Close";
import Info from "../Info";

import styled from "styled-components";
import { StyledModal, StyledModalContent } from "../Modal.styled";
import { StyledButton } from "../Button.styled";

const StyledRanking = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledRankingItem = styled.article`
  display: flex;
  gap: 0.5rem;
  border-bottom: 2px dashed #a8a8a8;
  padding: 1rem 0;
  align-items: center;
  &:nth-last-child(1) {
    border-bottom: none;
  }

  h4 {
    font-weight: 500;
  }

  > div {
    &.ranking {
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
    }
    &.score {
      margin-left: auto;
    }
  }
  &.ranker {
    &:nth-of-type(1) {
      .ranking {
        background-color: #f57575;
      }
    }
    &:nth-of-type(2) {
      .ranking {
        background-color: #9494f3;
      }
    }
    &:nth-of-type(3) {
      .ranking {
        background-color: #6bdd6b;
      }
    }
  }
`;

const Ranking = ({ setClose, data }) => {
  const getInfo = () => {
    return (
      <StyledRanking>
        {data.map((result, idx) => {
          return (
            <StyledRankingItem key={idx} className={`${idx < 3 && "ranker"}`}>
              <div className="ranking">{idx + 1}</div>
              <h4>{result.title}</h4>
              <div className="score"> {result.total} sec</div>
              <Info
                key={idx}
                result={result}
                avg={["Avg", result.avg]}
                best={["Best", result.best]}
                worst={["Worst", result.worst]}
              />
            </StyledRankingItem>
          );
        })}
      </StyledRanking>
    );
  };

  return (
    <StyledModal>
      <StyledModalContent>
        <h3>LEADERBOARD</h3>
        {getInfo()}
        <StyledButton
          style={{ margin: "auto" }}
          onClick={() => setClose(false)}
        >
          CLOSE
        </StyledButton>
      </StyledModalContent>
      <Close setClose={(bool) => setClose(bool)} />
    </StyledModal>
  );
};

export default Ranking;
