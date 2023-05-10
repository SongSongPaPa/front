import axios from "axios";
import { useNavigate } from "react-router-dom";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

customAxios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      alert("유효하지 않은 정보입니다.");
      window.open("/", "_self");
    }
    if (error.response.status === 502) {
      alert("서버가 아픔 ㅜㅜ");
      window.open("/", "_self");
    }
    return Promise.reject(error);
  }
);

export default customAxios;
