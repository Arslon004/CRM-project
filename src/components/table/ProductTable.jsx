import React from 'react'
import { Table } from 'react-bootstrap'

import PropTypes from "prop-types";

import ProductTableCard from '../card/ProductTableCard';

const ProductTable = ({products,editProduct,deleteProduct,search,category,sort}) => {

  let results=products.filter((product)=>product.name.toLowerCase().includes(search));

  if(category !== "all"){
    results=results.filter((product)=>product.category === category);
  }

  if(sort==="increase"){
    results = results.sort((a,b)=>b.price-a.price);
  }else if(sort === 'decrease'){
    results = results.sort((a,b)=>a.price-b.price);
  }

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
      {results.length !== 0 ?
      results.map((product,i)=>(
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
  search:PropTypes.string,
  category:PropTypes.string,
}
export default ProductTable