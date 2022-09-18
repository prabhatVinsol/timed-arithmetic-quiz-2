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
        {quizes.map((quiz) => <QuizContainer key={Date.now()} quiz={quiz} />)}
      </div>
    </div>
  );
}

export default QuizGenerator;
