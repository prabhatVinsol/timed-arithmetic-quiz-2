import React from 'react';

function Answers({ answers, shouldShowCorrectAnswers = false }) {
  const getCorrectOrWrongAnswerInfoList = answers.filter((answer) => (
    shouldShowCorrectAnswers === answer.correct));
  return (
    <div>
      <h2>
        {shouldShowCorrectAnswers ? 'Correct ' : 'Wrong '}
        Answers Are
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th className="table-header-row">No</th>
            <th className="table-header-row">Question</th>
            <th className="table-header-row">Response</th>
            <th className="table-header-row">Answer</th>
          </tr>
        </thead>
        <tbody>
          {getCorrectOrWrongAnswerInfoList.map((answerInfo) => (
            <tr key={answerInfo.id}>
              <td
                className="table-header-row"
              >
                {answerInfo.id}
              </td>
              <td
                className="table-header-row"
              >
                {answerInfo.question}
              </td>
              <td
                className="table-header-row"
              >
                {answerInfo.givenAnswer || 'NA'}
              </td>
              <td
                className="table-header-row"
              >
                {answerInfo.answer}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Answers;
