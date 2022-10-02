import React, { useEffect, useState } from 'react';
import { publish, subscribe } from './Event';

function TimerContainer(props) {
  const { questionNum, quiz } = props;
  const [count, setCount] = useState(Number(quiz.timer));

  const updateCount = () => {
    if (count > 1) {
      setCount((lastCount) => lastCount - 1);
    } else if (questionNum === quiz.noOfQuestions) {
      setCount(0);
      publish(`NextQuestion${quiz.quizId}`);
    } else {
      publish(`NextQuestion${quiz.quizId}`);
    }
  };
  useEffect(() => {
    const timer = setInterval(updateCount, 1000);
    subscribe(`ResetInterval${quiz.quizId}`, (data) => {
      setCount(data.detail);
    });
    return () => clearInterval(timer);
  });

  return (
    <div className="quiz-detail">
      <div className="quiz-top-text">
        Question No.-
        {' '}
        {questionNum}
      </div>
      <div className="quiz-top-text">
        Time Left-
        {' '}
        {count}
      </div>
    </div>
  );
}

export default TimerContainer;
