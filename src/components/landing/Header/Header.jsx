import React from 'react'
import Search from './details/Search'
import Cart from './details/Cart'
import UserEntry from './details/UserEntry'
import logo from '../../../assets/logo.png'
import CartIcon from "../../cart/CartIcon";

const Header = () => {
  return (
      <header className='w-full h-18 bg-indigo-900 flex items-center justify-around px-4'>
        {/* <img src={logo} alt='GlowNest' width={180} /> */}
        <div className='text-6xl pinkish great-vibes logo'>GlowNest </div>
        <div><Search/></div>
        <div className='flex items-center gap-12'>
          {/* <div><Cart/></div> */}
          <div><CartIcon /></div>
           <div><UserEntry/></div>
        </div>
  
      </header>
  )
}

export default Header
