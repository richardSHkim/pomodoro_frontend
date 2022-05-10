import { configureStore } from '@reduxjs/toolkit'
import scheduleReducer from './features/schedule/scheduleSlice'
import pomodoroReducer from './features/pomodoro/pomodoroSlice'

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    pomodoro: pomodoroReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch