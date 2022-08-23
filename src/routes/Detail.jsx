/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import {Nav} from 'react-bootstrap'
// const YellowBtn = styled.button`
//   background: ${props => props.bg};
//   color: black;
//   padding: 10px;
// `
function Detail(props) {
  const [count, setCount] = useState(0)
  const [alert, setAlert] = useState(true)
  const [tab, setTab] = useState(0)
  
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
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </div> 
  )
}
function TabContent({tab}){
    // if문 안쓰려면 
    // return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]
    
    // if문 
    if( tab === 0) {
      return <div>내용0</div>
    } else if( tab === 1){
      return <div>내용1</div>
    } else if( tab === 2){
      return  <div>내용2</div>
    }
}


export default Detail