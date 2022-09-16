import React, { useState } from 'react';
import QuizContainer from './QuizContainer';
import QuizGeneratorForm from './QuizGeneratorForm';

function QuizGenerator() {
  const [quizes, updateQuizes] = useState([]);

  const updateQuizs = (quiz) => {
    updateQuizes([...quizes, quiz]);
  };
  return (
    <div className="QuizGenerator">
      <QuizGeneratorForm updateQuizs={updateQuizs} />
      <div className="QuizDiv">
        {quizes.map((quizVal) => <QuizContainer key={Date.now()} quiz={quizVal} />)}
      </div>
    </div>
  );
}

export default QuizGenerator;
