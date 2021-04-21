import axios from "axios";

const URL = process.env.HEROKU_URL || "http://localhost:3001/api/v1";
const TOKEN = null;

const api = axios.create({
  baseURL: `${URL}`,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const getFlights = async () => {
  let res = api();
};
