import React, { useState } from 'react';
import Answers from './Answers';
import { publish } from './Event';
import QuestionAnswer from './QuestionAnswer';
import Score from './Score';
import TimerContainer from './TimerContainer';

function Quiz(props) {
  const { quiz } = props;
  const [questionNumber, setQuestionNumber] = useState(1);
  const [questions, setQuestions] = useState([]);
  const nextQuestion = (question) => {
    console.log('Hey this is next question with previous question number:', questionNumber);
    if (questionNumber < (Number(quiz.noOfQuestionsVal) + 1)) {
      setQuestions([...questions, question]);
      publish('ResetInterval', quiz.timerVal);
      setQuestionNumber(questionNumber + 1);
      console.log('Hey this is next question with current question number:', questionNumber);
    }
  };
  const shouldShowQuiz = questionNumber < (Number(quiz.noOfQuestionsVal) + 1);
  return (
    <div>
      {shouldShowQuiz && (
        <TimerContainer
          questionNum={questionNumber}
          quiz={quiz}
        />
      )}
      {shouldShowQuiz && (
        <QuestionAnswer
          questionNum={questionNumber}
          nextQuestion={nextQuestion}
          quiz={quiz}
        />
      )}
      <Score answers={questions} />
      {!shouldShowQuiz
      && (
        <Answers
          answers={questions}
          forCorrect
        />
      )}
      {!shouldShowQuiz
      && (
        <Answers
          answers={questions}
          forCorrect={false}
        />
      )}
    </div>
  );
}

export default Quiz;
