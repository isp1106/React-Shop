import { createSlice } from "@reduxjs/toolkit"

const user = createSlice({
  name : 'user',
  initialState : {name : 'kim', age : 20},
  reducers : {
    ChangeName(state){
      state.name = 'park'
    },
    IncreaseAge(state, action){
      state.age += action.payload
    }
  }
})

export const { ChangeName, IncreaseAge } = user.actions

export default user