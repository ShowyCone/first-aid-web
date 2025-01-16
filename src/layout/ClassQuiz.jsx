import React, { useState } from 'react'
import classesData from '../data/classesInfo.json'

export default function ClassQuiz({ classId }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null) // Estado para retroalimentación
  const classInfo = classesData.classes[classId].quiz
  const correctAnswer = classesData.classes[classId].quiz.correctAnswer

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer)
    const isAnswerCorrect = answer === correctAnswer
    setIsCorrect(isAnswerCorrect)

    // Si la respuesta es incorrecta, reinicia después de 1s
    if (!isAnswerCorrect) {
      setTimeout(() => {
        setSelectedAnswer(null)
        setIsCorrect(null)
      }, 1000)
    }
  }

  return (
    <div className='flex flex-col items-center p-5 gap-6 bg-blue-50 rounded-md shadow-md'>
      <h4 className='font-bold text-xl text-blue-800'>{classInfo.question}</h4>
      {classInfo.image && (
        <img
          className='object-cover h-48 md:h-36 rounded-lg shadow-sm'
          src={classInfo.image}
          alt='Imagen relacionada con la pregunta'
        />
      )}
      {classInfo.optionsQuestion && (
        <ul className='overflow-y-auto md:max-h-44 max-h-[14.2rem]'>
          {classInfo.optionsQuestion.map((info, index) => (
            <li key={index} className='mb-3 text-gray-700'>
              {info}
            </li>
          ))}
        </ul>
      )}
      <div className='flex flex-row gap-4 md:gap-6'>
        {classInfo.options.map((option, index) => (
          <button
            key={index}
            className={`text-white rounded-lg px-6 py-2 font-medium text-lg 
              ${
                selectedAnswer === option
                  ? isCorrect
                    ? 'bg-green-700 hover:bg-green-600'
                    : 'bg-red-700 hover:bg-red-600'
                  : 'bg-blue-800 hover:bg-blue-700'
              }`}
            onClick={() => handleAnswerClick(option)}
            disabled={selectedAnswer !== null && isCorrect !== null} // Desactiva botones tras responder
          >
            {option}
          </button>
        ))}
      </div>
      {selectedAnswer !== null && (
        <div
          className={`mt-4 px-6 py-3 rounded-md text-center font-medium text-lg 
            ${
              isCorrect
                ? 'text-green-800 bg-green-100'
                : 'text-red-800 bg-red-100'
            }`}
        >
          {isCorrect
            ? '¡Correcto! 🎉 Buen trabajo.'
            : 'Incorrecto 😞 Intenta de nuevo.'}
        </div>
      )}
    </div>
  )
}
