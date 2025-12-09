import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import { getProducts } from "../../core/services/api/Product";

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts({ search: query });
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    if (query) fetchProducts();
  }, [query]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Search results for:<span className="text-indigo-500">{query}</span>
      </h2>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              image={
                product.images?.[0]
                  ? `${import.meta.env.VITE_BASE_URL}${product.images[0]}`
                  : null
              }
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">There is nothing here!</p>
      )}
    </div>
  );
};

export default SearchResults;
