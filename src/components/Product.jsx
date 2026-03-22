import React from 'react'
import './Product.css'

function Product({product}) {
  return (
    <div className='product'>
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
        <h4>{product.id}</h4>
        
    </div>
  )
}

export default Product
