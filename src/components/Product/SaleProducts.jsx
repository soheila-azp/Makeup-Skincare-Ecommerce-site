// src/components/Products/ProductsSlider.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ProductCard from "./ProductCard";
import { getProducts } from "../../core/services/api/Product";

const SaleProducts = ({ search, sort, page, limit }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {
          ...(search && { search }),
          ...(sort && { sort }),
          ...(page && { page }),
          ...(limit && { limit }),
        };
        const res = await getProducts(params);
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, [search, sort, page, limit]);

  return (
    <div className="beige rounded-sm p-6">
      {products.length === 0 ? (
        <div className="text-center text-gray-500">Loading products...</div>
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={1} // همیشه فقط یک اسلاید نمایش داده شود
          loop={true}
          speed={900} // سرعت ترنزیشن نرم‌تر (میلی‌ثانیه)
          autoplay={{
            delay: 1500, // هر ۳ ثانیه اسلاید بعدی
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard
                image={
                  product.images?.length
                    ? `http://localhost:3500${product.images[0]}`
                    : null
                }
                name={product.name}
                description={product.description}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default SaleProducts;
