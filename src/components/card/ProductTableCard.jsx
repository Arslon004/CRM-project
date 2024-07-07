import React from 'react'

import PropTypes  from "prop-types";

const ProductTableCard = ({name,price,category,quantity,id,order,editProduct,deleteProduct,}) => {
  return (
    <tr>
        <td>{order}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{category}</td>
        <td>{quantity}</td>
        <td className='text-end'>
          <button className='btn btn-primary me-3' onClick={()=>editProduct(id)}>Edit</button>
          <button className='btn btn-danger' onClick={()=>deleteProduct(id)}>Delete</button>
        </td>
      </tr>
  )
}

ProductTableCard.propTypes={
  name:PropTypes.string,
  price:PropTypes.number,
  category:PropTypes.string,
  quantity:PropTypes.number,
  editProduct:PropTypes.func,
  deleteProduct:PropTypes.func,
}

export default ProductTableCard