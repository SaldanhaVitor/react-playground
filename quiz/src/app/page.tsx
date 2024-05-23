"use client"

import { QuestionItem } from "./components/QuestionItem";
import { ShowResult } from "./components/ShowResult";
import { Questions } from "./data/Questions";
import { useState } from "react";

export default function Home() {

  const title = 'Quiz de culinária';

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState<boolean>(false)


  const loadNextQuestion = () => {
    if (Questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer])
    loadNextQuestion()
  }

  const handleRestartQuiz = () => {
    setAnswers([])
    setCurrentQuestion(0)
    setShowResult(false)
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl roudend-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>

        {!showResult &&
          <div className="p-5">
            <QuestionItem
              question={Questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          </div>
        }

        {showResult &&
          <div className="p-5">
            <ShowResult questions={Questions} answers={answers}
            />
          </div>
        }

        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${Questions.length} pergunta${Questions.length > 1 ? 's' : ''}`
          }
          {showResult &&
            <button onClick={handleRestartQuiz} className="px-3 py-3 rounded-md bg-blue-800 text-white hover:opacity-60">Reiniciar Quiz</button>
          }
        </div>

      </div>
    </ div>
  )
}

