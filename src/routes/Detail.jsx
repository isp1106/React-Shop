/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { Nav } from 'react-bootstrap'
import { Context1 } from './../App'
import { addItem } from './../store'
import { useDispatch } from 'react-redux'
// const YellowBtn = styled.button`
//   background: ${props => props.bg};
//   color: black;
//   padding: 10px;
// `
function Detail(props) {
  let {stuff, shoes} = useContext(Context1)

  const [count, setCount] = useState(0)
  const [alert, setAlert] = useState(true)
  const [tab, setTab] = useState(0)
  const [open, setOpen] = useState('')
  const dispatch = useDispatch()
  useEffect(()=>{

    const timerDetail = setTimeout(()=> {
      setOpen('end')
    }, 100)
    const timer = setTimeout(() => {setAlert(false)}, 2000);
    return ()=>{
      clearTimeout(timerDetail);
      clearTimeout(timer);
      setOpen('')
    }
  }, [])
  
  const {id} = useParams();
  const findProduct = props.shoes.find((element) =>
      element.id == id
  )
  return (
    <div className={`container start ${open}`}>
        {
        alert === true 
        ? <div className='alert alert-warning'>
          2초이내 구매시 할인
          </div>
        : null
        }
        {stuff}
      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${findProduct.id+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}</p>
          <button className="btn btn-danger" onClick={()=>{
            dispatch(addItem({id : 1, name : 'Red Knit', count : 1}))
          }}>주문하기</button>
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
    let {stuff, shoes} = useContext(Context1)
    const [fade, setFade] = useState('');

    useEffect(()=>{
      const fadeTimer = setTimeout(() => {
        setFade('end')
      }, 100);
      return ()=>{
        clearTimeout(fadeTimer)
        setFade('')
      }
    }, [tab])

    // if문 안쓰려면 
    return (
      <div className={`start ${fade}`}>
        {[<div>{stuff}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
      </div>
    )
    // if문 
    // if( tab === 0) {
    //   return <div>내용0</div>
    // } else if( tab === 1){
    //   return <div>내용1</div>
    // } else if( tab === 2){
    //   return  <div>내용2</div>
    // }
}


export default Detail