import { createContext, useState } from "react";

export const ScoreTourContext = createContext();

export const ScoreTourProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [tour, setTour] = useState(0);
  const [totalCorrectQuestions, setTotalCorrectQuestions] = useState(0);
  const [totalAskedQuestion, setTotalAskedQuestion] = useState(0);
  const [allAnswers, setAllAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);

  return (
    <ScoreTourContext.Provider
      value={{
        score,
        tour,
        totalCorrectQuestions,
        totalAskedQuestion,
        setScore,
        setTour,
        setTotalCorrectQuestions,
        setTotalAskedQuestion,
        setAllAnswers,
        allAnswers,
        questions,
        setQuestions,
      }}
    >
      {children}
    </ScoreTourContext.Provider>
  );
};
