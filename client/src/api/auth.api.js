import axios from "./axios.api";

export const loginRequest = async (user) => axios.post(`/login`, user);

export const userRequest = async () => axios.get(`/user`);

export const menuRequest = async () => axios.get(`/menu`);
