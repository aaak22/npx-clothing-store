import React, { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

// import { UserContext } from '../../contexts/user.context';
import { selectCurrentUser } from '../../store/user/user.selector'
// import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'


// import './navigation.styles.scss';
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles'
import { selectIsCartOpen } from '../../store/cart/cart.selector';

const Navigation = () => {

  // const { currentUser } = useContext(UserContext); 

  // console.log(currentUser);
  // const signOutHandler = async () =>{
  //   const res = await signOutUser();
  //   console.log(res);
  //   setCurrentUser(null);
  // }

  // const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser);
  
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      {/*
      <div className='navigation'>
        <div className='logo'>
          <Link className='logo-container' to='/'>
            <CrownLogo className='logo'/>
          </Link>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutUser}>Sign Out</span>
            ) : (
              <Link className='nav-link' to='/signin'>
                Sign In
              </Link>
            )
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown /> }
      </div>
    */}
      <NavigationContainer>
        <div className='logo'>
          <LogoContainer to='/'>
            <CrownLogo className='logo' />
          </LogoContainer>
        </div>
        <NavLinksContainer>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/shop'>
            Shop
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
            ) : (
              <NavLink className='nav-link' to='/signin'>
                Sign In
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}
export default Navigation;