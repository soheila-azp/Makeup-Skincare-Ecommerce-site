 import http from "../interceptor";
// import axios from "axios";

// export const signIn = (data) => {
//   return axios.post("http://localhost:3500/v1/auth/signIn", data);
// };

export const signIn = (data) => {
  return http.post(`/v1/auth/signIn`, data);
};

export const signUp = (data) => {
  return http.post(`/v1/auth/signUp`, data);
};
