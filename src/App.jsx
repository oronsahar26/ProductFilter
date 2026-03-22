import { useState , useEffect} from 'react'
import './App.css'
import ProductGallery from './components/ProductGallery.jsx'

import {AppContext} from './components/AppContext.jsx'

 


function App() {

  // Holds all the products 
  const [products, SetPorducts] = useState([]);  
  const [categories, SetCategories] = useState([]);
  const [selectedCategory, SetSelectedCategory] = useState('all');

  const [filteredProducts, SetFilteredProducts] = useState([]);

   // Fetching the data only in the first launch of the component    
    useEffect(() => {        
        GetProducts();
    }, [])


    async function GetProducts()
    {
        try
        {
             // Using the await function to force the fetch to keep trying untill the answare is recieved
            const response = await fetch ('https://dummyjson.com/products?limit=194',
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
            SetPorducts(data.products);

            // Initializes the categories out of the products
            const tempCat = data.products.map(item=>item.category);
            
            // Gets only unique values using set fucntion
            const uniqueCat = new Set(tempCat);

            SetCategories(['all', ...uniqueCat]);

            SetFilteredProducts(data.products);

              


        }
        catch (err) 
        {
                console.log('Cannot import products - Error: ' + err);
        }  
    }

  
 



  function SelectCategoryFunc(selectedCategory){
    debugger;
    SetSelectedCategory(selectedCategory);


    if (selectedCategory === 'all') 
      {
          SetFilteredProducts(products)
      } 
      else 
      {
          SetFilteredProducts(products.filter(product => product.category === selectedCategory))
      }

            // Gets the filtered products
            // const filteredProducts = selectedCategory === 'all' 
            // ? products 
            // : products.filter(item => item.category === selectedCategory);
    }




  return (
    <>
      {/* wraps the ProductGallery Component with context  */}
      
      <AppContext.Provider value = {{categories, SelectCategoryFunc, selectedCategory}}>             
          <ProductGallery productList={filteredProducts} />    
      </AppContext.Provider>
    </>
  )
}

export default App