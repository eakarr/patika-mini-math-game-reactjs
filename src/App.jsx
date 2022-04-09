import React from "react";
import PageRouter from "./router/PageRouter";
import "../src/App.css";
import { ScoreTourProvider } from "./contexts/ScoreTourContext";

const App = () => {
  return (
    <>
      <ScoreTourProvider>
        <PageRouter />
      </ScoreTourProvider>
    </>
  );
};

export default App;
