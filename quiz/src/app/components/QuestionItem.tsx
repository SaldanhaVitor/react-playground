import { Question } from "@/app/types/Question.type"
import { useState } from "react";

type Props = {
  question: Question,
  count: number,
  onAnswer: (answer: number) => void;
}

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const checkQuestion = (key: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(key);

      setTimeout(() => {
        onAnswer(key);
        setSelectedAnswer(null)
      }, 1000);
    }
  }

  return (
    <div>

      <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>

      <div className="">{question.options.map((option, key) => (
        <div key={key} onClick={() => checkQuestion(key)}
          className={`border px-3 py-2 rounded-md text-lg mb-4 bg-blue-100 border-blue-300
          
          ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}

          ${selectedAnswer !== null && selectedAnswer === question.answear && selectedAnswer === key && 'bg-green-100 border bg-green-300'}

          ${selectedAnswer !== null && selectedAnswer !== question.answear && selectedAnswer === key && 'bg-red-100 border bg-red-300'}
          
          `}
        >{option}
        </div>
      )
      )}
      </div>
    </div>
  )
}