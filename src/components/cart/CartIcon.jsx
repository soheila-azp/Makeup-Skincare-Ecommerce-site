import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import MiniCart from "./MiniCart";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const [open, setOpen] = useState(false);

  const totalQty = useSelector((state) => state.cart.totalQty);

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 sm:p-3 hover:bg-gray-100 rounded-full transition"
      >
        <ShoppingCart size={24} className="pinkish" />

        {totalQty > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs sm:text-sm px-1.5 py-0.5 rounded-full">
            {totalQty}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute z-50 top-16 right-0 sm:right-12 w-full sm:w-80">
          <MiniCart onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default CartIcon;
