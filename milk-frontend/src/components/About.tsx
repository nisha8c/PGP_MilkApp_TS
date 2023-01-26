import React from 'react';
import { Row, Col, Stack, Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();
    const handleGoBack = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate("...")
      }

  return (
    <>
        <Stack>
            <Row className="align-items-center mb-4">
            <Col>
                <h1 className='mt-20'>About Dairy App</h1>
            </Col>
            </Row>
        </Stack>

        <Stack>
        <Card className="text-center">
            <Card.Header>Tech Stack Involved</Card.Header>
            <Card.Body>
                <Card.Title>BackEnd</Card.Title>
                <Card.Text>
                    <div>MongoDB</div>
                    <div>Express JS</div>
                    <div>Rest API</div>
                    <div>TypeScript</div>
                </Card.Text>
            </Card.Body>

            <Card.Body>
                <Card.Title>FrontEnd</Card.Title>
                <Card.Text>
                    <div>React JS</div>
                    <div>Tailwind CSS</div>
                    <div>SCSS</div>
                    <div>TypeScript</div>
                    <div>Redux</div>
                    <div>React Bootstrap</div>
                </Card.Text>
                <div className="px-5">
                <Button variant="outline-primary" onClick={handleGoBack}>Continue Shopping... </Button>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted">Thank you !</Card.Footer>
            </Card>
        </Stack>
    </>
  )
}

export default About