import React from 'react';
import '../stylesheet/Quiz.css';

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
            {quiz.minLimitVal}
          </div>
          <div className="QuizDetailText">
            Timer:
            {' '}
            {quiz.timerVal}
          </div>
        </div>
        <div>
          <div className="QuizDetailText">
            Max Limit:
            {' '}
            {quiz.maxLimitVal}
          </div>
          <div className="QuizDetailText">
            Question Count:
            {' '}
            {quiz.noOfQuestionsVal}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizDetail;
