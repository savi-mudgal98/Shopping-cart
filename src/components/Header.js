import React from 'react'
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  Dropdown,
  Badge,
} from "react-bootstrap"

import '../App.css'
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai'
import { Link , useLocation } from "react-router-dom";
import { CartState } from '../context/Context';

const Header = () => {

  const {
    state: { cart },
    dispatch, 
      productState:{searchQuery},
    productDispatch,
  } = CartState();

  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary position-fixed" style={{zIndex: '100' , width: '100%', }}>
        <Container fluid>
          <Navbar.Brand href="/" style={{color:'blue', fontWeight:'bolder', fontSize:'30px' }}>Shopp<span style={{color:'green', fontWeight:'bolder'}}>e</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            <Form className="d-flex m-auto">
            {useLocation().pathname.split("/")[1] !== "cart" && (

            <Navbar.Text className="search">
              <Form.Control
                style={{ width: 500 }}
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="m-auto"
                value={searchQuery}
                onChange={(e) => {
                  productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value,
                  });
                }}
              />
              </Navbar.Text>
            )}
              <Button variant="outline-success">Search</Button>
            </Form>


            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropbtn'>
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 370 }}>
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <div className='cart-container'>
                      <span className="cartitem" key={prod.id}>
                        <img
                          src={prod.image}
                          className="cartItemImg"
                          alt={prod.title}
                        />
                        <div className="cartItemDetail">
                          <span style={{color:'black'}}>{prod.title}</span>
                          <span style={{color:'black'}}>₹ {prod.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      
                      </span>
                      </div>
                    )
                    )}

                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span>CART IS EMPTY!!!</span>
                )}

              </Dropdown.Menu>
            </Dropdown>




          </Navbar.Collapse>
        </Container>
      </Navbar>

<div className="main">
<h1 style={{color:'blue', fontWeight:'bolder', fontSize:'60px', textAlign:'center', paddingTop:'140px', textShadow:' 0px 0px 5px rgba(24, 160, 25, 0.8)'}}>S h o p p<span style={{color:'green', fontWeight:'bolder'}}> e</span></h1>
</div>
    </div>

  )
}

export default Header


