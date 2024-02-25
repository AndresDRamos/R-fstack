import axios from "./axios.api";

export const getInformesRequest = async () => axios.get("/informes");

export const readInformeRequest = async (id) => axios.get(`/informes/${id}`);
