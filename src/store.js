import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'

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
    IncreaseCounter(state, action){
      const findNum = state.findIndex((array)=> array.id === action.payload )
      state[findNum].count++
    }
  }
})

export const {IncreaseCounter} = cart.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
})
