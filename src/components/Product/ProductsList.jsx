import React, { useState, useEffect } from "react";
import FilterSortBar from "./filter/FilterSortBar";
import ProductCard from "./ProductCard";
import { getProducts } from "../../core/services/api/Product";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  // گرفتن محصولات از API
  const fetchProducts = async (params = {}) => {
    try {
      const res = await getProducts(params);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // وقتی روی Apply کلیک می‌شه
  const handleApplyFilters = (selectedFilters) => {
    // فقط فیلدهای پرشده رو نگه می‌داریم
    const cleanFilters = {};
    if (selectedFilters.minPrice) cleanFilters.minPrice = selectedFilters.minPrice;
    if (selectedFilters.maxPrice) cleanFilters.maxPrice = selectedFilters.maxPrice;
    if (selectedFilters.category) cleanFilters.category = selectedFilters.category;
    if (selectedFilters.inStock) cleanFilters.inStock = selectedFilters.inStock;
    if (selectedFilters.sort) cleanFilters.sort = selectedFilters.sort;

    setFilters(cleanFilters);
    fetchProducts(cleanFilters);
  };

  // بار اول بدون فیلتر لود کن
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <FilterSortBar onApplyFilters={handleApplyFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product._id}
               id={product._id}
              image={
                product.images?.[0]
                  ? `${import.meta.env.VITE_BASE_URL}${product.images[0]}`
                  : null
              }
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            هیچ محصولی پیدا نشد 😕
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
