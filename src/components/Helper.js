/* eslint no-eval: 0 */
const getRandomOperator = (operators) => {
  const opIndex = Math.floor(Math.random() * operators.length);
  return operators[opIndex];
};
const getRandomNumber = (minLimit, maxLimit) => {
  const minVal = Number(minLimit);
  const maxVal = Number(maxLimit);
  const difference = maxVal - minVal + 1;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand += minVal;
  return (rand);
};
const getQuestion = (number, quiz) => {
  const questionVal = `${getRandomNumber(quiz.minLimit, quiz.maxLimit)} ${getRandomOperator(quiz.operators)} ${getRandomNumber(quiz.minLimit, quiz.maxLimit)}`;
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
