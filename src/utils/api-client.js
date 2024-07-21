import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:8000",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export default axiosClient;
