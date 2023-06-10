import React, { useState, useContext } from "react";
import { questions } from '../questions'
import { QuizStateContext } from "../context/quizContext";

function QuizPage() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState('')
    const {setQuizState, score, setScore } = useContext(QuizStateContext);

    function chooseOption(option){
        setSelectedOption(option)
    }
    function finishQuiz() {
      if (selectedOption === questions[currentIndex].answer) {
        setScore(score + 1);
      }
      setQuizState("end");
    }
    function nextQuestion() {
         if (!selectedOption) {
           alert("You have to choose an option!");
           return;
         }
        if (selectedOption === questions[currentIndex].answer) {
            setScore(score + 1)
        }
        setCurrentIndex(currentIndex + 1);
    }

    return (
      <>
        <div className="quiz_page">
             <h2 className="question">{questions[currentIndex].prompt}</h2>
          <button onClick={() => chooseOption("optionA")}>
            {questions[currentIndex].optionA}
          </button>
          <button onClick={() => chooseOption("optionB")}>
            {questions[currentIndex].optionB}
          </button>
          <button onClick={() => chooseOption("optionC")}>
            {questions[currentIndex].optionC}
          </button>
          <button onClick={() => chooseOption("optionD")}>
            {questions[currentIndex].optionD}
                </button>
                {currentIndex === questions.length - 1 ? (
                    <button onClick={finishQuiz} className="finish_btn">Finish</button>
                ) : (
                    <button onClick={nextQuestion} className='next_question_btn'>Next Question</button>
                )}
        </div>
      </>
    );
}

export default QuizPage