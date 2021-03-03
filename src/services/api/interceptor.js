import Axios from "axios";
import { ACCESS_TOKEN_KEY } from "../../constants/auth";
import { loadCookie } from "../../utils/helpers";

export default () => {
  Axios.interceptors.request.use(function (config) {
    const token = loadCookie(ACCESS_TOKEN_KEY);
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};
