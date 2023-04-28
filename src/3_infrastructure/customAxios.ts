import axios from "axios";
//import { getLocalStorage, removeLocalStorage } from "../utils/localStorage";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

// customAxios.defaults.withCredentials = true;
// customAxios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// customAxios.defaults.headers.common["Access-Control-Allow-Methods"] = "*";
// customAxios.defaults.headers.common["Access-Control-Allow-Headers"] = "*";

customAxios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

customAxios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => Promise.reject(error)
);

export default customAxios;
