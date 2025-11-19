import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import MiniCart from "./MiniCart";
import { useCart } from "./CartContext";

const CartIcon = () => {
  const [open, setOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 hover:bg-gray-100 rounded-full transition"
      >
        <ShoppingCart size={24} />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>

      {open && <MiniCart onClose={() => setOpen(false)} />}
    </div>
  );
};

export default CartIcon;
