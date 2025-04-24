import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { submitAnswer, resetQuiz  } from './slices/quizeSlice'

const Quize = () => {
    const dispatch = useDispatch()
    const score = useSelector(state => state.quiz.score)
    const question = useSelector(state => state.quiz.question)
    const questionIndex = useSelector(state => state.quiz.currentQuestionIndex)
    const quizeOver=useSelector(state=>state.quiz.quizeOver)
    const totalQuestion=useSelector(state=>state.quiz.question.length)

    return (
        <div className='quiz-box'>
          <div className='flex'>
          <h3> Question: {questionIndex+1} / {totalQuestion}</h3>
          <h3>Quiz Score: {score}</h3>
          </div>
          {quizeOver ? (
            <>
              <h4>Quiz Over!</h4>
              <button onClick={() => dispatch(resetQuiz())}>Restart Quiz</button>
            </>
          ) : (
            <>
              <h4>{question[questionIndex].question}</h4>
              <div className='grid'>
              {
                question[questionIndex].options.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => dispatch(submitAnswer(item))}
                  >
                    {idx +1} )  {item}
                  </button>
                ))
              }
              </div>
            </>
          )}
        </div>
      )
    }
    
    export default Quize