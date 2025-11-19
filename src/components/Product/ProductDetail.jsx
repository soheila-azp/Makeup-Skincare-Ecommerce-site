import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  // 🟩 گرفتن آیدی از آدرس URL
  const { id } = useParams();

  // 🟩 نگهداری اطلاعات محصول
  const [product, setProduct] = useState(null);

  // 🟩 درخواست به API بر اساس آیدی محصول
  useEffect(() => {
    console.log("🟢 useEffect triggered, id:", id);

    // اگر آیدی موجود نبود، متوقف شو
    if (!id) {
      console.warn("⚠️ No product ID found in URL");
      return;
    }

    // 🟡 دریافت اطلاعات محصول از سرور
    axios
      .get(`http://localhost:3500/api/v1/products/${id}`)
      .then((res) => {
        console.log("✅ API response:", res);
        console.log("✅ Product data:", res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching product:", err);
      });
  }, [id]);

  console.log("🟠 Current product state:", product);

  // 🟩 نمایش لودینگ در صورت عدم وجود داده
  if (!product)
    return <p className="text-center text-xl p-10 text-gray-500">Loading...</p>;

  // 🟩 نمایش جزئیات محصول
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
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
