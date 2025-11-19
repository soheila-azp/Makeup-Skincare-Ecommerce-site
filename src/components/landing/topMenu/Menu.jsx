import React from 'react';
import { Link } from 'react-router-dom'; // <-- این مهمه

const Menu = () => {
  return (
    <div className='w-full h-12 bg-white flex items-center justify-left gap-8 pl-4'>
      <Link to="/">Home</Link>
      <Link to="/AllProducts">All Products</Link>
      <Link to="/ContactUs">Contact Us</Link>
      <Link to="/AboutUs">About Us</Link>
    </div>
  );
}

export default Menu;

