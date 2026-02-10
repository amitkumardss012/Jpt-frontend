import axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL: ENV.BASE_URL,
//     headers: {
//         "Content-Type": "application/json",
//         "authorization" : `Bearer ${localStorage.getItem("loan_admin_token")}`
//     },
//     withCredentials: true
// })
export const axiosInstance = axios.create({
    baseURL: "https://jpt-three.vercel.app/api/v1",
    // baseURL: "http://localhost:4000/api/v1",
    headers: {
        "Content-Type": "application/json",
        "authorization" : `Bearer ${localStorage.getItem("loan_admin_token")}`
    },
    withCredentials: true
})


axiosInstance.interceptors.response.use(
    response => response, // If response is fine, return it
    error => {
      if (error.response && error.response.status === 401) {
        // Token expired or invalid
        alert("Session expired. Please log in again.");
        localStorage.removeItem("loan_admin_token"); // Remove token
        window.location.href = "/admin/login"; // Redirect to login
      }
      return Promise.reject(error);
    }
  );