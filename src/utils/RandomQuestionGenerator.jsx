const randomQuestionGenerator = () => {
  const firstNumber = Math.floor(Math.random() * 10) + 1;
  const secondNumber = Math.floor(Math.random() * 10) + 1;
  const correctAnswer = firstNumber * secondNumber;

  const wrongAnswer1 = (firstNumber - 1) * secondNumber;
  const wrongAnswer2 = (secondNumber + 1) * firstNumber;

  return {
    firstNumber,
    secondNumber,
    correctAnswer,
    answers: [correctAnswer, wrongAnswer1, wrongAnswer2]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value),
  };
};

export default randomQuestionGenerator;
