import { writable } from "svelte/store";
import { verify } from "../services/auth";

let user = null;

if (typeof window !== "undefined") {
  user = localStorage.getItem("current_user");
}

export const userStore = () => {
  const { subscribe, set } = writable(JSON.parse(user));

  const setCurrentUser = async (form) => {
    let userData = await verify();
    console.log(userData);
    await localStorage.setItem("current_user", JSON.stringify(userData));
    set(userData);
  };

  const logoutUser = async () => {
    await localStorage.removeItem("current_user");
    await localStorage.removeItem("auth_token");
    set(null);
  };

  return {
    subscribe,
    setCurrentUser,
    logoutUser,
  };
};

export const currentUser = userStore();
