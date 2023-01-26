import React from 'react';
import { ProductsData } from '../types/types';
import toast from "react-hot-toast";
import { removeFromBasket } from "../redux/basketSlice";
import { useDispatch } from "react-redux";
import milkPackPic from '../images/milk.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

interface Props {
    items: ProductsData[];
    id: string;
}

const CheckoutProduct = ({ id, items }: Props) => {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));

    toast.error(`${items[0].name} removed from basket`, {
      position: "bottom-center",
    });
  };

  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
      <div className="relative h-44 w-44">
      <img src={milkPackPic} alt=""/>
      </div>

      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items[0].name}</h4>
            <p className="flex items-end gap-x-1 font-semibold">
              Quantity: {items.length}
            </p>
          </div>

          <Link to={`/products/${items[0]._id}`}>
              <Button variant="link">Show product details.</Button>
          </Link>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <h4 className="text-xl font-semibold lg:text-2xl">
            SEK {
              // formatAmountForStripe(items.reduce((total, item) => total + item.price, 0), 'usd')
              items.reduce((total, item) => total + item.price, 0)
            }
          </h4>
          <button
            onClick={removeItemFromBasket}
            className="text-blue-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct