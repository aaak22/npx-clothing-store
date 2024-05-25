import { CART_ACTION_TYPES } from './cart.types'


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


export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch(type){
        
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems : payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen : payload
            }
        default: 
            return state
        
    }

} 