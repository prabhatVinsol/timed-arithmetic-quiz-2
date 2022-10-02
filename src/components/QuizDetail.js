import React from 'react';

function QuizDetail(props) {
  const { quiz } = props;
  return (
    <div>
      Details Of Quiz
      <div className="QuizDetail">
        <div>
          <div className="QuizDetailText">
            Min Limit:
            {' '}
            {quiz.minLimit}
          </div>
          <div className="QuizDetailText">
            Timer:
            {' '}
            {quiz.timer}
          </div>
        </div>
        <div>
          <div className="QuizDetailText">
            Max Limit:
            {' '}
            {quiz.maxLimit}
          </div>
          <div className="QuizDetailText">
            Question Count:
            {' '}
            {quiz.noOfQuestions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizDetail;
