import React, { FormEvent, useState } from 'react';
import { Row, Col, Form, Stack, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CredsInfo } from '../types/types';



const CredsForm = () => {
    
    const [values, setValues ] = useState<CredsInfo>({
        email: '',
        password: '',
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Stack gap={4}>
                    <Row className='mb-4'>
                    <Col>
                        <Form.Group controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setValues({ ...values, [e.target.name]: e.target.value});
                            }}
                            required/>
                        </Form.Group>

                        <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onChange={(e) => {
                                setValues({ ...values, [e.target.name]: e.target.value});
                            }}
                            required/>
                        </Form.Group>
                    </Col>

                    <Stack direction="horizontal" gap={2} className="justify-content-end mt-4">
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                        <Link to="..">
                            <Button type="button" variant="outline-secondary">
                            Cancel
                            </Button>
                        </Link>
                        </Stack>
                    </Row>
                </Stack>

            </Form>
        </>
    )
}

export default CredsForm