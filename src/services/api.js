import axios from "axios";
const baseUrl =
  process.env.glide_lite_address || "http://www.localhost:3001/api/v1";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: null,
  },
});

export const getFlights = async () => {
  try {
    let res = await api("/flights");
    return res.data;
  } catch (e) {
    return e.message;
  }
};

export const postFlight = async (data) => {
  try {
    let res = await api.post("/flights", { flight: data });
    return res.data;
  } catch (e) {
    return e.message;
  }
};

export default api;
