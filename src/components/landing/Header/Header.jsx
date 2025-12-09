import React, { useState } from 'react';
import Searching from './details/Search';
import Cart from './details/Cart';
import UserEntry from './details/UserEntry';
// import logo from '../../../assets/logo.png'
import CartIcon from "../../cart/CartIcon";

const Header = () => {
  const [showIcons, setShowIcons] = useState(true);

  const handleSearchClick = () => {
    setShowIcons(false);
  };

  const handleSearchComplete = () => {
    setShowIcons(true);
  };

  return (
    <header className='w-full h-18 bg-indigo-900 flex items-center justify-between px-4 md:px-8 gap-2'>
      {/* <img src={logo} alt='GlowNest' width={180} /> */}
      <div className='text-4xl sm:text-5xl md:text-6xl pinkish great-vibes logo'>
        GlowNest
      </div>
      
      <div className='flex-grow max-w-[500px] sm:max-w-[600px] md:max-w-[700px]'>
        <Searching onSearchClick={handleSearchClick} onSearchComplete={handleSearchComplete} />
      </div>

      {showIcons && (
        <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
          <div><CartIcon /></div>
          <div><UserEntry /></div>
        </div>
      )}
    </header>
  );
};

export default Header;

