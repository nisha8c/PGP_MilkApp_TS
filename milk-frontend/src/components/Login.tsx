import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CredsForm from './CredsForm';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
        <Row className="align-items-center mb-4">
          <Col>
            <h1 className='mt-20'>Login</h1>
          </Col>
        </Row>

        <CredsForm />

        <Row className="align-items-center mb-4">
          <Col>
            <div>New User? 
              <Link to="/register"> Register</Link>
            </div>
          </Col>
        </Row>
    </>
  )
}

export default Login