import { Question } from "@/app/types/Question.type"

type Props = {
  questions: Question[]
  answers: number[]
}

export const ShowResult = ({ questions, answers }: Props) => {

  return (
    <div>
      {questions.map((item, key) => (
        <div key={key} className="mb-3">

          <div className="font-bold">{key + 1}. {item.question}</div>

          <div >
            {item.answear !== null && item.answear === answers[key] &&
              <span className="font-bold text-1xl bg-green-100 border bg-green-300 rounded-md mb-4">(Acertou!)</span>
            }

            {item.answear !== null && item.answear !== answers[key] &&
              <span className="font-bold text-1xl bg-red-100 border bg-red-300 rounded-md mb-4">(Errou!)</span>
            } - {item.options[item.answear]}
          </div>
        </div>
      ))}
    </div>
  )
}