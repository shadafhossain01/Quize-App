import { configureStore } from '@reduxjs/toolkit'
import quizeSlice  from './slices/quizeSlice'

export default configureStore({
  reducer: {
    quiz:quizeSlice
  }
})