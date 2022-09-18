import React, { useEffect, useState } from 'react';
import { subscribe } from './Event';
import { getQuestion } from './Helper';

function QuestionAnswer(props) {
  const { questionNum, nextQuestion, quiz } = props;
  console.log('quiz Question answer', quiz);
  const [questionObj, setQuestion] = useState(getQuestion(questionNum, quiz));
  const [inputVal, setInputVal] = useState('');
  useEffect(() => {
    subscribe(`NextQuestion${quiz.quizId}`, () => {
      nextQuestion(questionObj);
      setQuestion(getQuestion(questionNum + 1, quiz));
      setInputVal('');
    });
  });
  const handleOnClick = () => {
    nextQuestion(questionObj);
    setQuestion(getQuestion(questionNum + 1, quiz));
    setInputVal('');
  };
  const onChangeHandler = (e) => {
    setQuestion((prevState) => ({
      question: prevState.question,
      id: prevState.id,
      answer: prevState.answer,
      givenAnswer: e.target.value,
      correct: Number(prevState.answer) === Number(e.target.value),
    }));
    setInputVal(e.target.value);
  };
  return (
    <div className="ArithmeticContainer">
      <div>
        {questionObj.question}
        <input
          type="number"
          className="Input"
          value={inputVal}
          onChange={onChangeHandler}
        />
      </div>
      <div className="ButtonContainer">
        <button
          type="button"
          className="Next"
          onClick={handleOnClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionAnswer;
