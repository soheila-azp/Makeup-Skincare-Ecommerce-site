// src/components/Products/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const ProductCard = ({ id, image, name, description, price }) => {
  const dispatch = useDispatch();

  const product = { 
    id, 
    image, 
    name, 
    description, 
    price 
  };

  return (
    <div className="h-96 beige shadow-md p-4 hover:shadow-lg transition cursor-pointer flex flex-col items-center">
      
      <Link to={`/ProductDetail/${id}`}>
        {image && (
          <img 
            src={image}
            alt={name}
            className="w-44 h-44 object-cover my-5"
          />
        )}
        <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>
      </Link>

      <p className="text-gray-500 text-sm mb-4 text-center">{description}</p>

      <span className="text-indigo-600 font-bold text-lg">${price}</span>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="inline-block px-3 py-1.5 pinkish text-white text-xs rounded-md 
                   hover:bg-pink-300 transition-all duration-200 mt-3"
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;
