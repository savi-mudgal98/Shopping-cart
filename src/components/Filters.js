import { Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import Form from 'react-bootstrap/Form';
import '../App.css';


import { React } from 'react'

const Filters = () => {

  // const {
  //   state: { products },
  // } = CartState();




  const {
    productDispatch,
    productState: { byStock,  sort, byRating },
  } = CartState();



  return (
    <div className="filters">
      <Form>
        <Form.Group>
          <Form.Label><p style={{color:'black', fontSize: '20px', fontWeight:'bolder'}}>Sort By Price:</p></Form.Label>
          <div>
            <Form.Check
              inline
              id="inline-1"
              type="radio"
              className="asc"
              label="Ascending"
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh",
                })
              }
              checked={sort === "lowToHigh" ? true : false}
            />
            <Form.Check
              inline
              label="Descending"
              className="desc"
              type="radio"
              id="inline-2"
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
                })
              }
              checked={sort === "highToLow" ? true : false}
            />
          </div>
        </Form.Group>

        <Form.Group>
          <Form.Check
            label="Include Out of Stock"
            type="checkbox"
            id="inline-3"
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
            checked={byStock}
          />
        </Form.Group>

        
      

        <Form.Group>
          <Form.Label><p style={{color:'black', fontSize: '30px', fontWeight:'bolder', margin:'20px'}}>Rating:</p></Form.Label>
          <Rating
            rating={byRating}
            onClick={(i) =>
              productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
            style={{ cursor: "pointer", display: "inline-block" }}
          />
        </Form.Group>

             


        <Button
          variant="light"
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear Filters
        </Button>
      </Form>
    </div>
  );

}

export default Filters;


