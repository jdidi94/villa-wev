import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "http://localhost:4000/api";
const Url_GOOGLE = "";
const encode = encodeURIComponent;
const responseBody = (res) => res.body;

let token = null;
const tokenPlugin = (req) => {
  if (token) {
    req.set("authorization", `Token ${token}`);
  }
};

const requests = {
  del: (url) =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url) =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
};
const user = {
  login: (email, password) => requests.post("/user/login", { email, password }),
  register: (username, email, password) =>
    requests.post("/user/signup", { username, email, password }),
  googleLogin: (tokenId) => requests.post("/user/googleLogin", { tokenId }),
  verifyUser: (token) => requests.post("/user/verifyUser", { token }),
};
export default {
  setToken: (_token) => {
    token = _token;
  },
  user: user,
};
