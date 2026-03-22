import React from 'react'
import './Product.css'

function Product({product}) {
  return (
    <div className='product'>
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
        <h5>{product.id}</h5>
        <h5>{product.category}</h5>
        
    </div>
  )
}

export default Product
