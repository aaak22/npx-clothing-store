import React, { useContext } from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const { cartItems, isCartOpen, setIsCartOpen, } = useContext(CartContext);

    const navigate = useNavigate();

    const routeToCheckout = () =>{
        navigate('/checkout');
        setIsCartOpen(!isCartOpen);
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
              { cartItems.map( (item) => <CartItem key={item.id} cartItem={item}/>) }
              </div>
              <Button onClick={routeToCheckout} >Go to Checkout</Button>
        </div>
    );
}

export default CartDropdown;
