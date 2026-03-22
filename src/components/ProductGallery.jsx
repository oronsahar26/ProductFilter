import { useEffect } from 'react'
import Product from './Product'
import Filter from './Filter'

function ProductGallery({productList}) {

   


  return (
    <div>
        <h2>Products Gallery</h2>
        <Filter />
        
        <div className = 'prouctGallery'>
            {productList.map((product) => (
                  <Product product ={product} key={product.id}/>
              ))}      
 
            
          </div>          
    </div>

    
  )
}

export default ProductGallery
