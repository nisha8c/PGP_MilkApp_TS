import React from 'react';
import { ProductsData } from '../types/types';
import { Card, Button, Stack } from 'react-bootstrap';
import milkPackPic from '../images/milk.png';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/basketSlice';

import { Link } from 'react-router-dom';

interface IMilkProductProps {
  data: ProductsData
 };

const MilkProduct = ({data}: IMilkProductProps) => {

  const dispatch = useDispatch();
    const addProductToCart = () => {
      
        if(data) dispatch(addToBasket(data));

        toast.success(`${data?.name} added to basket`, {
          position: "bottom-center",
        });
        
    };

  return (
   <>
  
      <Stack gap={4}>
        <Card style={{ width: '18rem', margin: '10px', height: '33rem' }}>
          <Card.Img variant="top" src={milkPackPic} alt="milk-image" />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.description}
            </Card.Text>

            <Stack direction="horizontal" gap={2}>
            <Link to={`/products/${data._id}`}>
              <Button variant="primary">See More...</Button>
            </Link>
            <Button onClick={addProductToCart}>+ 1 ltr to Cart</Button>
            </Stack>
            
          </Card.Body>
          <Card.Footer className="text-muted">{data.quantity} liters available
          </Card.Footer>
        </Card>
      </Stack>
    
   </>
  )
}

export default MilkProduct