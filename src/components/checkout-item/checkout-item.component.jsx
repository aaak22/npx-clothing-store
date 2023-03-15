import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    const { addItemtoCart, subItemtoCart, clearItemFromCart } = useContext(CartContext); 

    const removeCartItemHandler = () => clearItemFromCart(cartItem);
    const addItemCartHandler = () => addItemtoCart(cartItem);
    const subItemCartHandler = () => subItemtoCart(cartItem);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span className='arrow' onClick={subItemCartHandler}> &#60; </span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={addItemCartHandler}> &#62; </span>
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={removeCartItemHandler}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
