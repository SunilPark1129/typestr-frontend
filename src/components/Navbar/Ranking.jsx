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
  flex-direction: column;
  border-bottom: 1px dashed ${({ theme }) => theme.colors.shadow};
  padding: 1rem 0;
  &:nth-last-child(1) {
    border-bottom: none;
  }

  > div {
    justify-content: space-between;
    gap: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    > h3 {
      display: flex;
      width: 2rem;
      height: 2rem;
      justify-content: center;
      align-items: center;
      border-radius: 0.2rem;
      font-weight: 500;
      font-size: 1rem;

      &.ranker {
        background-color: ${({ theme }) => theme.colors.dark};
      }
    }

    h4 {
      font-weight: 500;
    }

    > p {
      outline: 1px solid ${({ theme }) => theme.colors.dark};
      padding: 0.1rem;
      border-radius: 0.2rem;
      width: 4.5rem;
      text-align: center;
      font-size: 0.9rem;
    }

    > section {
      margin: 0;
    }
  }
`;

const Ranking = ({ setClose, data }) => {
  const getInfo = () => {
    return (
      <StyledRanking>
        {data.map((result, idx) => {
          return (
            <StyledRankingItem key={idx}>
              <div>
                <h3 className={`${idx < 3 && "ranker"}`}>{idx + 1}</h3>
                <h4>{result.title}</h4>
                <p>{result.total} sec</p>
              </div>
              <div>
                <Info
                  key={idx}
                  lists={result.lists}
                  avg={["Avg", result.avg]}
                  best={["Best", result.best]}
                  worst={["Worst", result.worst]}
                />
              </div>
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
