import React, { useEffect, useState } from 'react';
import { subscribe } from './Event';
import { getQuestion } from './Helper';

function QuestionAnswer(props) {
  const { questionNum, nextQuestion, quiz } = props;
  const [questionInfo, setQuestion] = useState(getQuestion(questionNum, quiz));
  const [inputVal, setInputVal] = useState('');

  const loadNextQuestion = () => {
    nextQuestion(questionInfo);
    setQuestion(getQuestion(questionNum + 1, quiz));
    setInputVal('');
  };

  const onChangeHandler = (e) => {
    setQuestion(() => ({
      ...questionInfo,
      givenAnswer: e.target.value,
      correct: Number(questionInfo.answer) === Number(e.target.value),
    }));
    setInputVal(e.target.value);
  };

  useEffect(() => {
    subscribe(`NextQuestion${quiz.quizId}`, () => {
      loadNextQuestion();
    });
  });

  return (
    <div className="arithmetic-container">
      <div>
        {questionInfo.question}
        <input
          type="number"
          className="input"
          value={inputVal}
          onChange={onChangeHandler}
        />
      </div>
      <div className="ButtonContainer">
        <button
          type="button"
          className="next"
          onClick={loadNextQuestion}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionAnswer;
