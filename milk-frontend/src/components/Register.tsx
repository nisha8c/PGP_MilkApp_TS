import React from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import CredsForm from './CredsForm';

const Register = () => {


  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1 className='mt-20'>Register Here</h1>
        </Col>
      </Row>

      <CredsForm />

      <Row className="align-items-center mb-4">
        <Col>
          <div>Already have an account? 
            <Link to="/login"> Login</Link>
          </div>
        </Col>
      </Row>
        
    </>
  )
}

export default Register