import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface PomodoroState {
  startTime: number,
  elapsedTime: number,
  targetTime: number,
  isWorking: boolean,
  useAlarm: boolean,
}

// Define the initial state using that type
const initialState: PomodoroState = {
  startTime: 0,
  elapsedTime: 0,
  targetTime: 0,
  isWorking: false,
  useAlarm: true,
}

export const pomodoroSlice = createSlice({
  name: 'pomodoro',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setStartTime: (state, action: PayloadAction<number>) => {
      state.startTime = action.payload
    },

    setElapsedTime: (state, action: PayloadAction<number>) => {
      state.elapsedTime = action.payload
    },

    setTargetTime: (state, action: PayloadAction<number>) => {
      state.targetTime = action.payload
    },

    setIsWorking: (state, action: PayloadAction<boolean>) => {
      state.isWorking = action.payload
    },

    setUseAlarm:  (state, action: PayloadAction<boolean>) => {
      state.useAlarm = action.payload
    },
  }
})

export const { setStartTime, setElapsedTime, setTargetTime, setIsWorking, setUseAlarm } = pomodoroSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectSchedule = (state: RootState) => state.schedule.schedule

export default pomodoroSlice.reducer