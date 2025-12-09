import React, { useState } from "react";

const FilterSortBar = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    category: "",
    inStock: false,
    sort: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const applyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <div className="flex flex-wrap gap-3 items-center bg-gray-50 p-4 rounded-xl shadow-sm">
      <div className="flex gap-2 items-center">
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-28"
        />
        <span>-</span>
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-28"
        />
      </div>

      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="border rounded-lg px-3 py-2"
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="books">Books</option>
      </select>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          name="inStock"
          checked={filters.inStock}
          onChange={handleChange}
          className="w-5 h-5 accent-blue-500 cursor-pointer"
        />
        <span className="text-gray-700 text-sm">In Stock Only</span>
      </label>

     <select
  name="sort"
  value={filters.sort}
  onChange={handleChange}
  className="border rounded-lg px-3 py-2"
>
  <option value="">Sort by</option>
  <option value="latest">Newest</option>
  <option value="oldest">Oldest</option>
  <option value="cheapest">Price: Low to High</option>
  <option value="expensive">Price: High to Low</option>
  <option value="bestselling">Best Selling</option>
</select>

      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Apply
      </button>
    </div>
  );
};

export default FilterSortBar;

