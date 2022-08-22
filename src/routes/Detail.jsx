/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const YellowBtn = styled.button`
  background: ${props => props.bg};
  color: black;
  padding: 10px;
`

function Detail(props) {
  const [count, setCount] = useState(0)
  const [alert, setAlert] = useState(true)
  
  useEffect(()=>{

    let timer = setTimeout(() => {setAlert(false)}, 2000);
    return ()=>{
      clearTimeout(timer);
    }
  }, [])
  
  const {id} = useParams();
  const findProduct = props.shoes.find((element) =>
      element.id == id
  )
  return (
    <div className="container">
        {
        alert === true 
        ? <div className='alert alert-warning'>
          2초이내 구매시 할인
          </div>
        : null
        }
      {count}
      <button onClick={()=>{ setCount(count+1) }}>버튼</button>
      <YellowBtn bg="blue">버튼</YellowBtn>
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${findProduct.id+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div> 
  )
}

export default Detail