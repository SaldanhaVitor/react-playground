import { Question } from "@/app/types/Question.type";

export const Questions: Question[] = [
  {
    question: 'Qual é o ingrediente secreto?',
    options: [
      'Farinha',
      'Corante',
      'Pimenta',
      'Açúcar'
    ],
    answear: 2
  },
  {
    question: 'Qual é o melhor método para cozinhar?',
    options: [
      'Fogão',
      'Forno',
      'Microondas',
      'Lança-chamas'
    ],
    answear: 3
  },
  {
    question: 'Quantos ingredientes vão no bolo?',
    options: [
      '7',
      '4',
      '5',
      '8'
    ],
    answear: 0
  }
]