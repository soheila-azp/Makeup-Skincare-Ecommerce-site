import axios from "axios";
import { toast } from "react-toastify";
import { getItem, removeItem } from "../common/storage.services";

const baseURL = import.meta.env.VITE_BASE_URL;

const http = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  if (response.data.success !== undefined) {
    if (!response.data.success) {
      toast.error(response.data.message || "Error occurred");
    } else {
      console.log(response.data.message || "Request successful");
    }
  }
  return response.data;
};


const onError = (err) => {

  if (!err.response) {
    toast.error("Network error or CORS issue: " + err.message);
    return Promise.reject(err);
  }

  const status = err.response.status;
  const data = err.response.data;

  if (status === 422 && Array.isArray(data?.ErrorMessage)) {
    data.ErrorMessage.forEach((msg) => toast.error(msg));
  }


  else if (status === 401) {
    removeItem("token");
    toast.error("اجازه دسترسی شما منقضی شد، لطفا دوباره وارد شوید!");
    window.location.href = "http://localhost:3005/login";
  }


  else if (status >= 400 && status < 500) {
    if (Array.isArray(data?.ErrorMessage) && data.ErrorMessage.length > 0) {
      toast.error(data.ErrorMessage[0]);
    } else {
      toast.error(`Client error: ${status}`);
    }
  }

  else if (status >= 500) {
    toast.error("Server error: " + (data?.message || status));
  }

  return Promise.reject(err);
};


http.interceptors.response.use(onSuccess, onError);


// http.interceptors.request.use((config) => {
//   const token = getItem("token");
//   if (token) {
//     config.headers.Authorization = "Bearer " + token;
//   }
//   return config;
// });
http.interceptors.request.use(
  (config) => {
    try {
      const token = getItem("token");
      if (token) config.headers.Authorization = "Bearer " + token;
    } catch (e) {
      console.warn("Error getting token:", e);
    }
    return config;
  },
  (error) => Promise.reject(error)
);


export default http;
