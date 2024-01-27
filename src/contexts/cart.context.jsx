import { createContext, useState, useEffect, useReducer } from "react";
import { createAction }  from '../utils/reducer/reducer.utils'


//Add Item From Cart Helper
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1 }];
}

//Sub Item From Cart Helper
const subCartItem = (cartItems, productToSub) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToSub.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== productToSub.id )
    }

    if(existingCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id === productToSub.id ? { ...cartItem, quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : cartItem.quantity } : cartItem
        )
    }

    return [...cartItems, {...productToSub, quantity: 1 }];
}

//Remove Item From Cart Helper
const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}



export const CartContext = createContext({
    // isCartOpen: false,
    // cartItems: [],
    // cartCount: 0,
    // cartTotal: 0
    addItemtoCart: () => {},
    clearItemFromCart: () => {},
    setIsCartOpen: () => {},
});

const CART_ACTION_TYPES = { 
    SET_CART_ITEMS : 'SET_CART_ITEMS',
    SET_IS_CART_OPEN : 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    isCartOpen: true,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch(type){
        
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default: 
            throw new Error(`unhandled type of ${type} in cartReducer`)
        
    }

} 

// const AddtoCartAction = (itemToAdd) => {
//     dispatch({
//         type: 'ADD_TO_CART',
//         payload: itemToAdd 
//     })
// }

export const CartProvider = ({ children }) => {
    
    // const [ isCartOpen, setIsCartOpen ] = useState(false);
    // const [ cartItems, setCartItems ] = useState([]);
    // const [ cartCount, setCartCount ] = useState(0);
    // const [ cartTotal, setCartTotal ] = useState(0);
    
    //Cart Item Count
    // useEffect(() => {
    //     const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    //     setCartCount(newCartCount);
    // }, [cartItems]);
    
    //Cart Item Total
    // useEffect(() => {
    //     const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
    //     setCartTotal(newCartTotal);
    // }, [cartItems]);

    const [ { cartItems, isCartOpen, cartCount, cartTotal }, dispatch ] = useReducer(cartReducer, INITIAL_STATE)

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        
        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{
                    cartItems: newCartItems,
                    cartTotal: newCartTotal,
                    cartCount: newCartCount
            }) 
        )
    }

    //Add Item to Cart
    const addItemtoCart = (productToAdd) => {
        // setCartItems(addCartItem(cartItems, productToAdd));
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    //Sub Item From Cart
    const subItemtoCart = (productToSub) => {
        // setCartItems(subCartItem(cartItems, productToSub));
        const newCartItems = subCartItem(cartItems, productToSub);
        updateCartItemsReducer(newCartItems);
    }
    
    //Remove Item From Cart
    const clearItemFromCart = (cartItemToRemove) => {
        // setCartItems(clearCartItem(cartItems, cartItemToRemove))
        const newCartItems = clearCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
    }


    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemtoCart, 
        subItemtoCart, 
        clearItemFromCart, 
        cartItems, 
        cartTotal, 
        cartCount
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}