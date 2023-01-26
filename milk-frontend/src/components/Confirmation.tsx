import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Confirmation = () => {

    const navigate = useNavigate();

    const handleGoBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("...")
    }

  return (
    <Row>
        <Col>
        <main className="mx-auto max-w-5xl pb-24 mt-20">
            <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
                Thank you
            </h1>
            <Button variant="outline-primary" onClick={handleGoBack}>Continue Shopping... </Button>
        </main>
        </Col>
    </Row>
  )
}

export default Confirmation