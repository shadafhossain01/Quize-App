import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { submitAnswer, resetQuiz  } from './slices/quizeSlice'

const Quize = () => {
    const dispatch = useDispatch()
    const score = useSelector(state => state.quiz.score)
    const question = useSelector(state => state.quiz.question)
    const questionIndex = useSelector(state => state.quiz.currentQuestionIndex)
    const quizeOver=useSelector(state=>state.quiz.quizeOver)
 
    return (
        <div>
          <h3>Quiz Score: {score}</h3>
    
          {quizeOver ? (
            <>
              <h4>Quiz Over!</h4>
              <button onClick={() => dispatch(resetQuiz())}>Restart Quiz</button>
            </>
          ) : (
            <>
              <h4>{question[questionIndex].question}</h4>
              {
                question[questionIndex].options.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => dispatch(submitAnswer(item))}
                  >
                    {item}
                  </button>
                ))
              }
            </>
          )}
        </div>
      )
    }
    
    export default Quize