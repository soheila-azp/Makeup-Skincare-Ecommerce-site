import axios from "axios";
import { toast } from "react-toastify";
import { getItem, removeItem } from "../common/storage.services";

const baseURL = import.meta.env.VITE_BASE_URL;

const http = axios.create({
  baseURL: baseURL,
});

// هندل موفقیت پاسخ‌ها
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

// هندل همه خطاها
const onError = (err) => {
  // خطاهای شبکه یا CORS
  if (!err.response) {
    toast.error("Network error or CORS issue: " + err.message);
    return Promise.reject(err);
  }

  const status = err.response.status;
  const data = err.response.data;

  // خطاهای Validation 422
  if (status === 422 && Array.isArray(data?.ErrorMessage)) {
    data.ErrorMessage.forEach((msg) => toast.error(msg));
  }

  // دسترسی غیرمجاز 401
  else if (status === 401) {
    removeItem("token");
    toast.error("اجازه دسترسی شما منقضی شد، لطفا دوباره وارد شوید!");
    window.location.href = "http://localhost:3005/login";
  }

  // سایر خطاهای Client (400-499)
  else if (status >= 400 && status < 500) {
    if (Array.isArray(data?.ErrorMessage) && data.ErrorMessage.length > 0) {
      toast.error(data.ErrorMessage[0]);
    } else {
      toast.error(`Client error: ${status}`);
    }
  }

  // خطاهای Server (500+)
  else if (status >= 500) {
    toast.error("Server error: " + (data?.message || status));
  }

  return Promise.reject(err);
};

// اینترسپتور پاسخ
http.interceptors.response.use(onSuccess, onError);

// اینترسپتور درخواست (اضافه کردن توکن)
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
