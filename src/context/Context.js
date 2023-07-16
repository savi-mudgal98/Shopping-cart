import { useEffect ,createContext, useContext, useReducer } from "react";
import { cartReducer,productReducer} from './Reducer'
import axios from 'axios';


const Cart = createContext();

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        products:[],
        cart: [],
    });
    
    useEffect(() => {
        const productStore = async () => {
            try {
                const {data} = await axios.get(`https://fakestoreapi.com/products/`);
                dispatch({ type : "FETCH_PRODUCTS" , payload : data});
            } catch (error) {
                console.log("error", error);
            }
        }
        productStore();
    },[]);
    

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byRating: 0,
        searchQuery: "",
       
    });

    console.log(productState);

    return <Cart.Provider value={{ state, dispatch,productState, productDispatch }}> {children}</Cart.Provider>

};


export const CartState = () => {
    return useContext(Cart);
};

export default Context;





