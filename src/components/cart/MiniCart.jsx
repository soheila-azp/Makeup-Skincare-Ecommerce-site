import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, decreaseQty } from "../../store/cartSlice";

const MiniCart = ({ onClose }) => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="absolute right-0 mt-12 sm:w-56 md:w-56 lg:w-64 bg-white border rounded-xl shadow-lg p-4 z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-lg">Your Cart</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500 text-sm">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">
                  ${item.price} × {item.qty}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  className="px-2 bg-gray-200 rounded"
                  onClick={() => dispatch(decreaseQty(item.id))}
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  className="px-2 bg-gray-200 rounded"
                  onClick={() => dispatch(addToCart(item))}
                >
                  +
                </button>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-700 text-xs"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-2 font-semibold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button className="bg-blue-500 text-white rounded-lg py-2 mt-3 hover:bg-blue-600 transition">
            Continue to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default MiniCart;

