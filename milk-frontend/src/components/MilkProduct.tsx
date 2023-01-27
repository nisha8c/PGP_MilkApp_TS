import React from 'react';
import { ProductsData } from '../types/types';
import { Card, Stack } from 'react-bootstrap';
import milkPackPic from '../images/milk.png';
import { Link } from 'react-router-dom';

interface IMilkProductProps {
  data: ProductsData
 };

const MilkProduct = ({data}: IMilkProductProps) => {
    
  return (
   <>
    <Stack gap={4}>
    <Link to={`/products/${data._id}`} className="text-decoration-none">
      <Card style={{ width: '18rem', margin: '10px', height: '26rem' }}>
        <Card.Img variant="top" src={milkPackPic} alt="milk-image" className='pt-1' />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">{data.quantity} liters available
        </Card.Footer>
      </Card></Link>
    </Stack>
   </>
  )
}

export default MilkProduct