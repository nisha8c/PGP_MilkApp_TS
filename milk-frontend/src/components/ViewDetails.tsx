import React, { useEffect, useState, ChangeEvent } from 'react';
import { ProductsData } from '../types/types';
import { useParams } from 'react-router-dom';
import { Card, Button, Stack } from 'react-bootstrap';
import milkPackPic from '../images/milk.png';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/basketSlice';


const ViewDetails = () => {

    const { id } = useParams();
    const [milk, setMilk] = useState<ProductsData>();
    const navigate = useNavigate();
    const [rangeValue, setRangeValue] = useState<number>(1);

    useEffect(() => {
        const getData = async () => {
        const response = await fetch (`http://localhost:5002/api/products/${id}`);
        const data = await response.json();
        setMilk(data);
    };
    getData();
    });

    const handleGoBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("...")
    }

    const dispatch = useDispatch();
    const addProductToCart = () => {
      
        if(milk) dispatch(addToBasket(milk));

        toast.success(`${milk?.name} added to basket`, {
          position: "bottom-center",
        });
        
    };

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => setRangeValue(Number(event.currentTarget.value));

    return (
        <>
            <Button variant="outline-primary" onClick={handleGoBack} className='mt-20'>Go Back</Button>
            <Stack gap={4}>
                <Card style={{ width: '18rem', margin: '10px', height: '45rem' }}>
                    <Card.Header><Card.Title>{milk?.name}</Card.Title></Card.Header>

                    <Card.Img variant="top" src={milkPackPic} alt="milk-image" className='pt-1' />

                    <Card.Body>
                        <Card.Text>
                            {milk?.description}
                        </Card.Text>
                       
                        <Card.Text>
                            {milk?.category}
                        </Card.Text>

                        <Card.Text>
                           SEK {milk?.price}
                        </Card.Text>

                        <Card.Text>
                        <input
                            type="range"
                            className="w-full h-6 p-0 focus:outline-none focus:ring-0 accent-[#00fc07]"
                            min="range"
                            max={milk?.quantity}
                            step="1"
                            defaultValue={rangeValue}
                            id="rangeSelect"
                            onChange={e => handleAmountChange(e)}
                            data-testid="rangeSelect"
                            />
                            <p className="text-base bg-white px-4 py-2 rounded w-24 text-center"> {rangeValue} liter</p>
                            </Card.Text>
                        <Button onClick={addProductToCart}>Add to Cart</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{milk?.quantity} liters in stock
                    </Card.Footer>
                </Card>
            </Stack>
        </>
    )
}

export default ViewDetails