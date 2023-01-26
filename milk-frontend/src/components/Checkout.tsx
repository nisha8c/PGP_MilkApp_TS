import React, { useEffect, useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import { useSelector } from "react-redux";
import { ProductsData } from "../types/types";
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: ProductsData[] }
  );
  
  

  const handleGoBack = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("...")
  }

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: ProductsData[] });

    setGroupedItemsInBasket(groupedItems);
  }, [items]);


  return(
    <div>
      <Row>
        <Col>
        <main className="mx-auto max-w-5xl pb-24 mt-20">
          <div className="px-5">
            <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
              {items.length > 0 ? "Review your bag." : "Your bag is empty."}
            </h1>
            <p className="my-4">Free delivery and free returns.</p>
          </div>

          <div className="px-5 mb-20">
          <Button variant="outline-primary" onClick={handleGoBack}>Continue Shopping... </Button>
          </div>
          
          {items.length > 0 && (
            <div className="mx-5 md:mx-8">
              {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <CheckoutProduct key={key} items={items} id={key} />
              ))}

              <div className="my-12 mt-6 ml-auto max-w-3xl">
                <div className="divide-y divide-gray-300">
                  <div className="pb-4">
                    <div className="flex justify-between">
                      <p>Subtotal</p>
                      <p>
                      SEK {
                        // formatAmountForStripe(basketTotal, 'usd')
                        basketTotal
                        }
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>Shipping</p>
                      <p>FREE</p>
                    </div>
                    
                  </div>

                  <div className="flex justify-between pt-4 text-xl font-semibold">
                    <h4>Total</h4>
                    <h4>
                    SEK {
                        // formatAmountForStripe(basketTotal, 'usd')
                        basketTotal
                      }
                    </h4>
                  </div>
                </div>

                <div className="my-14 space-y-4">
                  <h4 className="text-xl font-semibold">
                    Confirm your oder...
                  </h4>
                  <Button variant="link" onClick={handleGoBack}>Or Continue Shopping... </Button>
                  <div className="flex flex-col gap-4 md:flex-row">
                  
                    <div className="flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2">
                      <h4 className="mb-4 flex flex-col text-xl font-semibold">
                        Pay in full
                        <span>
                        SEK {
                          basketTotal
                          }
                        </span>
                      </h4>

                      <Link to={`/confirm`}>
                        <Button variant="primary">Checkout</Button>
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
        </Col>
      </Row>
    </div>
  );
}

export default Checkout;