import { TOKEN_KEY } from "../constants";

// Put in ENV
const { REACT_APP_API_URL } = process.env;

const api = (endpoint, { body, ...customConfig } = {}) => {
  const token = localStorage.getItem(TOKEN_KEY);
  const headers = { "content-type": "application/json" };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return fetch(`${REACT_APP_API_URL}${endpoint}`, config).then(async (r) => {
    let json = "";
    if (r.status === 204) return json;
    const contentType = r.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      try {
        json = await r.json();
      } catch (e) {
        console.log("API Error");
        console.log(e);
        console.log(r);
        json = r;
      }
    }
    if (r.status >= 200 && r.status <= 204) {
      return json;
    }
    return Promise.reject(json);
  });
};

export default api;
