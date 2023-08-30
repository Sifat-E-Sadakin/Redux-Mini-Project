import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../Features/TaskSlice'
export default configureStore({
  reducer: {
    addTask : taskReducer
  }
})