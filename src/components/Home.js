import {React} from 'react'

import { CartState } from '../context/Context';
import '../App.css'
import SingleProduct from './SingleProduct';



import Filters from './Filters';

const Home = () => {

  const {
    state: { products },
    productState: { sort, byStock, byRating, searchQuery },
  } = CartState();

 // const [modalShow, setModalShow] = useState(false);


  if(products.length===0){
    return <div>Loading ...</div>
  }

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.rating.count);
    }

    

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating.rate >= byRating);
    }

 

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }


    return sortedProducts;
  };

  return (
 <>
    
      <div className='home'>
      {/* style={{display:'flex', flexWrap:'wrap', justifyContent:'center' ,alignItems:'center'}} */}
        <Filters/>
        <div  className="productContainer" >
        {
          transformProducts().map((item)=>(
     
              <SingleProduct key={item.id} prod= {item}/>
          
          ))
        }
        </div>

        
 
    </div>

     </>
   )
}

export default Home;







