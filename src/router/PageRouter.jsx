import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../pages/Start";
import Questions from "../pages/Questions";
import Final from "../pages/Final";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  );
};

export default PageRouter;
