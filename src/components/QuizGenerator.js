import React, { useState } from 'react';
import QuizContainer from './QuizContainer';
import QuizGeneratorForm from './QuizGeneratorForm';

function QuizGenerator() {
  const [quizzes, _updateQuizzes] = useState([]);

  const updateQuizzes = (quiz) => {
    _updateQuizzes([...quizzes, quiz]);
  };
  return (
    <div className="QuizGenerator">
      <QuizGeneratorForm updateQuizzes={updateQuizzes} currentQuizzesCount={quizzes.length} />
      <div className="QuizDiv">
        {quizzes.map((quiz) => <QuizContainer key={quiz.quizId} quiz={quiz} />)}
      </div>
    </div>
  );
}

export default QuizGenerator;
