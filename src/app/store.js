import { configureStore } from '@reduxjs/toolkit'
import database from './features/counter/countreSlice'
export const store = configureStore({
  reducer: {
    database
  },
})

export default store