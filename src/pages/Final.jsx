import React, { useEffect } from "react";
import FinalLine from "../svgs/FinalLine";
import FinalAllQuestionsLine from "../svgs/FinalAllQuestionsLine";
import RestartButton from "../svgs/RestartButton";
import { Link } from "react-router-dom";
import { ScoreTourContext } from "../contexts/ScoreTourContext";
import { useContext } from "react";
import finalStyle from "../styles/FinalPage.module.css";

const Final = () => {
  const {
    score,
    totalAskedQuestion,
    totalCorrectQuestions,
    allAnswers,
    questions,
  } = useContext(ScoreTourContext);

  useEffect(() => {
    saveScore();
    saveTotalAskedQuestions();
    saveTotalCorrectQuestions();
    saveAllPlayedQuestionsCount();
  }, []);

  const saveScore = () => {
    localStorage.setItem("score", score);
  };
  const saveTotalAskedQuestions = () => {
    localStorage.setItem("totalQuestions", totalAskedQuestion);
  };
  const saveTotalCorrectQuestions = () => {
    localStorage.setItem("totalCorrectQuestions", totalCorrectQuestions);
  };

  const saveAllPlayedQuestionsCount = () => {
    const count = Number(localStorage.getItem("allPlayedQuestionsCount"))
    if(count) {
      localStorage.setItem("allPlayedQuestionsCount", count + 10)
    } else {
      localStorage.setItem("allPlayedQuestionsCount", 10)
    }
  }

  return (
    <div className={finalStyle.parentDiv}>
      <div className={finalStyle.finalStats}>
        <h1 className={finalStyle.finalHeader}>Final</h1>
        <FinalLine />
        <div className={finalStyle.points}>
          <span>Score: {score}</span>
          <span>Questions: {totalAskedQuestion}</span>
          <span>Correct Answers: {totalCorrectQuestions}</span>
        </div>
        <span className={finalStyle.restartButton}>
          <Link to="/">
            <RestartButton />
          </Link>
        </span>
      </div>
      <div className={finalStyle.questionsAndAnswers}>
        <div>
          <h1 className={finalStyle.allQuestionsHeader}>All Questions</h1>
          <FinalAllQuestionsLine />
          {questions.map((question, index) => (
            <div key={index} className={finalStyle.allQuestions}>
              {question.firstNumber} {"x"} {question.secondNumber} {"= "}
              {question.correctAnswer}
              {allAnswers[index] === 1 ? <span>✓</span> : <span>x</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Final;
