import axios from "axios";
const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth";

export const registerAPICall = (register) =>
  axios.post(AUTH_REST_API_BASE_URL + "/register", register);
export const loginApiCall = (usernameOrEmail, password) =>
  axios.post(AUTH_REST_API_BASE_URL + "/login", { usernameOrEmail, password });
export const storeToken = (token) => localStorage.setItem("token", token);
export const getToken = () => localStorage.getItem("token");
