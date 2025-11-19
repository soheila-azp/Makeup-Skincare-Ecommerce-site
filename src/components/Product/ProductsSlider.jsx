// src/components/Products/ProductsSlider.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ProductCard from "./ProductCard";
import { getProducts } from "../../core/services/api/Product";

const ProductsSlider = ({ search, sort, page, limit}) => {
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
        // const data = await res.json();
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, [search, sort, page, limit]);

  // تعداد اسلاید قابل نمایش بسته به تعداد محصولات
  const slidesPerView = Math.min(5, products.length);
  const loopSlides = products.length > 5; // فقط وقتی تعداد اسلاید بیشتر از slidesPerView باشه، loop فعال باشه

  return (
    <div className="rounded-sm p-6">
      {/* <h2 className="text-xl font-bold mb-4 text-center text-indigo-600">{title}</h2> */}

      {products.length === 0 ? (
        <div className="text-center text-gray-500">Loading products...</div>
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          loop={loopSlides}
          autoplay={{
            delay: 2000,           // حرکت خودکار هر 2 ثانیه
            disableOnInteraction: false,
            pauseOnMouseEnter: true // اگر موس روی اسلاید رفت، autoplay موقتاً متوقف میشه
          }}
          breakpoints={{           // responsive
            320: { slidesPerView: 1 },
            640: { slidesPerView: Math.min(2, products.length) },
            768: { slidesPerView: Math.min(3, products.length) },
            1024: { slidesPerView: Math.min(5, products.length) }
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

export default ProductsSlider;

