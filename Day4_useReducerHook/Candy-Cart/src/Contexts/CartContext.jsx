// Cart kya h -> Cart ek dabba h, jisme kuch saaman rakha ja sakta h means -> Array of Products and uska total
// cart ki ek state ho sakti h jo ki current state h, and isme kuch actions perform kiye ja sakte h
// Like Add_ITEM, REMOVE_ITEM, CLEAR_CART

// To hm sabse phle ek initial state banayenge

import { createContext, useEffect, useReducer } from "react";

const initialState = JSON.parse(localStorage.getItem('cart')) || {
    items: [],
    total: 0
}

// Now CartReducer function banayenge - jo state lega and action lega
const CartReducer = (state, action) =>{
    switch(action.type){
        case "ADD_ITEM":
            const itemExists = state.items.find(item => item.id == action.payload.id);
            let newItems;
            if(itemExists){
                newItems = state.items.map((item) => 
                item.id === action.payload.id ? {...item, quantity: item.quantity +1 } : item)
            }else{
                newItems =  [...state.items, {...action.payload, quantity:1}];
            }
            return {
                items: newItems,
                total: state.total + action.payload.price
            };
        case "REMOVE_ITEM":
            console.log("remove item called");
            const filteredItems = state.items.filter((item) => item.id !== action.payload.id);
            return {
                items: filteredItems,
                total: state.total - action.payload.price * action.payload.quantity
            }    
        case "CLEAR_CART":
            return {
                items: [],
                total: 0
            }
        default:
            return state;        
    }
}



export const CartContext = createContext();


// Ab banayenge Provider
export const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(CartReducer, initialState);

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(state));
    },[state])

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    ) 
}



