import React from 'react'
import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeName, IncreaseAge } from './../store/userSlice'
import { IncreaseCounter } from './../store'
function Cart() {
  const state = useSelector((state)=> state )
  const dispatch = useDispatch()
  return (
    <div>
      {state.user.name} {state.user.age}의 장바구니
      <button onClick={()=>{
        dispatch(ChangeName())
      }}>이름 변경 버튼</button>
      <button onClick={()=>{
        dispatch(IncreaseAge(100))
      }}>나이 증가 버튼</button>
        <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
              {
                state.cart.map((array, i)=>
                <tr key={i}>
                  <td>{state.cart[i].id}</td>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].count}</td>
                  <td><button onClick={()=>{
                    dispatch(IncreaseCounter(state.cart[i].id))
                  }}>변경</button></td>
                </tr>
                )
              }
            </tbody>
            </Table> 
    </div>
  )
}

export default Cart