/* eslint-disable jsx-a11y/alt-text */
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import bg from "./img/bg.png";
import shoeData from "./data";
import { useState } from "react";
import Card from "./components/Card";
import Event from "./routes/Event";
import Detail from "./routes/Detail";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  const [shoes] = useState(shoeData);
  const navigate = useNavigate();
  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
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
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='*' element={<>없는페이지임</>} />

        <Route path="/event" element={<Event />}>
          <Route path="" element={<>첫 주문시 양배추즙 서비스</>}></Route>
          <Route path="two" element={<>생일기념 쿠폰받기</>}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
