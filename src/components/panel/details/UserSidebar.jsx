import React from "react";
import { User, ShoppingBag, Heart, MapPin, LogOut } from "lucide-react";

const UserSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-6 hidden md:flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">My Account</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-pink-500">
            <User size={20} /> Profile
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-pink-500">
            <ShoppingBag size={20} /> Orders
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-pink-500">
            <Heart size={20} /> Wishlist
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-pink-500">
            <MapPin size={20} /> Addresses
          </a>
        </nav>
      </div>

      <button className="flex items-center gap-3 text-gray-500 hover:text-red-500 transition">
        <LogOut size={20} /> Logout
      </button>
    </aside>
  );
};

export default UserSidebar;
