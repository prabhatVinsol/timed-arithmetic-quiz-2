import React from 'react';

function QuizDetail(props) {
  const { quiz } = props;
  return (
    <div>
      Details Of Quiz
      <div className="quiz-detail">
        <div>
          <div className="quiz-detail-text">
            Min Limit:
            {' '}
            {quiz.minLimit}
          </div>
          <div className="quiz-detail-text">
            Timer:
            {' '}
            {quiz.timer}
          </div>
        </div>
        <div>
          <div className="quiz-detail-text">
            Max Limit:
            {' '}
            {quiz.maxLimit}
          </div>
          <div className="quiz-detail-text">
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
