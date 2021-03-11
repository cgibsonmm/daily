import { writable } from "svelte/store";

export const DEFAULT_USER = { email: null };

export const user = writable(DEFAULT_USER);

export const logout = () => {
  console.log(user);
  user.set(DEFAULT_USER);
};

export const login = (email) => {
  user.update((currentUser) => ({ ...currentUser, email }));
};
