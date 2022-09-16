import React, { useState } from 'react';
import QuizGeneratorForm from './QuizGeneratorForm';

function QuizGenerator() {
  const [quizes, updateQuizes] = useState([]);

  const updateQuizs = (quiz) => {
    updateQuizes([...quizes, quiz]);
  };
  return (
    <div className="QuizGenerator">
      <QuizGeneratorForm updateQuizs={updateQuizs} />
    </div>
  );
}

export default QuizGenerator;
