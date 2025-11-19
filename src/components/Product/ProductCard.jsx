// src/components/Products/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id,image, name, description, price }) => {
  return (
    <div className="h-80 beige shadow-md p-4 hover:shadow-lg transition cursor-pointer flex flex-col items-center">
      <Link to={`/ProductDetail/${id}`}>{image && (
        <img 
          src={image}
          alt={name}
          className="w-44 h-44 object-cover my-5 "
        />
      )}
      <h3 className="text-lg font-semibold mb-2 text-center">{name}</h3>
      </Link>
      <p className="text-gray-500 text-sm mb-4 ">{description}</p>
      <span className="text-indigo-600 font-bold text-lg">${price}</span>
    </div>
  );
};

export default ProductCard;
