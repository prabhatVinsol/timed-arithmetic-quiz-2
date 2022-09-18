/* eslint no-eval: 0 */
const getRandomOperator = (quiz) => {
  const opIndex = Math.floor(Math.random() * quiz.operatorsVal.length);
  return quiz.operatorsVal[opIndex];
};
const getRandomNumber = (quiz) => {
  const minVal = Number(quiz.minLimitVal);
  const maxVal = Number(quiz.maxLimitVal);
  const range = maxVal - minVal;
  return (minVal + Math.floor(Math.random() * range) + 1);
};
const getQuestion = (number, quiz) => {
  const questionVal = `${getRandomNumber(quiz)} ${getRandomOperator(quiz)} ${getRandomNumber(quiz)}`;
  const evaluate = eval(questionVal);
  return {
    question: questionVal,
    id: number,
    answer: evaluate,
    givenAnswer: '',
    correct: false,
  };
};

export { getQuestion, getRandomNumber, getRandomOperator };
