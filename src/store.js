import { configureStore, createSlice } from '@reduxjs/toolkit'

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

const stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

const cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
  }
})

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 
export const { ChangeName, IncreaseAge } = user.actions