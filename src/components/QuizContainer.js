import React from 'react';
import Quiz from './Quiz';
import QuizDetail from './QuizDetail';

function QuizContainer(props) {
  const { quiz } = props;
  return (
    <div className="QuizContainer">
      <QuizDetail quiz={quiz} />
      <Quiz quiz={quiz} />
    </div>
  );
}

export default QuizContainer;
