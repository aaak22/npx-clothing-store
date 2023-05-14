import React, { useContext } from 'react';
// import { ReactComponent as ShoppigIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';
// import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () =>   setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{ cartCount }</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;
