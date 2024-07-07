import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import products from '../../data/products'

const ProductHeader = () => {
  return (
    <header className='py-4'>
      <Row >
        <Col md="4">
          <h2>Products</h2>
        </Col>
        <Col md="8">
          <InputGroup className="mb-3">

            <Form.Control
              placeholder="Searching products"
            />
            <InputGroup.Text id="basic-addon2">Price sort</InputGroup.Text>
            <InputGroup.Text id="basic-addon2">
              <Form.Select >
                {products.map((product) => <option key={product} value={product}>{product}</option>)}
              </Form.Select>
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
    </header>
  )
}

export default ProductHeader