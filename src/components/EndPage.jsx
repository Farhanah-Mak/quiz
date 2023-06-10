import React, {useContext} from 'react'
import { QuizStateContext } from "../context/quizContext";
import { questions } from '../questions';

function EndPage() {
  const { score ,setScore, setQuizState} = useContext(QuizStateContext);
  function restartQuiz() {
    setScore(0);
    setQuizState("start");
  }
  return (
    <div className='end_page'>
      Your score is <span className='score'>{score}/ {questions.length}</span>
      <button className='restart_btn' onClick={restartQuiz}>Play again</button>
    </div>
  );
}

export default EndPage