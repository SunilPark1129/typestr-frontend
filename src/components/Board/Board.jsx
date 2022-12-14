/*
Manages and displays the functions of the game board.

Sunil Park
*/

import React, { useState, useRef, useEffect } from "react";
import Timer from "./Timer";
import Record from "./Record";

import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "../Button.styled";

const StyledBoard = styled.main`
  display: flex;
`;

const StyledContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 20rem;
  position: relative;
`;

const StyledBoardScreen = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 4rem;
  overflow: hidden;
  background-color: white;
  transition: 0.2s background-color ease-out;

  &.hasTypo {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

const StyledLetterBox = styled.div`
  display: flex;
  height: 4rem;
  position: absolute;
  left: 4rem;
  opacity: 0;
  top: 0;
  transition-property: transform, left, opacity;
  transition-duration: 0s, 0s, 0s;
  transition-delay: 0s, 0s, 0s;

  &.hasStarted {
    left: 0rem;
    opacity: 1;
    transition-duration: 0.3s, 0.3s, 0.3s;
    transition-delay: 0s, 0.3s, 0.3s;
  }
`;

const StyledTypo = styled.div`
  background-color: red;
`;

const CorrectEffectAnimation = keyframes`
    0% {
        transform: translateY(0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    60% {
        transform: translateY(-100%);
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(-100%);
    }
`;

const StyledCorrectEffectAnimation = styled.div`
  position: absolute;
  display: flex;
  left: 5rem;
  top: -1rem;
  width: 2em;
  height: 2rem;
  justify-content: center;
  align-items: center;
  opacity: 0;
  color: ${({ theme }) => theme.colors.shadow};
  font-size: 0.7rem;
  white-space: nowrap;
  pointer-events: none;
  &.startAnimation {
    animation: 0.3s ${CorrectEffectAnimation} linear;
  }
`;

const StyledLetter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
`;

const StyledScreenCover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 8rem;
    height: 100%;
    transition-property: width;
    transition-duration: 0.3s;
    background-color: ${({ theme }) => theme.colors.main};
    z-index: 1;
    box-shadow: 1px 0px 10px -3px ${({ theme }) => theme.colors.shadow};
    backdrop-filter: blur(2px);
  }

  &:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    width: 12rem;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.main};
  }

  &.hasStarted {
    &:before {
      width: 4rem;
    }
  }
`;

const StyledInputBox = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  margin: auto;
`;

const StyledInput = styled.input`
  caret-color: transparent;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.main};
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.light};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.dark};
    background-color: white;
  }
`;

const StyledInputCover = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

/* Game Materials */
const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/* Game Duration */
const LETTER_LENGTH = 30;

const Board = ({ setStarted, hasStarted }) => {
  const inputRef = useRef(null);
  const [randomChars, setRandomChars] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [countLetter, setCountLetter] = useState(0);
  const [hasCompleted, setCompleted] = useState(false);
  const [isTypo, setTypo] = useState(false);
  const [countTypo, setCountTypo] = useState(0);
  const [score, setScore] = useState([]);

  /* Time Handler Functions */
  const { recordTime, getTimeTaken, clearTime, seconds } = Timer();

  /* Get Random Numbers */
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  /* Game Start Button Handler */
  const onClickHandler = () => {
    if (!hasStarted) {
      let preArr = [];

      /* Push Random Letters */
      for (let i = 0; i < LETTER_LENGTH; i++) {
        preArr.push(alphabets[getRandomInt(alphabets.length)]);
      }

      // variable score is not included in resetStates() to initialization.
      // because it needs to be passed to the Record component before reseting the values.
      setScore([]);

      resetStates();
      setStarted(true);
      inputRef.current.focus();
      setRandomChars(preArr);
    } else {
      resetStates();
    }
  };

  /* Display letters on the screen */
  const getLetters = (arr) => {
    if (arr === undefined || !arr.length) {
      return null;
    }
    return arr.map((letter, idx) => {
      return <StyledLetter key={idx}>{letter}</StyledLetter>;
    });
  };

  /* Input Change Handler */
  const onChangeHandler = (e) => {
    const { value } = e.target;
    e.target.value = "";
    /* Game Conditioner */
    if (value.toUpperCase() === randomChars[countLetter]) {
      /* Recording Started */
      if (countLetter === 0) {
        recordTime();
      }

      /* AFK Condition */
      if (seconds > 1000) {
        return resetStates();
      } else {
        /* Add a time taken into the array */
        setScore((oldArray) => [...oldArray, getTimeTaken() / 100]);
      }

      /* Game Completed */
      if (countLetter === LETTER_LENGTH - 1) {
        setCompleted(true);
        inputRef.current.blur();
        return resetStates();
      }

      /* Continue */
      setCountLetter(countLetter + 1);
      setInputValue(value);
    } else {
      /* Letter Typo */
      if (hasStarted) {
        setTypo(true);
        setInputValue(value);
        if (countTypo === 2) {
          /* 3 Typos -> Game Over */
          return resetStates();
        }
      }
    }
  };

  useEffect(() => {
    if (isTypo) {
      setCountTypo((prev) => prev + 1);
      setTimeout(() => {
        setTypo(false);
      }, 300);
    }
  }, [isTypo]);

  /* Complete the game => Open Record component */
  function recordScoreModal(score) {
    if (hasCompleted) {
      return (
        <Record score={score} setCompleted={(bool) => setCompleted(bool)} />
      );
    } else {
      return null;
    }
  }

  /* Reset Used States */
  function resetStates() {
    setRandomChars([]);
    setInputValue("");
    setCountLetter(0);
    setCountTypo(0);
    clearTime();
    setStarted(false);
  }

  return (
    <StyledBoard>
      <StyledContent>
        <StyledBoardScreen className={`${isTypo && "hasTypo"}`}>
          <StyledLetterBox
            className={`${hasStarted && "hasStarted"}`}
            style={{ transform: `translateX(${-countLetter * 4 + 4}rem)` }}
          >
            {getLetters(randomChars)}
          </StyledLetterBox>
          <StyledScreenCover className={`${hasStarted && "hasStarted"}`} />
        </StyledBoardScreen>
        <StyledCorrectEffectAnimation
          className={`${seconds !== 0 && "startAnimation"}`}
        >
          {`${score[score.length - 1]} sec`}
        </StyledCorrectEffectAnimation>
        <StyledInputBox>
          <StyledInput
            ref={inputRef}
            type="text"
            maxLength="1"
            autoComplete="none"
            onChange={onChangeHandler}
          />
          <StyledInputCover>{inputValue}</StyledInputCover>
        </StyledInputBox>
        <StyledButton onClick={onClickHandler}>
          <FontAwesomeIcon icon={!hasStarted ? faPlay : faStop} />
        </StyledButton>
      </StyledContent>
      {recordScoreModal(score)}
    </StyledBoard>
  );
};

export default Board;
