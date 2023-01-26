import React, { useState } from "react";
import { Row, Col, Button, Container, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProductsData } from '../types/types';
import toast from 'react-hot-toast';
import MilkProduct from "./MilkProduct";


interface IHomeProps {
  data: ProductsData[]
 };


const Home = ({data}: IHomeProps) => {

  const [filter, setFilter] = useState(data);
  const [phrase,setPhrase] = useState('');

  const filterProduct = (cat: string) => {
    const updatedList = () => data.filter((milk) => milk.category === cat);
    setFilter(updatedList);
  }; 

  const handleFilter = (item: string) => {

    setTimeout(() => {

      if (item === 'All') {
        setFilter(data);
      } else {
        filterProduct(item);
      }
    }, 100);

    toast.success(`${item} is selected.`, {
      position: "bottom-center",
    });
};

let productInfo;
  if (phrase) {
    productInfo = filter.filter(p => p.name.toLowerCase().includes(phrase));
  } else {
    productInfo = filter;
  }


  return (
    <Container>
      <Row className="align-items-center mb-4">
        <Col>
          <h1 className="mt-20">The Dairy</h1>
        </Col>
      </Row>

      <Row>
      <div className='search-container'>
        <input value={phrase} onChange={e => setPhrase(e.target.value)} type="text" placeholder="Search by product name..." className="bg-gray-200 w-full py-2 px-4 rounded-xl mb-8"/>
      </div>
      </Row>

      <Stack gap={4}>
        <Col>

        {['Cashew milk', 'Pea milk', 'Walnut milk', 'Rice milk', 'Coconut milk', 'Hemp milk', 'Almond milk', 'Oat milk', 'Macadamia milk', 'All'].map((item, index) => (
          <>
          <Button variant="outline-primary" onClick={() => handleFilter(item)} key={index}>{item}</Button> {' '}
          </>
        ))}
        </Col>
      </Stack>

      
      <Container className='my-4'>
        <Row xs={1} md={4} className='g-4'>
        {
            productInfo.map((milk, index) => (
              <MilkProduct data={milk} key={index}/>
            ))
        }
        </Row>
      </Container>
    </Container>
  )
}

export default Home