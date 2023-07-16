import Button from 'react-bootstrap/Button';
import { CartState } from "../context/Context";
 import Rating from "./Rating";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import {RiDeleteBin5Line} from 'react-icons/ri';
import "../App.css"


import React from 'react'



const SingleProduct = ({ prod }) => {

  const {
    state: { cart },
    dispatch,
  } = CartState();


  return (


    <div className='products'>

<Card 
// style={{ width: '18rem',height:'auto' , margin: '25px', padding:'20px'}}
className='singleProductItem'
>
<Card.Img variant="top" className="productImage" src={prod.image} alt="product_image" style={{width:'5rem', margin:'auto',}}/>
<Card.Body>
  <Card.Title>{prod.title}</Card.Title>
  <div className='d-flex justify-content-between'>
 <div className='d-flex '> Price: <ListGroup.Item> ${prod.price}</ListGroup.Item></div>
  <ListGroup.Item><Rating rating={prod.rating.rate}/></ListGroup.Item>
  </div>
</Card.Body>

{cart.some((p) => p.id === prod.id) ? (
  <Button variant="outline-danger"
  onClick={() =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: prod,
    })
   } ><RiDeleteBin5Line/></Button>

) : (
<Button variant="outline-success"
 onClick={() =>
  dispatch({
    type: "ADD_TO_CART",
    payload: prod,
  })
}
 disabled={!prod.rating.count}>
  {!prod.rating.count?"Out of Stock":"Add to Cart"}</Button>
)}


</Card>

</div>
)



}



export default SingleProduct