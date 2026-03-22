import { useState } from 'react'
import './App.css'
import ProductGallery from './components/ProductGallery.jsx'

import {AppContext} from './components/AppContext.jsx'

 


function App() {

  // Holds all the products 
  const [products, SetPorducts] = useState([]);  
  const [categories, SetCategories] = useState([]);
  const [selectedCategory, SetSelectedCategory] = useState('all');


  function InitProductList(productList)
  {
    debugger;
    console.log(productList);
    SetPorducts(productList);

    // Initializes the categories out of the products
    const tempCat = productList.map(item=>item.category);

     
    // Gets only unique values using set fucntion
    const uniqueCat = new Set(tempCat);

   // Gets the unique categories only
    SetCategories(['all', ...uniqueCat]);

    console.log(categories);

  }

  // Gets the filtered products
  const filteredProducts = selectedCategory === 'all' 
  ? products 
  : products.filter(item => item.category === selectedCategory);
 



  function SelectCategoryFunc(selectedCategory){
    debugger;
    SetSelectedCategory(selectedCategory);
  }




  return (
    <>
      {/* wraps the ProductGallery Component with context  */}
      
      <AppContext.Provider value = {{categories, SelectCategoryFunc, selectedCategory}}>             
          <ProductGallery InitProductListFunc={InitProductList} productList={filteredProducts} />    
      </AppContext.Provider>
    </>
  )
}

export default App