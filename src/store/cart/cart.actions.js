import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

//Add Item From Cart Helper
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

//Sub Item From Cart Helper
const subCartItem = (cartItems, productToSub) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToSub.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToSub.id)
    }

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToSub.id ? { ...cartItem, quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : cartItem.quantity } : cartItem
        )
    }

    return [...cartItems, { ...productToSub, quantity: 1 }];
}

//Remove Item From Cart Helper
const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}


//Add Item to Cart
export const addItemtoCart = (cartItems, productToAdd) => {
    // setCartItems(addCartItem(cartItems, productToAdd));
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

//Sub Item From Cart
export const subItemtoCart = (cartItems, productToSub) => {
    // setCartItems(subCartItem(cartItems, productToSub));
    const newCartItems = subCartItem(cartItems, productToSub);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

//Remove Item From Cart
export const clearItemFromCart = (cartItems, cartItemToRemove) => {
    // setCartItems(clearCartItem(cartItems, cartItemToRemove))
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
