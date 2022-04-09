import { useEffect, useState, useContext } from "react";
import RandomQuestionGenerator from "../utils/RandomQuestionGenerator";
import { useNavigate } from "react-router-dom";

import ManFigure from "../svgs/ManFigure";
import AnswerBox from "../svgs/AnswerBox";

import questionsStyle from "../styles/QuestionsPage.module.css";

import { ScoreTourContext } from "../contexts/ScoreTourContext";

const totalTourQuestionCount = 10;
const trueAnswer = 1;
const falseAnswer = 0;

const Questions = () => {
  let navigate = useNavigate();
  const [gameState, setGameState] = useState("");
  const {
    tour,
    score,
    setScore,
    totalAskedQuestion,
    setTotalAskedQuestion,
    totalCorrectQuestions,
    setTotalCorrectQuestions,
    setAllAnswers,
    questions,
    setQuestions,
  } = useContext(ScoreTourContext);

  useEffect(() => {
    for (let i = 0; i < totalTourQuestionCount; i++) {
      const question = RandomQuestionGenerator();
      if (i === totalTourQuestionCount - 1) {
        question.isLast = true;
      }
      setQuestions((prevState) => [...prevState, question]);
    }
  }, []);

  if (questions.length === 0) {
    return null;
  }

  let question = questions[totalAskedQuestion];

  const answerButtonsHandler = (answer) => {
    if (gameState !== "") {
      return;
    }

    if (answer === question.correctAnswer) {
      setGameState("success");
      setTimeout(() => {
        setTotalAskedQuestion(totalAskedQuestion + 1);
        setTotalCorrectQuestions(Number(totalCorrectQuestions) + 1);
        setGameState("");
        setScore(
          (prevState) =>
            prevState + Math.ceil(Math.sqrt(question.correctAnswer))
        );
        setAllAnswers((prevState) => [...prevState, trueAnswer]);
        if (question.isLast) {
          navigate("/final");
        }
      }, 3000);
    } else {
      setGameState("error");
      setTimeout(() => {
        setTotalAskedQuestion(totalAskedQuestion + 1);
        setGameState("");
        setAllAnswers((prevState) => [...prevState, falseAnswer]);
        if (question.isLast) {
          navigate("/final");
        }
      }, 3000);
    }
    
  };
  const cn = gameState
    ? `${questionsStyle.parentDiv} ${questionsStyle[gameState]}`
    : questionsStyle.parentDiv;

  return (
    <div className={cn}>
      <div className={questionsStyle.tableDiv}>
        <div>
          {question?.firstNumber} {"x"} {question?.secondNumber}
        </div>
        <ManFigure />
      </div>
      <div className={questionsStyle.answerBoxesDiv}>
        <div className={questionsStyle.scoreTourQuestionBar}>
          Score: {score} Tour: {tour} Questions:
          {Number(totalCorrectQuestions) + "/" + (totalAskedQuestion + 1)}
        </div>
        <div className={questionsStyle.boxOne}>
          <span onClick={() => answerButtonsHandler(question?.answers[0])}>
            {question?.answers[0]}
          </span>
          <AnswerBox
            onClick={() => answerButtonsHandler(question?.answers[0])}
          />
        </div>
        <div className={questionsStyle.boxTwo}>
          <span onClick={() => answerButtonsHandler(question?.answers[1])}>
            {question?.answers[1]}
          </span>
          <AnswerBox
            onClick={() => answerButtonsHandler(question?.answers[1])}
          />
        </div>
        <div className={questionsStyle.boxThree}>
          <span onClick={() => answerButtonsHandler(question?.answers[2])}>
            {question?.answers[2]}
          </span>
          <AnswerBox
            onClick={() => answerButtonsHandler(question?.answers[2])}
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
