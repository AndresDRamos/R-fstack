import axios from "./axios.api";

export const getMachinesRequest = async () => axios.get("/maquinas");

export const createMachineRequest = async (maquina) =>
  axios.post("/maquinas", maquina);

export const readMachineRequest = async (id) => axios.get(`/maquinas/${id}`);

export const updateMachineRequest = async (id, newFields) =>
  axios.put(`/maquinas/${id}`, newFields);

export const deleteMachineRequest = async (id) =>
  axios.delete(`/maquinas/${id}`);
