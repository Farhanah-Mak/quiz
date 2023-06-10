import './App.css';
import React, { useState} from "react";
import StartPage from "./components/StartPage"
import QuizPage from "./components/QuizPage";
import EndPage from "./components/EndPage"
import { QuizStateContext } from './context/quizContext'

function App() {
  const [quizState, setQuizState] = useState('start')
  const [score, setScore] = useState(0)
  return (
    <div className="app">
      <h1 className="title">QUIZ APP</h1>
      <div className="app_container">
        <QuizStateContext.Provider
          value={{ quizState, setQuizState, score, setScore }}
        >
          {quizState === "start" && <StartPage />}
          {quizState === "play" && <QuizPage />}
          {quizState === "end" && <EndPage />}
        </QuizStateContext.Provider>
      </div>
    </div>
  );
}

export default App;
