import React from 'react'
import { Table } from 'react-bootstrap'

import PropTypes from "prop-types";

import ProductTableCard from '../card/ProductTableCard';

const ProductTable = ({products,editProduct,deleteProduct,}) => {
  return (
    <Table striped bordered hover >
    <thead>
      <tr>
        <th>No</th>
        <th>Product name</th>
        <th>Product price</th>
        <th>Category</th>
        <th>Quantity</th>
        <th className='text-center'>Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.length !== 0 ?
      products.map((product,i)=>(
       <ProductTableCard editProduct={editProduct} deleteProduct={deleteProduct} key={product.id} order={i+1} {...product}/>
      ))
      :
      <tr>
        <td className='text-center' colSpan={6}>No products</td>
      </tr>
    }

    </tbody>
  </Table>
  )
}
ProductTable.propTypes={
  products:PropTypes.array,
  editProduct:PropTypes.func,
  deleteProduct:PropTypes.func,
}
export default ProductTable