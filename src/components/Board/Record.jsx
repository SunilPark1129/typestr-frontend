/*
Calculate the user's score, connect it to the server to store it in the database.

Sunil Park
*/
import React, { useEffect, useState, useRef } from "react";
import { getRank, postRank, deleteRank } from "../../database/db";
import { totalScore, avgScore, bestScore, worstScore } from "./math";
import Info from "../Info";
import Close from "../Close";
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";

import styled from "styled-components";
import { StyledButton } from "../Button.styled";
import { StyledModal, StyledModalContent } from "../Modal.styled";

const StyledRecordInputBox = styled.div`
  gap: 0.5rem;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.mild};
  box-shadow: 0px 5px 10px -5px ${({ theme }) => theme.colors.shadow};
  border-radius: 0.5rem;
  padding: 1rem;

  h3 {
    font-size: 1rem;
    flex: 1 1 100%;
  }

  p {
    flex: 1 1 100%;
  }

  span {
    color: red;
    font-weight: bolder;
  }
`;

const StyledRecordInput = styled.input`
  margin: auto;
  width: 12rem;
  height: 2rem;
  padding: 0 10px;
`;

const StyledRecordButtonBox = styled.section`
  display: flex;
  flex: 1 1 100%;
  gap: 1rem;
  justify-content: center;
`;

const Record = ({ score, setCompleted }) => {
  const btnRef = useRef(null);
  const [getData, setData] = useState();
  const [getStatus, setStatus] = useState(200);
  const [hasLowScore, setLowScore] = useState(false);
  const [hasSubmited, setSubmited] = useState(false);
  const [result, setResult] = useState({
    title: "",
    lists: score,
    total: totalScore(score),
    avg: avgScore(score),
    best: bestScore(score),
    worst: worstScore(score),
  });

  /* Request a server to save current score */
  function saveHandler() {
    if (result.title !== "") {
      setSubmited(true);
      /* Get data from the server */
      getRank(
        (obj) => setData(obj),
        (int) => setStatus(int)
      );
    }
  }

  // the data is loaded to compare whether the score is higher than the lowest rank score on the server.
  useEffect(() => {
    if (getData) {
      const payload = result;

      if (getData.length < 10) {
        postRank(payload);
      } else if (result.total < getData[getData.length - 1].total) {
        // If current score is higher than the 10th place
        postRank(payload);
        deleteRank(getData[getData.length - 1]["_id"]);
      } else {
        // If current score is lower than the 10th place
        return setLowScore(true);
      }

      setCompleted(false);
    }
  }, [getData]);

  /* Displays Score Result */
  function displayResult() {
    /* Server Side Handler */
    if (getStatus !== 200) {
      return (
        <>
          <ErrorPage status={getStatus} onClick={closeHandler} />
          <StyledRecordButtonBox>
            <StyledButton onClick={closeHandler}>CLOSE</StyledButton>
          </StyledRecordButtonBox>
        </>
      );
    } else if (hasSubmited && getData === undefined) {
      return <Loading />;
    }

    /* Client Side Handler */
    if (hasLowScore) {
      /* When the score is lower than the last rank */
      return (
        <StyledRecordInputBox>
          <h3>Cannot submit the form</h3>
          <p>
            Your score is <span>LOWER</span> than the lowest recorded score.
          </p>
          <StyledRecordButtonBox>
            <StyledButton onClick={closeHandler}>CLOSE</StyledButton>
          </StyledRecordButtonBox>
        </StyledRecordInputBox>
      );
    } else {
      /* Asking Input */
      return (
        <StyledRecordInputBox>
          <h3>Score: {result.total} sec</h3>
          <Info
            lists={result.lists}
            avg={["Avg", result.avg]}
            best={["Best", result.best]}
            worst={["Worst", result.worst]}
          />
          <p>Would you like to record your score?</p>

          <StyledRecordInput
            onChange={(e) =>
              setResult({ ...result, title: e.target.value.trim() })
            }
            maxLength="15"
            autoComplete="off"
            placeholder="Enter your name here ..."
          />
          <StyledRecordButtonBox>
            <StyledButton ref={btnRef} onClick={saveHandler}>
              YES
            </StyledButton>
            <StyledButton onClick={closeHandler}>NO</StyledButton>
          </StyledRecordButtonBox>
        </StyledRecordInputBox>
      );
    }
  }

  // If no title is entered, the submit button is disabled.
  useEffect(() => {
    if (result.title === "") {
      btnRef.current.disabled = true;
    } else {
      btnRef.current.disabled = false;
    }
  }, [result.title]);

  /* When Pressed Close Button */
  function closeHandler() {
    setLowScore(false);
    setCompleted(false);
  }

  return (
    <StyledModal>
      <StyledModalContent>
        <Close setClose={(bool) => setCompleted(bool)} />
        {displayResult()}
      </StyledModalContent>
    </StyledModal>
  );
};

export default Record;
