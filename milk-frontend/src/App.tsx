import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import './App.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ProductsData } from './types/types';

import Home from './components/Home';
import ViewDetails from './components/ViewDetails';
import ScrollToTop from "react-scroll-to-top";
import { Toaster } from "react-hot-toast";
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar/Navbar';
import Confirmation from './components/Confirmation';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';

function App() {
  const [milks, setMilks] = useState<ProductsData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch (`http://localhost:5002/api/products`);
      const data = await response.json();
      setMilks(data);
    };

    getData();
    
  }, []);

  return (
    <div className='flex'>
      <Basket />
      <Toaster />
      <ScrollToTop smooth={true} width='25' height='25' top={15}/>
      <Navbar />
      <Container className='my-4'>
        <Routes>
          <Route path="/" element={<Home data={milks}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home data={milks}/>} />
          <Route path="/products/:id" element={<ViewDetails />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/confirm" element={<Confirmation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </Container>
      
    </div>
  );
}

export default App;
