import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();


  const [product, setProduct] = useState(null);


  useEffect(() => {
    console.log(" useEffect triggered, id:", id);


    if (!id) {
      console.warn(" No product ID found in URL");
      return;
    }

   
    axios
      .get(`http://localhost:3500/v1/product/products/${id}`)
      .then((res) => {
        console.log(" API response:", res);
        console.log(" Product data:", res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(" Error fetching product:", err);
      });
  }, [id]);

  console.log(" Current product state:", product);
  // console.log(`Image URL: http://localhost:3500${product.images[0]}`);



  if (!product)
    return <p className="text-center text-xl p-10 text-gray-500">Loading...</p>;


  return (
    <div className="p-8 max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg mt-4">
      {/* <img src={product.images[0]} alt={product.name} /> */}
        {product.images?.[0] ? (
        <img
          src={`${import.meta.env.VITE_BASE_URL}${product.images[0]}`}
          alt={product.name}
          className="mx-auto"
        />
      ) : (
        <p>No image available</p>
      )}
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100 mt-4">
        {product.name}
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
        {product.description}
      </p>

      <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
        ${product.price}
      </p>
    </div>
  );
};

export default ProductDetail;
