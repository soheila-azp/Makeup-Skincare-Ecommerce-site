// src/api/product.api.js
import http from "../interceptor";

// دریافت لیست محصولات
export const getProducts = (params) => {
  return http.get(`/v1/product/products`, { params });
};

// دریافت جزئیات یک محصول خاص
export const getProductById = (id) => {
  return http.get(`/v1/product/${id}`);
};

// ایجاد محصول جدید
export const createProduct = (data) => {
  return http.post(`/v1/product`, data);
};

// ویرایش محصول
export const updateProduct = (id, data) => {
  return http.put(`/v1/product/${id}`, data);
};

// حذف محصول
export const deleteProduct = (id) => {
  return http.delete(`/v1/product/${id}`);
};
