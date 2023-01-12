import React, { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo  } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils'


import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext); 
  console.log(currentUser);
  // const signOutHandler = async () =>{
  //   const res = await signOutUser();
  //   console.log(res);
  //   setCurrentUser(null);
  // }
  return (
    <Fragment>
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
          
        </div>
      </div>
    <Outlet />
    </Fragment>
  )
}
export default Navigation;