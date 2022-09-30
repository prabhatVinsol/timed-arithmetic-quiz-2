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
    if (questionNumber < (Number(quiz.noOfQuestions) + 1)) {
      setQuestions([...questions, question]);
      publish(`ResetInterval${quiz.quizId}`, quiz.timer);
      setQuestionNumber(questionNumber + 1);
    }
  };
  const shouldShowQuiz = questionNumber < (Number(quiz.noOfQuestions) + 1);
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
          shouldShowCorrectAnswers
        />
      )}
      {!shouldShowQuiz
      && (
        <Answers
          answers={questions}
          shouldShowCorrectAnswers={false}
        />
      )}
    </div>
  );
}

export default Quiz;
