import api from "./api";

export const grabGear = async () => {
  const res = await api("/gear");
  return res.data;
};
