import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import bg from "./img/bg.png";
import shoeData from "./data";
import { createContext, useState } from "react";
import Card from "./components/Card";
import Event from "./routes/Event";
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from 'axios';
export const Context1 = createContext()

function App() {
  const [shoes, setShoes] = useState(shoeData);
  const [more, setMore] = useState('')
  const navigate = useNavigate();
  const [stuff] = useState([10, 11, 12])
  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i} key="i"></Card>;
                  })}
                </div>
              </div>
              <button onClick={()=> {
                axios.get('https://codingapple1.github.io/shop/data2.json').then((res)=> {
                  let copy = [...shoes, ...res.data];
                  console.log(copy);
                  setShoes(copy);
                })
                .catch(()=>{
                  console.log('error')
                })
              }}>더 보기</button>
            </>
          }
        />
        <Route path='/detail/:id' element={
          <Context1.Provider value={{ stuff, shoes }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />
        <Route path='*' element={<>없는페이지임</>} />

        <Route path="/event" element={<Event />}>
          <Route path="" element={<>첫 주문시 양배추즙 서비스</>}></Route>
          <Route path="two" element={<>생일기념 쿠폰받기</>}></Route>
        </Route>

        <Route path="/cart" element={ <Cart /> } />
      </Routes>
    </div>
  );
}

export default App;
