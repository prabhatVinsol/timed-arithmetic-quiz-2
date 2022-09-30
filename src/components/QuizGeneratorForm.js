import React, { useState } from 'react';
import '../stylesheet/Quiz.css';

function QuizGeneratorForm(props) {
  const { updateQuizzes, currentQuizzesCount } = props;
  const [minLimit, setMinLimit] = useState('');
  const [maxLimit, setMaxLimit] = useState('');
  const [noOfQuestions, setNoOfQuestions] = useState('');
  const [timer, setTimer] = useState('');
  const [operators, updateOperator] = useState([]);

  const minLimitChangeHandler = (e) => {
    setMinLimit(e.target.value);
  };
  const maxLimitHandler = (e) => {
    setMaxLimit(e.target.value);
  };
  const noQuestionHandler = (e) => {
    setNoOfQuestions(e.target.value);
  };
  const timerHandler = (e) => {
    setTimer(e.target.value);
  };
  const operationSelectionHandler = (e) => {
    const operatorIndex = operators.indexOf(e.target.defaultValue);
    if (operatorIndex >= 0) {
      updateOperator(operators.filter((operator) => operator !== e.target.defaultValue));
    } else {
      updateOperator([...operators, e.target.defaultValue]);
    }
  };
  const onSubmit = () => {
    if ((minLimit === '') || (minLimit < 1)) {
      alert('Please provide correct min limit.');
    } else if ((maxLimit === '') || (maxLimit < 1)) {
      alert('Please provide correct max limit.');
    } else if ((noOfQuestions === '') || (noOfQuestions < 1)) {
      alert('Please provide correct no of questions.');
    } else if ((timer === '') || (timer < 1)) {
      alert('Please provide correct timer.');
    } else if (operators.length === 0) {
      alert('Please select atleast one operator.');
    } else {
      const quiz = {
        minLimitVal: minLimit,
        maxLimitVal: maxLimit,
        noOfQuestionsVal: noOfQuestions,
        timerVal: timer,
        operatorsVal: operators,
        quizId: currentQuizzesCount + 1,
      };
      updateQuizzes(quiz);
      setMinLimit('');
      setMaxLimit('');
      setNoOfQuestions('');
      setTimer('');
      updateOperator([]);
    }
  };
  const plusChecked = operators.indexOf('+') >= 0;
  const minusChecked = operators.indexOf('-') >= 0;
  const multiplyChecked = operators.indexOf('*') >= 0;
  const divideChecked = operators.indexOf('/') >= 0;
  return (
    <div className="QuizGeneratorForm">
      <h2>Quiz Generation</h2>
      <div className="QGFTop">
        <div>
          <div className="QZInput">
            Min Limit
            <input
              type="number"
              className="Input"
              value={minLimit}
              onChange={minLimitChangeHandler}
            />
          </div>
          <div className="QZInput">
            No of Questions
            <input
              type="number"
              className="Input"
              value={noOfQuestions}
              onChange={noQuestionHandler}
            />
          </div>
        </div>
        <div>
          <div className="QZInput">
            Max Limit
            <input
              type="number"
              className="Input"
              value={maxLimit}
              onChange={maxLimitHandler}
            />
          </div>
          <div className="QZInput">
            Timer
            <input
              type="number"
              className="Input"
              value={timer}
              onChange={timerHandler}
            />
          </div>
        </div>
      </div>
      <div className="QGFMid">
        Operations:
        <div className="QGFODiv">
          <div>
            +
            <input
              type="checkbox"
              id="Operations"
              name="Operations"
              value="+"
              onChange={operationSelectionHandler}
              checked={plusChecked}
            />
          </div>
          <div>
            -
            <input
              type="checkbox"
              id="Operations"
              name="Operations"
              value="-"
              onChange={operationSelectionHandler}
              checked={minusChecked}
            />
          </div>
          <div>
            *
            <input
              type="checkbox"
              id="Operations"
              name="Operations"
              value="*"
              onChange={operationSelectionHandler}
              checked={multiplyChecked}
            />
          </div>
          <div>
            /
            <input
              type="checkbox"
              id="Operations"
              name="Operations"
              value="/"
              onChange={operationSelectionHandler}
              checked={divideChecked}
            />
          </div>
        </div>

      </div>
      <button className="Submit" type="button" value="Submit" onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default QuizGeneratorForm;
