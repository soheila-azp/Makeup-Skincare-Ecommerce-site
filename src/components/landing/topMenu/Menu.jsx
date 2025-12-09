import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Menu as HamburgerIcon} from 'lucide-react'; 

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-12 bg-white flex items-center justify-between px-4 z-50 relative">
      <div className="hidden sm:flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/AllProducts">All Products</Link>
        <Link to="/ContactUs">Contact Us</Link>
        <Link to="/AboutUs">About Us</Link>
      </div>


      <div className="sm:hidden flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <HamburgerIcon size={24} className="text-gray-600" />
      </div>


      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-12 left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center py-4">
            <Link to="/" className="py-2 px-4">Home</Link>
            <Link to="/AllProducts" className="py-2 px-4">All Products</Link>
            <Link to="/ContactUs" className="py-2 px-4">Contact Us</Link>
            <Link to="/AboutUs" className="py-2 px-4">About Us</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;


