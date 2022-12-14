import React, { useState, useEffect } from "react";

const Timer = () => {
  const [intervalID, setIntervalID] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function recordTime() {
    setIntervalID(setInterval(timer, 10));
  }

  function clearTime() {
    clearInterval(intervalID);
    setSeconds(0);
  }

  function timer() {
    setSeconds((prev) => prev + 1);
  }

  function getTimeTaken() {
    let pre = seconds;
    setSeconds(0);
    return pre;
  }

  return { recordTime, getTimeTaken, clearTime, seconds };
};

export default Timer;
