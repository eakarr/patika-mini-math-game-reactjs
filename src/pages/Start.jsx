import React, { useEffect, useState } from "react";
import startPageStyles from "../styles/StartPage.module.css";
import MathematicsGameLine from "../svgs/MathematicsGameLine";
import StartButton from "../svgs/StartButton";
import { ScoreTourContext } from "../contexts/ScoreTourContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const {
    setTour,
    setQuestions,
    setAllAnswers,
    setTotalCorrectQuestions,
    setTotalAskedQuestion,
  } = useContext(ScoreTourContext);
  const [allPlayedQuestions, setAllPlayedQuestions] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setScore(Number(localStorage.getItem("score")));
    setCorrectAnswers(Number(localStorage.getItem("totalCorrectQuestions")));
    setAllPlayedQuestions(
      Number(localStorage.getItem("allPlayedQuestionsCount"))
    );
    setTour((prevState) => prevState + 1);
  }, []);

  const startGame = () => {
    setQuestions([]);
    setAllAnswers([]);
    setTotalCorrectQuestions([]);
    setTotalAskedQuestion(0);
    navigate("/questions");
  };

  return (
    <div className={startPageStyles.startDiv}>
      <h1 className={startPageStyles.startHeader}>Mathematics Game</h1>
      <MathematicsGameLine />
      <div className={startPageStyles.points}>
        <span>Total Point: {score}</span>
        <span>Total Questions: {allPlayedQuestions}</span>
        <span>Correct Answers: {correctAnswers}</span>
      </div>
      <span onClick={startGame} className={startPageStyles.startButton}>
        <StartButton />
      </span>
    </div>
  );
};

export default Start;
