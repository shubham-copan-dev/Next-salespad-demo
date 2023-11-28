// axiosInstance.ts
import { AxiosInstance } from "axios";
import axiosCommon from "./common/common";

const axiosInstance: AxiosInstance = axiosCommon;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = window.localStorage.getItem("token");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
      console.log(`Bearer ${accessToken}`, "heloooo");
    }

    config.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    console.log("heloooo", config.baseURL);
    return config;
  },
  (error) => {
    console.error("Request Error Interceptor:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    switch (error.response?.status) {
      case 401:
        // Clear localStorage and redirect to login
        localStorage.clear();
        document.location.href = "/login";
        break;
      case 400:
        alert(error.response.data.error.message);
        break;
      default:
        // Handle other errors
        break;
    }

    console.error("Response Error Interceptor:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
