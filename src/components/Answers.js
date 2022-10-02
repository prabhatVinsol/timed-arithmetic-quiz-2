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
      <table className="Table">
        <thead>
          <tr>
            <th className="TableHeaderRow">No</th>
            <th className="TableHeaderRow">Question</th>
            <th className="TableHeaderRow">Response</th>
            <th className="TableHeaderRow">Answer</th>
          </tr>
        </thead>
        <tbody>
          {getCorrectOrWrongAnswerInfoList.map((answerInfo) => (
            <tr key={answerInfo.id}>
              <td
                className="TableHeaderRow"
              >
                {answerInfo.id}
              </td>
              <td
                className="TableHeaderRow"
              >
                {answerInfo.question}
              </td>
              <td
                className="TableHeaderRow"
              >
                {answerInfo.givenAnswer || 'NA'}
              </td>
              <td
                className="TableHeaderRow"
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
