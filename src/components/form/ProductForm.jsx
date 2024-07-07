import React, { memo } from 'react'
import { Button, Form } from 'react-bootstrap';
import products from '../../data/products';

import PropTypes from "prop-types";

const ProductForm = ({validated,handleSubmit,product:{name,price,category,quantity,desc,},handleProduct,selected,}) => {

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
        onChange={handleProduct}
        value={name}
          required
          type="text"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
        onChange={handleProduct}
        value={price}
          required
          type="number"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select value={category} onChange={handleProduct}>
           {products.map((product)=> <option key={product} value={product}>{product}</option>)}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
        onChange={handleProduct}
        value={quantity}
          required
          type="number"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="desc">
        <Form.Label>Description</Form.Label>
        <Form.Control
        onChange={handleProduct}
        value={desc}
          required
          as="textarea"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Please fill!</Form.Control.Feedback>
      </Form.Group>
      <Button type='submit' className='w-100'>{selected === null ? "Add" : "Save"} product</Button>
    </Form>
  )
}
ProductForm.propTypes={
  validated:PropTypes.bool,
  handleSubmit:PropTypes.func,
  product:PropTypes.object,
  handleProduct:PropTypes.func,
  selected:PropTypes.oneOfType([PropTypes.string,PropTypes.object]),
}
const MemoProductForm=memo(ProductForm)
export default MemoProductForm;