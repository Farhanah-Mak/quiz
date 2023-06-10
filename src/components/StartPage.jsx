import {useContext} from 'react'
import { QuizStateContext } from "../context/quizContext";

function StartPage() {
    const { setQuizState } = useContext(QuizStateContext)
    return (
      <>
        <button onClick={()=>setQuizState('play')} className="start_btn">Start the Quiz</button>
      </>
    );
}

export default StartPage