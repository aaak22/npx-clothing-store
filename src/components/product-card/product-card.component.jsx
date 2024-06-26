import React, { useContext } from 'react';
import './product-card.styles.scss';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

// import { CartContext } from '../../contexts/cart.context';
import { useDispatch, useSelector } from 'react-redux';
import { addItemtoCart } from '../../store/cart/cart.actions'
import { selectCartItems } from '../../store/cart/cart.selector'


const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    // const { addItemtoCart } = useContext(CartContext);

    const addProductToCart = () => dispatch(addItemtoCart(cartItems, product));

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
            {/*<Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>*/}
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
        </div>
    );
}

export default ProductCard;
