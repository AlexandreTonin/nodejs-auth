import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiService = {
  register: async (userData) => {
    const response = await api.post("/register", userData);
    return response.data;
  },
  login: async (credentials) => {
    const response = await api.post("/login", credentials);
    return response.data;
  },
  getUserProfile: async () => {
    const response = await api.get("/profile");
    return response.data;
  },
};

export default apiService;
