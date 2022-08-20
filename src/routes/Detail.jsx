/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useParams } from 'react-router-dom'

function Detail(props) {
  const {id} = useParams();
  const findProduct = props.shoes.find((element) =>
      element.id == id
  )
  return (
    <div className="container">
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