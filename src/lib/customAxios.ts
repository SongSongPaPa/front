import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

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
