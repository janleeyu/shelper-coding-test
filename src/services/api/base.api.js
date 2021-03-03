import axios from "axios";
import interceptor from './interceptor';
import config from "../../config";
import { UNAUTHORIZED } from "../../constants/api";
import { destroyCookie } from "../../utils/helpers";
import { ACCESS_TOKEN_KEY } from "../../constants/auth";

class Api {
  constructor() {
    this.baseUrl = config.api.baseUrl;
    interceptor();
  }

  async get(url, params) {
    const config = { params, baseURL: this.baseUrl };
    const response = await axios
      .get(url, config)
      .then(
        (result) => {
          return { status: 200, data: result.data };
        },
        (err) => handleError(err)
      );
    if (response.status >= 400) {
      return handleError(response);
    }
    return response;
  }

  async post(url, body = null) {}

  async put(url, body = null) {}

  async patch(url, body = null) {}

  async delete(url, params) {}
}

const handleError = (error) => {
  const { status } = error;
  if (status === UNAUTHORIZED) {
    destroyCookie(ACCESS_TOKEN_KEY);
    window.location = '/';
  }

  return { status: 400, ...error.response };
}

export default new Api();
