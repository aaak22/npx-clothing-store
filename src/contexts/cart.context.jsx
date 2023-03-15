import { createContext, useState, useEffect } from "react";


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
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemtoCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
});

export const CartProvider = ({ children }) => {
    
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);
    const [ cartTotal, setCartTotal ] = useState(0);
    
    //Cart Item Count
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);
    
    //Cart Item Total
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    //Add Item to Cart
    const addItemtoCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    //Sub Item From Cart
    const subItemtoCart = (productToSub) => {
        setCartItems(subCartItem(cartItems, productToSub));
    }
    
    //Remove Item From Cart
    const clearItemFromCart = (cartItemToRemove) => {
        setCartItems(clearCartItem(cartItems, cartItemToRemove))
    }


    const value = { isCartOpen, setIsCartOpen, addItemtoCart, subItemtoCart, clearItemFromCart, cartItems, cartTotal, cartCount};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}