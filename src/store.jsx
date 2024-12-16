import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/coutnerSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})