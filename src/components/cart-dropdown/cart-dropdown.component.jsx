import React, { useContext } from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
// import { CartContext } from '../../contexts/cart.context';
import { selectCartItems } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import './cart-dropdown.styles.scss';
 import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';



const CartDropdown = () => {
    // const { cartItems } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems)

    const navigate = useNavigate();

    const routeToCheckout = () =>{
        navigate('/checkout');
        // setIsCartOpen(!isCartOpen);
    }
    return (
        <CartDropdownContainer>
                <CartItems className='cart-items'>
                { 
                    cartItems.length > 0 ? (
                        cartItems.map( (item) => <CartItem key={item.id} cartItem={item}/>)
                    ) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
                </CartItems>
                <Button onClick={routeToCheckout} >Go to Checkout</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;
