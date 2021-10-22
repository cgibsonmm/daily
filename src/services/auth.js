import axios from "axios";
const baseUrl = process.env.glide_lite_address || "http://www.localhost:3001/";

let token = null;
const api = axios.create({
  baseURL: baseUrl,
});

export const createUser = async (user) => {
  try {
    let res = await api.post("/users", user);
    return res.data;
  } catch (e) {
    return e.message;
  }
};

export const loginUser = async (user) => {
  try {
    let res = await api.post("/api/v1/auth", user);
    await localStorage.setItem("auth_token", res.data.token);
    return res.data;
  } catch (e) {
    return e.message;
  }
};

export const verify = async () => {
  token = localStorage.getItem("auth_token");

  try {
    if (token) {
      api.defaults.headers.common.authorization = token;
      let res = await api.get("/api/v1/auth");

      return res.data;
    }
  } catch (e) {
    return e.message;
  }
};
