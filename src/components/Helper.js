/* eslint no-eval: 0 */
const getRandomOperator = (quiz) => {
  const opIndex = Math.floor(Math.random() * quiz.operatorsVal.length);
  return quiz.operatorsVal[opIndex];
};
const getRandomNumber = (quiz) => {
  const minVal = Number(quiz.minLimitVal);
  const maxVal = Number(quiz.maxLimitVal);
  const difference = maxVal - minVal + 1;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand += minVal;
  return (rand);
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
