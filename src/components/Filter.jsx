import { useContext, useRef , useState, useEffect} from 'react'
import { AppContext } from './AppContext.jsx';
import './Filter.css';


function Filter() {

  const filterBtnRef = useRef(null);

  const [filterVisiblity, SetFilterVisiblity] = useState(false);


  const {categories, SelectCategoryFunc, selectedCategory} = useContext(AppContext);

  // Only at the first time lunch
  useEffect(() => {
     
    if (filterBtnRef.current) {
      filterBtnRef.current.focus();  
      
    }
  }, []);


  function ShowFilterDiv()
  {
    debugger;
    SetFilterVisiblity(!filterVisiblity);
    filterBtnRef.current.innerText = filterVisiblity ? 'Open Filter' : 'Close Filter';    
  }

  function SelectCategory(category)
  {
    SelectCategoryFunc(category);
  }

  return (
    <div className='filterArea'>

        <div className='filterButton' onClick={ShowFilterDiv} ref={filterBtnRef} 
        tabIndex="0" >
          Open Filter
        </div>


        <div className='category-item' style={{ display: filterVisiblity ? 'block' : 'none' }}>           
            {categories.map(category=>{
              return <div className='category' onClick={()=>SelectCategory(category)} 
              style={{ color: selectedCategory === category ? 'purple' : 'black' }}
              >{category}</div>            
            })}
          
        </div>
    
    </div>
    
  )
}

export default Filter
