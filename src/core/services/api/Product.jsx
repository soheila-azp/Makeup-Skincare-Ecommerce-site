import http from "../interceptor";

export const getProducts = (params) => {
  return http.get(`/v1/product/products`, { params });
};

export const getProductById = (id) => {
  return http.get(`/v1/product/${id}`);
};

export const createProduct = (data) => {
  return http.post(`/v1/product`, data);
};

export const updateProduct = (id, data) => {
  return http.put(`/v1/product/${id}`, data);
};

export const deleteProduct = (id) => {
  return http.delete(`/v1/product/${id}`);
};
