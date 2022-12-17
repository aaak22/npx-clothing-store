import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo  } from '../../assets/crown.svg'

import './navigation.styles.scss';

const Navigation = () => {
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
          <Link className='nav-link' to='/signin'>
            Sign In
          </Link>
        </div>
      </div>
    <Outlet />
    </Fragment>
  )
}
export default Navigation;