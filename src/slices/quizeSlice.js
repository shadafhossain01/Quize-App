import { createSlice } from '@reduxjs/toolkit'
import { question } from '../question'

export const quizeSlice = createSlice({
  name: 'quiz',
  initialState: {
    question: question,
    currentQuestionIndex: 0,
    score: 0,
    quizeOver: false,
  },
  reducers: {
    submitAnswer: (state, action) => {
      if (state.question[state.currentQuestionIndex].correct === action.payload) {
        state.score += 5;
      }
      if (state.currentQuestionIndex === state.question.length - 1) {
        state.quizeOver = true;
      } else {
        state.currentQuestionIndex++;
      }
    },
    resetQuiz: (state) => {
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.quizeOver = false;
    }
  }
})

export const { submitAnswer,resetQuiz  } = quizeSlice.actions;
export default quizeSlice.reducer;
