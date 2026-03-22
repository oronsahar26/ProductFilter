import { useEffect } from 'react'
import Product from './Product'
import Filter from './Filter'

function ProductGallery({InitProductListFunc, productList}) {

    // Fetching the data only in the first launch of the component    
    useEffect(() => {        
        GetProducts();
    }, [])


    async function GetProducts()
    {
        try
        {
            debugger;
            // Using the await function to force the fetch to keep trying untill the answare is recieved
            const response = await fetch ('https://dummyjson.com/products',
                {
                    headers : 
                    {
                        // Enables getting json as a result
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    method :       
                        'get',              
                }
            )

            if (!response.ok)
            {
                throw new Error('HTTP error!' + response.status);
            }

            // Turns the string response into JSON/Array
            const data = await response.json();

            debugger;

            // Sets the useSate of the products using the transfered function
            InitProductListFunc(data.products);
             


        }
        catch (err) 
        {
                console.log('Cannot import products - Error: ' + err);
        }  
    }


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
