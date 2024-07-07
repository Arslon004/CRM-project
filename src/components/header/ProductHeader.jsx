import React, { memo } from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import products from '../../data/products'

import PropTypes from "prop-types";

const ProductHeader = ({ search, handleSearch, category, handleCategory ,sort,handleSort}) => {
  return (
    <header className='py-4'>
      <Row >
        <Col md="4">
          <h2 className='text-success-emphasis' style={{fontSize:"35px",fontWeight:"bold"}}>Products</h2>
        </Col>
        <Col md="8">
          <InputGroup className="mb-3">

            <Form.Control
              value={search}
              onChange={handleSearch}
              placeholder="Searching products"
            />

            <InputGroup.Text >
              <Form.Select value={sort} onChange={handleSort}>
                <option value="sort">Sory by</option>
                <option value="decrease">Decrease</option>
                <option value="increase">Increase</option>
              </Form.Select>
            </InputGroup.Text>


            <InputGroup.Text >
              <Form.Select value={category} onChange={handleCategory}>
                <option value={`all`}>{`All products`}</option>
                {products.map((product) => <option key={product} value={product}>{product}</option>)}
              </Form.Select>
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
    </header>
  )
}
ProductHeader.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
  category: PropTypes.string,
  sort: PropTypes.string,
  handleCategory: PropTypes.func,
  handleSort: PropTypes.func,
}
const MemoProductHeader=memo(ProductHeader);
export default MemoProductHeader;