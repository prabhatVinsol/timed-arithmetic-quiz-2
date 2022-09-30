/* eslint no-eval: 0 */
const getRandomOperator = (quiz) => {
  const opIndex = Math.floor(Math.random() * quiz.operators.length);
  return quiz.operators[opIndex];
};
const getRandomNumber = (quiz) => {
  const minVal = Number(quiz.minLimit);
  const maxVal = Number(quiz.maxLimit);
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
